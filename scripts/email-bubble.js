const emailTrigger = document.querySelector("[data-email-trigger]");
const emailBubbleWrap = document.querySelector(".email-bubble-wrap");
const emailBubble = document.querySelector("#email-bubble");

let bubbleResetTimeout;

function showBubbleMessage(message) {
  if (!emailBubble) {
    return;
  }

  const originalText = emailBubble.dataset.originalText || emailBubble.textContent.trim();
  emailBubble.dataset.originalText = originalText;
  emailBubble.textContent = message;

  window.clearTimeout(bubbleResetTimeout);
  bubbleResetTimeout = window.setTimeout(() => {
    emailBubble.textContent = originalText;
  }, 1200);
}

async function copyEmailToClipboard() {
  if (!emailBubble) {
    return;
  }

  const email = (emailBubble.dataset.originalText || emailBubble.textContent).trim();

  try {
    await navigator.clipboard.writeText(email);
    showBubbleMessage("Copied!");
  } catch {
    const helper = document.createElement("textarea");
    helper.value = email;
    helper.setAttribute("readonly", "");
    helper.style.position = "absolute";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
    showBubbleMessage("Copied!");
  }
}

function setBubbleOpen(isOpen) {
  if (!emailBubbleWrap || !emailTrigger) {
    return;
  }

  emailBubbleWrap.classList.toggle("open", isOpen);
  emailTrigger.setAttribute("aria-expanded", String(isOpen));
}

function initializeEmailBubble() {
  if (!emailTrigger || !emailBubbleWrap || !emailBubble) {
    return;
  }

  emailBubble.dataset.originalText = emailBubble.textContent.trim();
  emailBubble.setAttribute("title", "Click to copy");

  emailTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = emailBubbleWrap.classList.contains("open");
    setBubbleOpen(!isOpen);
  });

  emailBubble.addEventListener("click", () => {
    copyEmailToClipboard();
  });

  document.addEventListener("click", (event) => {
    if (!emailBubbleWrap.contains(event.target)) {
      setBubbleOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setBubbleOpen(false);
    }
  });
}

initializeEmailBubble();
