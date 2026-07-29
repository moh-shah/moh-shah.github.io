/**
 * ============================================================
 *  SITE CONFIG
 * ============================================================
 * Your name, title, bio, and links live here in ONE place.
 * The header and footer are built from this + injected into
 * every page automatically — edit them once, they update
 * everywhere.
 * ============================================================
 */
const SITE = {
  name: "Mohammad-Shahriari",
  role: "I make games",
  tagline: "Co-Founder • Software Engineer • Technical Lead",
  bio: "Since I can remember, I've been passionate about video games. My journey in game development began in 2015, initially beyond programming, before transitioning into software engineering in 2018.I've worked across both client-side and backend development, primarily with Unity, C#, and .NET. Today, I'm the co-founder and Studio Director of Zimo Games, where I combine technical leadership with product development, publisher relations, and team management. As an engineer, I'm passionate about building readable, maintainable, and scalable software architectures. I enjoy designing gameplay systems from the ground up, solving challenging technical problems, and creating tools that improve development workflows. I'm a strong believer in continuous learning and constantly explore new technologies, engineering practices, and design approaches. I'm particularly interested in multiplayer networking, game architecture, procedural generation, and complex gameplay systems. While I find joy in diverse gaming experiences, I have a particular fondness for Rogue-like, Metroidvania, and MOBA genres.",
  email: "moh.shah96@gmail.com",
  location: "TODO — City, Country",
  available: true, // shows the "available for work" indicator in the header
  social: {
    github: "https://github.com/moh-shah",
    linkedin: "https://www.linkedin.com/in/mohshah/",
    twitter: "https://medium.com/@mo-shah/versus-how-we-took-our-offline-game-online-e07353f1cfc0"
  },
  skills: {
    Languages: ["English", "Persian"],
    //"Engines & Frameworks": ["Unity", ".Net/.Net Core"],
    Skills: ["Team Management", "Startup", "Technical Leadership"],
  },
};

const STATUS_STYLE = {
  LIVE: { dot: "status-live", label: "LIVE" },
  SHIPPED: { dot: "status-shipped", label: "SHIPPED" },
  "IN DEV": { dot: "status-indev", label: "IN DEV" },
  PROTOTYPE: { dot: "status-proto", label: "PROTOTYPE" },
  TODO: { dot: "status-todo", label: "TODO" },
};

function statusStyle(status) {
  return STATUS_STYLE[status] || STATUS_STYLE.TODO;
}

/* ------------------------------------------------------------
   HEADER + FOOTER (shared across every page — edit once here)
------------------------------------------------------------ */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark">/${SITE.name.split(" ")[0].toLowerCase()}</span>
        <span class="brand-role">${SITE.role}</span>
      </a>
      <nav class="nav">
        <a href="index.html#work">Work</a>
        <a href="index.html#about">About</a>
        <a href="index.html#contact">Contact</a>
      </nav>
      ${
        SITE.available
          ? `<div class="availability"><span class="pulse-dot"></span>Open to contract work</div>`
          : ""
      }
    </div>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  const links = [
    SITE.social.github ? `<a href="${SITE.social.github}" target="_blank" rel="noopener">GitHub</a>` : "",
    SITE.social.linkedin ? `<a href="${SITE.social.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : "",
    SITE.social.twitter ? `<a href="${SITE.social.twitter}" target="_blank" rel="noopener">Medium</a>` : "",
    SITE.email ? `<a href="mailto:${SITE.email}">Email</a>` : "",
  ]
    .filter(Boolean)
    .join("");

  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-links">${links}</div>
      <div class="footer-meta">© ${year} ${SITE.name} — built with HTML/CSS/JS, deployed on GitHub Pages.</div>
    </div>
  `;
}

/* ------------------------------------------------------------
   HERO STATUS CONSOLE (homepage only)
   Reads live from PROJECTS — no manual upkeep required.
------------------------------------------------------------ */
function renderConsole() {
  const el = document.getElementById("status-console");
  if (!el) return;
  const rows = PROJECTS.slice(0, 6)
    .map((p) => {
      const s = statusStyle(p.status);
      const dots = ".".repeat(Math.max(2, 24 - p.title.length));
      return `<div class="console-row"><span class="console-name">${p.slug}</span><span class="console-dots">${dots}</span><span class="console-status ${s.dot}">${s.label}</span></div>`;
    })
    .join("");
  el.innerHTML = `
    <div class="console-head">&gt; SYSTEM STATUS</div>
    ${rows}
    <div class="console-row console-cursor"><span class="console-name">_</span></div>
  `;
}

/* ------------------------------------------------------------
   PROJECT GRID (homepage only)
------------------------------------------------------------ */
function renderGrid() {
  const el = document.getElementById("project-grid");
  if (!el) return;
  el.innerHTML = PROJECTS.map((p) => {
    const s = statusStyle(p.status);
    const cover = p.cover
      ? `<img src="${p.cover}" alt="${p.title} cover" loading="lazy" />`
      : `<div class="cover-placeholder" aria-hidden="true"><span>${p.title
          .split(" ")
          .map((w) => w[0])
          .join("")}</span></div>`;
    return `
      <a class="project-card" href="project.html?slug=${encodeURIComponent(p.slug)}">
        <div class="card-cover">${cover}</div>
        <div class="card-body">
          <div class="card-meta">
            <span class="status-dot ${s.dot}"></span>
            <span class="card-status">${s.label}</span>
            <span class="card-year">${p.year}</span>
          </div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-blurb">${p.blurb}</p>
          <div class="card-tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      </a>
    `;
  }).join("");
}

/* ------------------------------------------------------------
   ABOUT / SKILLS (homepage only)
------------------------------------------------------------ */
function renderAbout() {
  const bioEl = document.getElementById("about-bio");
  if (bioEl) bioEl.textContent = SITE.bio;

  const skillsEl = document.getElementById("skills-panel");
  if (!skillsEl) return;
  skillsEl.innerHTML = Object.entries(SITE.skills)
    .map(
      ([group, items]) => `
      <div class="skill-group">
        <div class="skill-group-label">${group}</div>
        <div class="skill-tags">${items.map((i) => `<span class="tag">${i}</span>`).join("")}</div>
      </div>
    `
    )
    .join("");
}

/* ------------------------------------------------------------
   PROJECT DETAIL PAGE (project.html only)
------------------------------------------------------------ */
function renderProjectDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find((p) => p.slug === slug);

  document.title = project ? `${project.title} — ${SITE.name}` : `Project not found — ${SITE.name}`;

  if (!project) {
    el.innerHTML = `
      <div class="not-found">
        <div class="console-head">&gt; SIGNAL LOST</div>
        <p>No project found for slug "<code>${slug || ""}</code>".</p>
        <a class="btn" href="index.html">← Back to all work</a>
      </div>
    `;
    return;
  }

  const s = statusStyle(project.status);
  const cover = project.cover
    ? `<img class="detail-cover-img" src="${project.cover}" alt="${project.title} cover" />`
    : `<div class="cover-placeholder detail-cover-img" aria-hidden="true"><span>${project.title
        .split(" ")
        .map((w) => w[0])
        .join("")}</span></div>`;

  const linkButtons = [
    project.links?.live ? `<a class="btn btn-primary" href="${project.links.live}" target="_blank" rel="noopener">View Live ↗</a>` : "",
    project.links?.source ? `<a class="btn" href="${project.links.source}" target="_blank" rel="noopener">Source ↗</a>` : "",
    project.links?.video ? `<a class="btn" href="${project.links.video}" target="_blank" rel="noopener">Video ↗</a>` : "",
  ]
    .filter(Boolean)
    .join("");

  const storeButtons = (project.links?.stores || [])
  .map((s) => `<a class="btn" href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`)
  .join("");

  const gallery = (project.gallery || []).length
    ? `<div class="gallery">${project.gallery.map((g) => `<img src="${g}" alt="${project.title} screenshot" loading="lazy" />`).join("")}</div>`
    : "";

  el.innerHTML = `
    <a class="back-link" href="index.html#work">← All work</a>
    <div class="detail-cover">${cover}</div>
    <div class="detail-head">
      <div class="card-meta">
        <span class="status-dot ${s.dot}"></span>
        <span class="card-status">${s.label}</span>
        <span class="card-year">${project.year}</span>
      </div>
      <h1 class="detail-title">${project.title}</h1>
      <p class="detail-role">${project.role}</p>
      <div class="card-tags">${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${linkButtons ? `<div class="detail-links">${linkButtons + storeButtons}</div>` : ""}
    </div>
    <div class="detail-body">
      <div class="detail-summary">
        ${project.summary.map((p) => `<p>${p}</p>`).join("")}
      </div>
      ${
        project.highlights?.length
          ? `<div class="panel">
              <div class="panel-label">KEY_CONTRIBUTIONS.LOG</div>
              <ul class="highlights">${project.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
            </div>`
          : ""
      }
    </div>
    ${gallery}
  `;
}

/* ------------------------------------------------------------
   INIT
------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderConsole();
  renderGrid();
  renderAbout();
  renderProjectDetail();

  // set current year in hero (if present)
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
