import { SITE_CONTENT } from "../data/SITE_CONTENT.js";

const DEFAULT_LANG = "en";
const SUPPORTED_LANGUAGES = ["en", "es"];
const STORAGE_KEY = "maria_site_language";

const listTargets = {
  education: "education-list",
  publications: "publications-list",
  talks: "talks-list",
  conferences: "conferences-list",
  concerts: "concerts-list",
  workExperience: "work-experience-list",
  reviewerExperience: "reviewer-experience-list",
  coursesSchools: "courses-schools-list",
  otherProjects: "other-projects-list"
};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function renderText(lang) {
  const dictionary = SITE_CONTENT[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = getByPath(dictionary, key);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });
}

function getInstitutionInitials(institution) {
  if (!institution) {
    return "ED";
  }

  const initials = institution
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");

  return initials || "ED";
}

function getDateRange(startDate, endDate) {
  if (startDate && endDate) {
    return `${startDate} – ${endDate}`;
  }

  return startDate || endDate || "";
}

function renderEducationList(listElementId, items, lang) {
  const listNode = document.getElementById(listElementId);
  if (!listNode) {
    return;
  }

  listNode.innerHTML = "";

  const websiteLabel = SITE_CONTENT[lang]?.sections?.educationWebsite || "Website";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "education-item";

    let logoWrap = null;

    if (!item.hideLogo) {
      logoWrap = document.createElement("span");
      logoWrap.className = "education-logo";

      if (item.logo) {
        const logo = document.createElement("img");
        logo.className = "education-logo-image";
        if (item.logo.includes("plymouth-logo")) {
          logo.classList.add("education-logo-image--plymouth");
        }
        if (item.logo.includes("upf-logo")) {
          logo.classList.add("education-logo-image--upf");
        }
        logo.src = item.logo;
        logo.alt = `${item.institution} logo`;
        logoWrap.appendChild(logo);
      } else {
        const placeholder = document.createElement("span");
        placeholder.className = "education-logo-placeholder";
        placeholder.textContent = getInstitutionInitials(item.institution);
        logoWrap.appendChild(placeholder);
      }
    }

    const content = document.createElement("div");
    content.className = "education-content";

    const title = document.createElement("span");
    title.className = "item-title";
    title.textContent = item.title;

    const institution = document.createElement("span");
    institution.className = "item-meta";
    institution.textContent = item.institution || "";

    const dates = document.createElement("span");
    dates.className = "item-meta education-dates";
    const startDate = item.startDate || "";
    const endDate = item.endDate || "";
    dates.textContent = getDateRange(startDate, endDate);

    content.append(title);

    if (institution.textContent.trim()) {
      content.appendChild(institution);
    }

    const hasSubdivisions = Array.isArray(item.subdivisions) && item.subdivisions.length > 0;

    if (!hasSubdivisions) {
      content.appendChild(dates);
    }

    let subdivisionList = null;

    if (hasSubdivisions) {
      if (item.hideLogo) {
        subdivisionList = document.createElement("ul");
        subdivisionList.className = "education-subdivision-bullets";

        item.subdivisions.forEach((subdivision) => {
          const subdivisionItem = document.createElement("li");
          subdivisionItem.className = "education-subdivision-bullet-item";

          const subdivisionInstitution = document.createElement("span");
          subdivisionInstitution.className = "item-meta education-subdivision-institution";
          subdivisionInstitution.textContent = subdivision.institution || "";

          const subdivisionDates = document.createElement("span");
          subdivisionDates.className = "item-meta education-subdivision-dates";
          subdivisionDates.textContent = getDateRange(subdivision.startDate || "", subdivision.endDate || "");

          subdivisionItem.append(subdivisionInstitution);

          if (subdivisionDates.textContent.trim()) {
            subdivisionItem.append(" • ");
            subdivisionItem.append(subdivisionDates);
          }

          subdivisionList.appendChild(subdivisionItem);
        });
      } else {
        subdivisionList = document.createElement("div");
        subdivisionList.className = "education-subdivision-list";

        item.subdivisions.forEach((subdivision) => {
          const subdivisionItem = document.createElement("div");
          subdivisionItem.className = "education-subdivision-item";

          const subdivisionInfo = document.createElement("div");
          subdivisionInfo.className = "education-subdivision-info";

          const subdivisionInstitution = document.createElement("span");
          subdivisionInstitution.className = "item-meta education-subdivision-institution";
          subdivisionInstitution.textContent = subdivision.institution || "";

          const subdivisionDates = document.createElement("span");
          subdivisionDates.className = "item-meta education-subdivision-dates";
          subdivisionDates.textContent = getDateRange(subdivision.startDate || "", subdivision.endDate || "");

          subdivisionInfo.append(subdivisionInstitution, subdivisionDates);
          subdivisionItem.appendChild(subdivisionInfo);

          if (subdivision.website) {
            const subdivisionLink = document.createElement("a");
            subdivisionLink.className = "education-link-bubble";
            subdivisionLink.href = subdivision.website;
            subdivisionLink.target = "_blank";
            subdivisionLink.rel = "noopener noreferrer";
            subdivisionLink.textContent = websiteLabel;
            subdivisionItem.appendChild(subdivisionLink);
          }

          subdivisionList.appendChild(subdivisionItem);
        });
      }
    }

    if (logoWrap) {
      listItem.append(logoWrap, content);
    } else {
      listItem.classList.add("education-item--no-logo");
      listItem.append(content);
    }

    if (subdivisionList) {
      listItem.appendChild(subdivisionList);
    }

    if (item.website) {
      const websiteLink = document.createElement("a");
      websiteLink.className = "education-link-bubble";
      websiteLink.href = item.website;
      websiteLink.target = "_blank";
      websiteLink.rel = "noopener noreferrer";
      websiteLink.textContent = websiteLabel;
      listItem.appendChild(websiteLink);
    }

    listNode.appendChild(listItem);
  });
}

function renderPublicationsList(listElementId, items, lang) {
  const listNode = document.getElementById(listElementId);
  if (!listNode) {
    return;
  }

  listNode.innerHTML = "";

  const labels = {
    en: {
      publicationType: "Publication type",
      wherePublished: "Where published",
      date: "Date",
      doi: "DOI"
    },
    es: {
      publicationType: "Tipo de publicación",
      wherePublished: "Publicado en",
      date: "Fecha",
      doi: "DOI"
    }
  };

  const currentLabels = labels[lang] || labels.en;

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "publication-item";

    const header = document.createElement("div");
    header.className = "publication-header";

    const title = document.createElement("span");
    title.className = "item-title";
    title.textContent = item.title || "";

    header.appendChild(title);

    if (item.link) {
      const link = document.createElement("a");
      link.className = "education-link-bubble publication-link-bubble";
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = lang === "es" ? "Enlace" : "Link";
      header.appendChild(link);
    }

    listItem.appendChild(header);

    const detailValues = [
      item.publicationType,
      item.wherePublished,
      item.date
    ].filter(Boolean);

    if ((item.doi || "").trim()) {
      detailValues.push(`${currentLabels.doi}: ${item.doi}`);
    }

    const details = document.createElement("p");
    details.className = "publication-details item-meta";
    details.textContent = detailValues.join(", ");

    listItem.appendChild(details);
    listNode.appendChild(listItem);
  });
}

function renderList(listElementId, items, listKey, lang) {
  const listNode = document.getElementById(listElementId);
  if (!listNode) {
    return;
  }

  if (listKey === "education") {
    renderEducationList(listElementId, items, lang);
    return;
  }

  if (listKey === "publications") {
    renderPublicationsList(listElementId, items, lang);
    return;
  }

  listNode.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    const hasWebsite = Boolean(item.website);
    if (hasWebsite) {
      listItem.classList.add("item-list-item-with-link");
    }

    const content = document.createElement("div");
    content.className = "item-content";

    const title = document.createElement("span");
    title.className = "item-title";
    title.textContent = item.title;

    const meta = document.createElement("span");
    meta.className = "item-meta";
    meta.textContent = item.meta;

    content.append(title, meta);
    listItem.appendChild(content);

    if (hasWebsite) {
      const link = document.createElement("a");
      link.className = "education-link-bubble";
      link.href = item.website;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = SITE_CONTENT[lang]?.sections?.educationWebsite || (lang === "es" ? "Enlace" : "Link");
      listItem.appendChild(link);
    }

    listNode.appendChild(listItem);
  });
}

function renderLists(lang) {
  const listData = SITE_CONTENT[lang].lists;

  Object.entries(listTargets).forEach(([key, elementId]) => {
    renderList(elementId, listData[key] ?? [], key, lang);
  });
}

function renderCountryList(listElementId, countries) {
  const listNode = document.getElementById(listElementId);

  if (!listNode) {
    return;
  }

  listNode.innerHTML = "";

  countries.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.textContent = country;
    listNode.appendChild(listItem);
  });
}

function renderVisitedCountries(lang) {
  const visitedData = SITE_CONTENT[lang].visited;

  renderCountryList("visited-europe-list", visitedData.europeCountries ?? []);
  renderCountryList("visited-south-america-list", visitedData.southAmericaCountries ?? []);
  renderCountryList("visited-asia-list", visitedData.asiaCountries ?? []);
}

function highlightLanguageButton(lang) {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
}

function getInitialLanguage() {
  const fromStorage = localStorage.getItem(STORAGE_KEY);

  if (fromStorage && SUPPORTED_LANGUAGES.includes(fromStorage)) {
    return fromStorage;
  }

  const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();

  if (browserLanguage && SUPPORTED_LANGUAGES.includes(browserLanguage)) {
    return browserLanguage;
  }

  return DEFAULT_LANG;
}

function setLanguage(lang) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANG;
  localStorage.setItem(STORAGE_KEY, nextLanguage);

  renderText(nextLanguage);
  renderLists(nextLanguage);
  renderVisitedCountries(nextLanguage);
  highlightLanguageButton(nextLanguage);
}

function initializeLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang || DEFAULT_LANG);
    });
  });
}

initializeLanguageButtons();
setLanguage(getInitialLanguage());
