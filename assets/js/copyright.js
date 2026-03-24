(() => {
  const COPYRIGHT = {
    name: "Big Hill Runners",
    year: new Date().getFullYear(), // auto-updates every year
    design: {
      label: "HTML5 UP",
      href: "https://html5up.net",
    },
  };

  function buildCopyrightHTML() {
    return `
      <ul>
        <li>&copy; ${COPYRIGHT.year} ${COPYRIGHT.name}</li>
        <li>Design: <a href="${COPYRIGHT.design.href}">${COPYRIGHT.design.label}</a></li>
      </ul>
    `;
  }

  function initCopyright() {
    const el = document.getElementById("copyright");
    if (!el) return;
    el.innerHTML = buildCopyrightHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCopyright);
  } else {
    initCopyright();
  }
})();