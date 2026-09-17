(() => {
  "use strict";

  const dialog = document.getElementById("walkthrough-lightbox");
  if (!dialog) return;

  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const triggers = Array.from(document.querySelectorAll(".lightbox-trigger"));
  const closeButton = dialog.querySelector(".lightbox-close");
  const closeControls = Array.from(dialog.querySelectorAll("[data-lightbox-dismiss]"));

  let lastTrigger = null;

  const onKeydown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }
    if (event.key === "Tab") {
      // The dialog exposes a single focusable control (the close button),
      // so trap focus there for the lifetime of the dialog.
      event.preventDefault();
      closeButton.focus();
    }
  };

  function openLightbox(trigger) {
    const src = trigger.getAttribute("data-lightbox-src");
    if (!src) return;

    const triggerImage = trigger.querySelector("img");
    const altText = triggerImage ? triggerImage.getAttribute("alt") : "";
    const captionText = trigger.getAttribute("data-lightbox-caption") || "";

    lastTrigger = trigger;
    image.src = src;
    image.alt = altText || "Enlarged walkthrough screenshot preview.";
    caption.textContent = captionText;

    dialog.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
    document.addEventListener("keydown", onKeydown, true);
  }

  function closeLightbox() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove("lightbox-open");
    document.removeEventListener("keydown", onKeydown, true);
    if (lastTrigger) {
      lastTrigger.focus();
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  closeControls.forEach((control) => {
    control.addEventListener("click", closeLightbox);
  });
})();
