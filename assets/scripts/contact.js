function updateVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

function positionText() {
  const img = document.getElementById("hero");

  const elements = [
    { id: "contactheader", px: 0.50, py: 0.25 },
    { id: "addressheader", px: 0.50, py: 0.50 },
    { id: "address",       px: 0.50, py: 0.605 },
    { id: "or",            px: 0.50, py: 0.667 },
    { id: "reservation",   px: 0.50, py: 0.735 }
  ];

  const naturalRatio = img.naturalWidth / img.naturalHeight;

  // WICHTIG: echte Gerätehöhe, nachdem die Browser-UI berücksichtigt wurde
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  const viewportRatio = vw / vh;

  let visibleWidth, visibleHeight, offsetX, offsetY;

  if (viewportRatio > naturalRatio) {
    visibleWidth = vw;
    visibleHeight = vw / naturalRatio;
    offsetX = 0;
    offsetY = (visibleHeight - vh) / 2;
  } else {
    visibleHeight = vh;
    visibleWidth = vh * naturalRatio;
    offsetY = 0;
    offsetX = (visibleWidth - vw) / 2;
  }

  elements.forEach(el => {
    const domEl = document.getElementById(el.id);
    if (!domEl) return;

    const x = el.px * visibleWidth - offsetX;
    const y = el.py * visibleHeight - offsetY;

    domEl.style.left = `${x}px`;
    domEl.style.top  = `${y}px`;
  });
}

// Bei jedem Resize zuerst die reale Höhe aktualisieren,
// dann den Text neu positionieren
function handleResize() {
  updateVh();
  positionText();
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);