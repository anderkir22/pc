/* ──────────────────────────────────────────────────────────────────────────
   FarmWorth listings-map module — shared renderer.
   Usage in any concept:
     <div id="pc-map"
          data-eyebrow="Find Your Land"
          data-title="Search farmland & auctions"
          data-blurb="..."></div>
     <script src="./map-data.js?v=1"></script>
     <script src="./map.js?v=1"></script>
   Reads window.PC_MAP (map-data.js). Renders a NON-FUNCTIONAL visual mockup:
   filter bar → horizontal thumbnail strip → full-width map with pins, status
   legend, Streets/Aerial toggle and Show Offices. Per the /listings exclusion
   nothing actually searches; controls only restyle the static mock.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  var host = document.getElementById("pc-map");
  if (!host || !window.PC_MAP) return;
  var M = window.PC_MAP;

  var eyebrow = host.getAttribute("data-eyebrow") || "Find Your Land";
  var title   = host.getAttribute("data-title")   || "Search farmland & auctions";
  var blurb   = host.getAttribute("data-blurb")   ||
    "Explore every Peoples Company listing and auction on one interactive map.";
  var aerial  = host.getAttribute("data-aerial") ||
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1900&q=70";

  function opts(arr) { return arr.map(function (o) { return '<option>' + o + '</option>'; }).join(""); }

  /* ── filter / search bar ── */
  var search =
    '<div class="pcm-search" role="search" aria-label="Search for land">' +
      '<div class="pcm-field"><label for="pcm-state">State</label>' +
        '<select id="pcm-state">' + opts(M.filters.states) + '</select></div>' +
      '<div class="pcm-field"><label for="pcm-type">Type</label>' +
        '<select id="pcm-type">' + opts(M.filters.types) + '</select></div>' +
      '<div class="pcm-field"><label for="pcm-sort">Sort By</label>' +
        '<select id="pcm-sort">' + opts(M.filters.sorts) + '</select></div>' +
      '<button type="button" class="pcm-more" aria-expanded="false" aria-controls="pcm-tray">' +
        'More Filters <span class="chev" aria-hidden="true">▾</span></button>' +
      '<button type="button" class="pcm-search-btn">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M16.5 16.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
        'Search</button>' +
      '<div class="pcm-more-tray" id="pcm-tray">' +
        '<div class="pcm-field"><label for="pcm-min">Min Price</label><input id="pcm-min" type="text" placeholder="$ Any" inputmode="numeric"></div>' +
        '<div class="pcm-field"><label for="pcm-max">Max Price</label><input id="pcm-max" type="text" placeholder="$ Any" inputmode="numeric"></div>' +
        '<div class="pcm-field"><label for="pcm-amin">Min Acres</label><input id="pcm-amin" type="text" placeholder="Any" inputmode="numeric"></div>' +
        '<div class="pcm-field"><label for="pcm-amax">Max Acres</label><input id="pcm-amax" type="text" placeholder="Any" inputmode="numeric"></div>' +
      '</div>' +
    '</div>' +
    '<p class="pcm-note">Sample listings shown for layout. Live search and properties connect at launch.</p>';

  /* ── thumbnail strip ── */
  var cards = M.listings.map(function (l) {
    var s = M.statuses[l.status];
    return '<a class="pcm-card" href="#" aria-label="' + l.price + ', ' + l.acres + ' acres, ' +
        l.county + ', ' + l.state + ' — ' + s.label + '">' +
      '<div class="ph img-fallback-able">' +
        '<span class="pcm-status"><span class="dot" style="background:' + s.color + '"></span>' + s.label + '</span>' +
        '<img src="' + l.img + '" alt="" loading="lazy" ' +
          'onerror="this.style.display=\'none\'"></div>' +
      '<div class="body">' +
        '<span class="price">' + l.price + '</span>' +
        '<span class="loc">' + l.county + ', ' + l.state + '</span>' +
        '<span class="meta">' + l.acres + ' acres · ' + l.per + '</span>' +
      '</div></a>';
  }).join("");

  var strip =
    '<div class="pcm-strip-wrap">' +
      '<div class="pcm-strip-head">' +
        '<span class="count"><b>' + M.listings.length + '</b> properties match — scroll to browse</span>' +
        '<div class="pcm-strip-arrows">' +
          '<button class="pcm-arrow" type="button" data-dir="-1" aria-label="Scroll listings left">‹</button>' +
          '<button class="pcm-arrow" type="button" data-dir="1" aria-label="Scroll listings right">›</button>' +
        '</div>' +
      '</div>' +
      '<div class="pcm-strip" tabindex="0" role="list" aria-label="Featured listings">' + cards + '</div>' +
    '</div>';

  /* ── pins + offices ── */
  var pins = M.listings.map(function (l) {
    var s = M.statuses[l.status];
    return '<div class="pcm-pin" style="left:' + l.x + '%;top:' + l.y + '%">' +
      '<button class="pcm-pin-btn" type="button" aria-label="' + l.price + ', ' + l.county + ', ' +
        l.state + ' — ' + s.label + '">' +
        '<span class="pcm-pin-price">' + l.price + '</span>' +
        '<span class="pcm-pin-dot" style="background:' + s.color + '"></span>' +
      '</button></div>';
  }).join("");

  var offices = M.offices.map(function (o) {
    return '<div class="pcm-office" style="left:' + o.x + '%;top:' + o.y + '%">' +
      '<span class="mk" aria-hidden="true">★</span><span class="lbl">' + o.name + '</span></div>';
  }).join("");

  var legend =
    '<div class="pcm-legend"><h3>Status</h3><ul>' +
      Object.keys(M.statuses).map(function (k) {
        var s = M.statuses[k];
        return '<li><span class="dot" style="background:' + s.color + '"></span>' + s.label + '</li>';
      }).join("") +
    '</ul></div>';

  var roads =
    '<svg class="pcm-roads" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">' +
      '<g stroke="#b7c4ba" stroke-width="0.5" fill="none">' +
      '<path d="M0 20 H100 M0 40 H100 M25 0 V60 M55 0 V60 M80 0 V60"/></g>' +
      '<g stroke="#cdd8cf" stroke-width="0.25" fill="none">' +
      '<path d="M0 10 H100 M0 30 H100 M0 50 H100 M12 0 V60 M40 0 V60 M68 0 V60 M90 0 V60"/></g>' +
    '</svg>';

  var map =
    '<div class="pcm-map is-aerial" role="application" aria-label="Property map (sample data)">' +
      '<img class="pcm-map-img" src="' + aerial + '" alt="Aerial map view of the region" ' +
        'onerror="this.style.display=\'none\';this.parentElement.classList.add(\'img-fallback\')">' +
      roads +
      '<div class="pcm-overlay-scrim"></div>' +
      pins + offices +
      '<div class="pcm-map-ctrls">' +
        '<div class="pcm-toggle" role="group" aria-label="Map type">' +
          '<button type="button" data-type="streets" aria-pressed="false">Streets</button>' +
          '<button type="button" data-type="aerial" aria-pressed="true">Aerial</button>' +
        '</div>' +
        '<button type="button" class="pcm-offbtn" aria-pressed="false">' +
          '<span class="sw" aria-hidden="true"></span>Show Offices</button>' +
      '</div>' +
      legend +
    '</div>';

  /* ── assemble: head + search + strip inset in .container, map full-bleed ── */
  host.classList.add("pcm");
  host.innerHTML =
    '<div class="container">' +
      '<div class="pcm-head reveal">' +
        '<div><span class="pcm-eyebrow">' + eyebrow + '</span><h2>' + title + '</h2><p>' + blurb + '</p></div>' +
        '<a class="pcm-viewall" href="#">View all properties →</a>' +
      '</div>' +
      search + strip +
    '</div>' +
    map;

  /* ── interactions (all cosmetic — no real search) ── */
  var mapEl = host.querySelector(".pcm-map");

  // map type
  host.querySelectorAll(".pcm-toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      var t = b.getAttribute("data-type");
      mapEl.classList.toggle("is-aerial", t === "aerial");
      mapEl.classList.toggle("is-streets", t === "streets");
      host.querySelectorAll(".pcm-toggle button").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
    });
  });

  // show offices
  var offBtn = host.querySelector(".pcm-offbtn");
  offBtn.addEventListener("click", function () {
    var on = offBtn.getAttribute("aria-pressed") !== "true";
    offBtn.setAttribute("aria-pressed", String(on));
    mapEl.classList.toggle("show-offices", on);
  });

  // more filters
  var more = host.querySelector(".pcm-more");
  var tray = host.querySelector(".pcm-more-tray");
  more.addEventListener("click", function () {
    var open = more.getAttribute("aria-expanded") !== "true";
    more.setAttribute("aria-expanded", String(open));
    tray.classList.toggle("is-open", open);
  });

  // strip arrows
  var stripEl = host.querySelector(".pcm-strip");
  host.querySelectorAll(".pcm-arrow").forEach(function (a) {
    a.addEventListener("click", function () {
      var dir = parseInt(a.getAttribute("data-dir"), 10);
      stripEl.scrollBy({ left: dir * 300, behavior:
        matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
})();
