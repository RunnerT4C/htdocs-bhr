(() => {
  const FOOTER = {
    formAction: "https://formspree.io/f/mkowopnd",
    address: "Cochrane, AB",
    email: "info@bighillrunners.com",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61585470270293",
        iconClass: "icon brands alt fa-facebook-f",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/bighillrunners/",
        iconClass: "icon brands alt fa-instagram",
      },
    ],
  };

  function buildFooterHTML() {
    const socialsHtml = FOOTER.socials
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
      <section>
        <form method="post" action="${FOOTER.formAction}">
          <div class="fields">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>
      </section>

      <section class="split contact">
        <section class="alt">
          <h3>Address</h3>
          <p>${FOOTER.address}</p>
        </section>
        <section>
          <h3>Email</h3>
          <p><a href="mailto:${FOOTER.email}">${FOOTER.email}</a></p>
        </section>
        <section>
          <h3>Social</h3>
          <ul class="icons alt">
            ${socialsHtml}
          </ul>
        </section>
      </section>
    `;
  }

  function initFooter() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    footer.innerHTML = buildFooterHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooter);
  } else {
    initFooter();
  }
})();