(() => {
  const HEADER = {
    title: "Big Hill Runners",
    subtitle: "A running club in Cochrane, Alberta.",
    homeHref: "/index.html",
  };

  function buildHeaderHTML() {
    return `
      <a href="${HEADER.homeHref}" class="logo">${HEADER.title}</a>
      <p>${HEADER.subtitle}</p>
    `;
  }

  function initHeader() {
    const header = document.getElementById("header");
    if (!header) return;
    header.innerHTML = buildHeaderHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeader);
  } else {
    initHeader();
  }
})();