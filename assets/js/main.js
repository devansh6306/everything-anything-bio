/* Everything Anything Bio — small helpers. No frameworks needed. */
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Reading progress bar (post pages only)
  var bar = document.querySelector(".progress");
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  // Post cards, built from assets/js/posts.js
  var TRACKS = { everyday: "Everyday bio", deep: "Deep dive" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function niceDate(d) {
    var dt = new Date(d + "T00:00:00");
    if (isNaN(dt)) return "";
    return dt.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  }

  function card(p, base) {
    var track = TRACKS[p.track] ? p.track : "everyday";
    var meta = [niceDate(p.date), p.minutes ? p.minutes + " min read" : ""].filter(Boolean).join(" · ");
    return (
      '<a class="card" href="' + esc(base + p.url) + '">' +
      '<div class="emoji" aria-hidden="true">' + esc(p.emoji || "🧬") + "</div>" +
      '<span><span class="tag tag-' + track + '">' + TRACKS[track] + "</span></span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      "<p>" + esc(p.summary) + "</p>" +
      '<div class="meta">' + esc(meta) + "</div>" +
      "</a>"
    );
  }

  function emptyState(base) {
    return (
      '<div class="empty">' +
      '<img src="' + base + 'assets/img/mito-face.svg" alt="" width="110" height="110">' +
      "<div><strong>The first concept is on its way!</strong>" +
      "<p>Mito is charging up. Check back soon for the very first post.</p></div>" +
      "</div>"
    );
  }

  document.querySelectorAll("[data-posts]").forEach(function (el) {
    var posts = (window.POSTS || []).slice();
    var base = el.getAttribute("data-base") || "";
    var limit = parseInt(el.getAttribute("data-limit"), 10);
    var filterBar = document.querySelector("[data-filter-for='" + el.id + "']");

    function render(track) {
      var list = posts.filter(function (p) { return !track || track === "all" || p.track === track; });
      if (limit) list = list.slice(0, limit);
      el.innerHTML = list.length
        ? '<div class="cards">' + list.map(function (p) { return card(p, base); }).join("") + "</div>"
        : emptyState(base);
    }

    if (filterBar) {
      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".chip");
        if (!btn) return;
        filterBar.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        render(btn.getAttribute("data-track"));
      });
      var start = new URLSearchParams(location.search).get("track");
      var startBtn = start && filterBar.querySelector("[data-track='" + start + "']");
      if (startBtn) { startBtn.click(); return; }
    }
    render("all");
  });
})();
