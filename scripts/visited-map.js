const VISITED_COUNTRY_CODES = [
	"AT",
	"CY",
	"CZ",
	"FR",
	"DE",
	"HU",
	"IE",
	"IT",
	"MC",
	"PT",
	"ES",
	"CH",
	"SE",
	"GB",
	"VA",
	"CO",
	"IN"
];

const VISITED_COLOR = "#ff00c8";

const COUNTRY_NAMES = {
	en: {
		AT: "Austria",
		CY: "Cyprus",
		CZ: "Czech Republic",
		FR: "France",
		DE: "Germany",
		HU: "Hungary",
		IE: "Ireland",
		IT: "Italy",
		MC: "Monaco",
		PT: "Portugal",
		ES: "Spain",
		CH: "Switzerland",
		SE: "Sweden",
		GB: "United Kingdom",
		VA: "Vatican City",
		CO: "Colombia",
		IN: "India"
	},
	es: {
		AT: "Austria",
		CY: "Chipre",
		CZ: "República Checa",
		FR: "Francia",
		DE: "Alemania",
		HU: "Hungría",
		IE: "Irlanda",
		IT: "Italia",
		MC: "Mónaco",
		PT: "Portugal",
		ES: "España",
		CH: "Suiza",
		SE: "Suecia",
		GB: "Reino Unido",
		VA: "Ciudad del Vaticano",
		CO: "Colombia",
		IN: "India"
	}
};

function createVisitedCountryData() {
	return VISITED_COUNTRY_CODES.reduce((acc, countryCode) => {
		acc[countryCode] = {
			visits: 1,
			color: VISITED_COLOR
		};
		return acc;
	}, {});
}

function getMapLabels() {
	const language = document.documentElement.lang?.toLowerCase();

	if (language === "es") {
		return {
			noDataText: "Aún no visitado",
			visitedLabel: "Visitado"
		};
	}

	return {
		noDataText: "Not visited yet",
		visitedLabel: "Visited"
	};
}

function getCountryName(countryID) {
	const language = document.documentElement.lang?.toLowerCase() === "es" ? "es" : "en";
	const code = countryID.toUpperCase();
	const translatedName = COUNTRY_NAMES[language]?.[code];

	if (translatedName) {
		return translatedName;
	}

	if (typeof Intl !== "undefined" && typeof Intl.DisplayNames === "function") {
		try {
			const displayNames = new Intl.DisplayNames([language], { type: "region" });
			const intlName = displayNames.of(code);

			if (intlName && intlName !== code) {
				return intlName;
			}
		} catch (_error) {
		}
	}

	const countryPath =
		document.getElementById(`svgMap-map-country-${countryID}`) ||
		document.getElementById(`svgMap-map-country-${code}`) ||
		document.getElementById(`svgMap-map-country-${countryID.toLowerCase()}`);

	return countryPath?.getAttribute("data-name") || code;
}

function getTooltipNode(countryID, isVisited, labels) {
	const countryName = getCountryName(countryID);
	const flagUrl = `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${countryID.toLowerCase()}.svg`;
	const statusText = isVisited ? labels.visitedLabel : labels.noDataText;
	const wrapper = document.createElement("div");

	wrapper.innerHTML = `
		<div class="svgMap-tooltip-content-container">
			<div class="svgMap-tooltip-title">
				<div class="svgMap-tooltip-flag-container">
					<img src="${flagUrl}" alt="${countryName} flag" width="16" height="11" />
				</div>
				<div class="svgMap-tooltip-country-name">${countryName}</div>
			</div>
			<div class="svgMap-tooltip-items">
				<div class="svgMap-tooltip-item">${statusText}</div>
			</div>
		</div>
	`;

	return wrapper.firstElementChild;
}

function renderVisitedMap() {
	const mapNode = document.getElementById("visited-map");

	if (!mapNode) {
		return false;
	}

	if (mapNode.offsetParent === null || mapNode.clientWidth === 0) {
		return false;
	}

	mapNode.innerHTML = "";

	if (typeof window.svgMap !== "function") {
		mapNode.textContent = "Map unavailable right now. Please refresh the page.";
		return false;
	}

	const labels = getMapLabels();

	new window.svgMap({
		targetElementID: "visited-map",
		colorMin: VISITED_COLOR,
		colorMax: VISITED_COLOR,
		noDataText: labels.noDataText,
		onGetTooltip: (_tooltipDiv, countryID, countryValues) => {
			return getTooltipNode(countryID, Boolean(countryValues?.visits), labels);
		},
		data: {
			data: {
				visits: {
					name: labels.visitedLabel,
					format: "",
					thousandSeparator: ","
				}
			},
			applyData: "visits",
			values: createVisitedCountryData()
		}
	});

	return true;
}

function scheduleMapRender(retries = 10) {
	if (renderVisitedMap() || retries <= 0) {
		return;
	}

	window.setTimeout(() => {
		scheduleMapRender(retries - 1);
	}, 90);
}

scheduleMapRender();

const languageObserver = new MutationObserver(() => {
	scheduleMapRender();
});

languageObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ["lang"]
});

window.addEventListener("section:shown", (event) => {
	if (event.detail?.sectionId === "miscellaneous") {
		scheduleMapRender();
	}
});
