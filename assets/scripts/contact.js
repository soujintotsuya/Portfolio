function positionText() {
  const img = document.getElementById("hero");

  // Liste aller Textbausteine
  const elements = [
    { id: "contactheader", px: 0.50, py: 0.25 },
    { id: "addressheader", px: 0.50, py: 0.50 },
    { id: "address",       px: 0.50, py: 0.605 },
    { id: "or",       px: 0.50, py: 0.667 },
    { id: "reservation",       px: 0.50, py: 0.735 }
  ];

  const naturalRatio = img.naturalWidth / img.naturalHeight;
  const viewportRatio = window.innerWidth / window.innerHeight;

  let visibleWidth, visibleHeight, offsetX, offsetY;

  if (viewportRatio > naturalRatio) {
    // Bild wird oben/unten beschnitten
    visibleWidth = window.innerWidth;
    visibleHeight = window.innerWidth / naturalRatio;
    offsetX = 0;
    offsetY = (visibleHeight - window.innerHeight) / 2;
  } else {
    // Bild wird links/rechts beschnitten
    visibleHeight = window.innerHeight;
    visibleWidth = window.innerHeight * naturalRatio;
    offsetY = 0;
    offsetX = (visibleWidth - window.innerWidth) / 2;
  }

  // Für jedes Textelement die Position berechnen
  elements.forEach(el => {
    const domEl = document.getElementById(el.id);
    if (!domEl) return;

    const x = el.px * visibleWidth - offsetX;
    const y = el.py * visibleHeight - offsetY;

    domEl.style.left = `${x}px`;
    domEl.style.top  = `${y}px`;
  });
}

window.addEventListener("load", positionText);
window.addEventListener("resize", positionText);
