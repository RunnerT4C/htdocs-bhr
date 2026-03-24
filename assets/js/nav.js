(() => {
  const NAV = {
    links: [
      { label: "About", href: "/index.html" },
      { label: "Schedule", href: "/schedule.html" },
      { label: "6 Summits of Spring", href: "/six-summits.html" },
    ],
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61585470270293",
        iconClass: "icon brands fa-facebook-f",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/bighillrunners/",
        iconClass: "icon brands fa-instagram",
      },
    ],
  };

  function normalizePath(path) {
    if (!path || path === "/") return "/index.html";
    return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  }

  function isActive(href) {
    if (!href || href.startsWith("http") || href === "#") return false;
    return normalizePath(window.location.pathname) === normalizePath(href);
  }

  function buildNavHTML() {
    const linksHtml = NAV.links
      .map((link) => {
        const activeClass = isActive(link.href) ? ' class="active"' : "";
        return `<li${activeClass}><a href="${link.href}">${link.label}</a></li>`;
      })
      .join("");

    const socialsHtml = NAV.socials
      .map(
        (social) => `
          <li>
            <a href="${social.href}" target="_blank" rel="noopener noreferrer" class="${social.iconClass}">
              <span class="label">${social.label}</span>
            </a>
          </li>
        `
      )
      .join("");

    return `
      <ul class="links">
        ${linksHtml}
      </ul>
      <ul class="icons">
        ${socialsHtml}
      </ul>
    `;
  }

  function initNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    nav.innerHTML = buildNavHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }
})();