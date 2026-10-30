/* ==========================================================
   Nicholas Encina: portfolio behavior
   Renders project cards from projects.js, contact links,
   and scroll reveals.
   ========================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Render projects ---------- */
  var grid = document.getElementById("project-grid");

  function cardHTML(p) {
    var hl = (p.highlights || []).length
      ? '<ul class="highlights">' + p.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>"
      : "";
    var use = p.use ? '<p class="use"><b>Try it</b>' + esc(p.use) + "</p>" : "";
    var thumb = p.image
      ? '<a class="thumb" href="' + esc(p.url) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' +
          '<img src="' + esc(p.image) + '" alt="" loading="lazy" width="1600" height="1000">' +
        "</a>"
      : "";

    return (
      '<article class="card reveal">' +
        thumb +
        '<div class="card-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.summary) + "</p>" +
          use + hl +
          '<div class="card-actions">' +
            '<a class="btn btn-primary btn-sm" href="' + esc(p.url) + '" target="_blank" rel="noopener">Open project ↗</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderProjects() {
    if (!grid) return;
    grid.insertAdjacentHTML("beforeend", PROJECTS.map(cardHTML).join(""));
  }

  /* ---------- Contact ---------- */
  (function renderContact() {
    var items = [];
    if (SITE.email) items.push({ label: SITE.email, url: "mailto:" + SITE.email, primary: true });
    (SITE.links || []).forEach(function (l) { if (l && l.url) items.push({ label: l.label || l.url, url: l.url }); });
    if (!items.length) return;

    document.getElementById("contact").hidden = false;
    document.getElementById("nav-contact").hidden = false;
    document.getElementById("contact-links").innerHTML = items
      .map(function (it) {
        var ext = it.url.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
        return '<a class="btn ' + (it.primary ? "btn-primary" : "btn-ghost") + '" href="' + esc(it.url) + '"' + ext + ">" + esc(it.label) + "</a>";
      })
      .join("");
  })();

  renderProjects();

  /* ---------- Scroll reveal ---------- */
  (function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  })();
})();
