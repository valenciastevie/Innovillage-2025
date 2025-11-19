window.addEventListener("DOMContentLoaded", function () {
  function setResponsiveStylesheet() {
    const link = document.getElementById("stylesheet");
    if (!link) return;

    const isMobile = window.innerWidth <= 768;
    link.href = (isMobile ? "mobile.css" : "style.css") + "?v=" + Date.now();
  }

  setResponsiveStylesheet();
  window.addEventListener("resize", setResponsiveStylesheet);
});
