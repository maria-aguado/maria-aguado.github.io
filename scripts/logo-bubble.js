const logoTrigger = document.querySelector("[data-logo-trigger]");
const logoBubbleWrap = document.querySelector(".footer-logo-wrap");

function setLogoBubbleOpen(isOpen) {
  if (!logoBubbleWrap || !logoTrigger) {
    return;
  }

  logoBubbleWrap.classList.toggle("open", isOpen);
  logoTrigger.setAttribute("aria-expanded", String(isOpen));
}

function initializeLogoBubble() {
  if (!logoTrigger || !logoBubbleWrap) {
    return;
  }

  logoTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = logoBubbleWrap.classList.contains("open");
    setLogoBubbleOpen(!isOpen);
  });

  document.addEventListener("click", (event) => {
    if (!logoBubbleWrap.contains(event.target)) {
      setLogoBubbleOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setLogoBubbleOpen(false);
    }
  });
}

initializeLogoBubble();
