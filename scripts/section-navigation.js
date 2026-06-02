const HOME_SECTION_ID = "home";
const TRANSITION_DURATION_MS = 180;
const SUBSECTION_TO_SECTION = {
  "misc-visited": "miscellaneous",
  "misc-videogames": "miscellaneous",
  "misc-literature": "miscellaneous",
  "misc-movies": "miscellaneous"
};
const detailSections = Array.from(document.querySelectorAll(".detail-section"));
const detailSectionIds = new Set(detailSections.map((section) => section.id));
const homeSection = document.getElementById(HOME_SECTION_ID);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const miscContainer = document.querySelector(".nav-misc");
const miscToggle = document.querySelector(".nav-misc-toggle");

let transitionQueue = Promise.resolve();

function scrollSectionToTop(section) {
  if (!section) {
    return;
  }

  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.getBoundingClientRect().height + 12 : 12;
  const targetTop = Math.max(0, window.scrollY + section.getBoundingClientRect().top - headerOffset);

  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
}

function animateOpacity(element, from, to) {
  if (!element || prefersReducedMotion) {
    return Promise.resolve();
  }

  element.style.opacity = String(from);

  const animation = element.animate(
    [{ opacity: from }, { opacity: to }],
    {
      duration: TRANSITION_DURATION_MS,
      easing: "ease"
    }
  );

  return animation.finished
    .catch(() => undefined)
    .then(() => {
      element.style.opacity = "";
    });
}

function setActiveSection(sectionId) {
  detailSections.forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });
}

async function transitionTo(sectionId) {
  const activeSection = detailSections.find((section) => section.classList.contains("active"));

  if (!sectionId || sectionId === HOME_SECTION_ID || !detailSectionIds.has(sectionId)) {
    if (activeSection) {
      await animateOpacity(activeSection, 1, 0);
    }

    setActiveSection(null);
    window.dispatchEvent(new CustomEvent("section:shown", { detail: { sectionId: HOME_SECTION_ID } }));
    homeSection?.classList.remove("is-home-hidden");
    await animateOpacity(homeSection, 0, 1);
    return;
  }

  if (activeSection && activeSection.id !== sectionId) {
    await animateOpacity(activeSection, 1, 0);
    activeSection.classList.remove("active");
  }

  if (homeSection && !homeSection.classList.contains("is-home-hidden")) {
    await animateOpacity(homeSection, 1, 0);
    homeSection.classList.add("is-home-hidden");
  }

  const targetSection = document.getElementById(sectionId);

  if (!targetSection) {
    return;
  }

  targetSection.classList.add("active");
  window.dispatchEvent(new CustomEvent("section:shown", { detail: { sectionId } }));
  await animateOpacity(targetSection, 0, 1);
  scrollSectionToTop(targetSection);
}

async function transitionToHash(sectionIdFromHash) {
  const parentSectionId = SUBSECTION_TO_SECTION[sectionIdFromHash] || sectionIdFromHash;
  const anchorTarget = SUBSECTION_TO_SECTION[sectionIdFromHash]
    ? document.getElementById(sectionIdFromHash)
    : null;

  await transitionTo(parentSectionId);

  if (anchorTarget) {
    scrollSectionToTop(anchorTarget);
  }
}

function showSectionFromHash(hashValue) {
  const sectionIdFromHash = hashValue.replace("#", "");
  transitionQueue = transitionQueue.then(() => transitionToHash(sectionIdFromHash));
}

function toggleMiscMenu(forceOpen) {
  if (!miscContainer || !miscToggle) {
    return;
  }

  const willOpen = typeof forceOpen === "boolean" ? forceOpen : !miscContainer.classList.contains("open");
  miscContainer.classList.toggle("open", willOpen);
  miscToggle.setAttribute("aria-expanded", String(willOpen));
}

function initializeNavigation() {
  miscToggle?.addEventListener("click", () => {
    toggleMiscMenu();
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";

      if (!href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      history.replaceState(null, "", href);
      showSectionFromHash(href);
      toggleMiscMenu(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (miscContainer && !miscContainer.contains(event.target)) {
      toggleMiscMenu(false);
    }
  });

  showSectionFromHash(window.location.hash);
}

initializeNavigation();
