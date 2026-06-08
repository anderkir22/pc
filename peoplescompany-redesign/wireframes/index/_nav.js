/* TOP mega-menu header renderer. Reads IA from window.PC_NAV (_nav-data.js,
   which must load first). Drop `<div id="site-header"></div>` near the top of
   <body>, then include _nav-data.js + this file. Menus open on hover & focus. */
(function () {
  var NAV = window.PC_NAV;
  if (!NAV) { console.error("_nav.js: window.PC_NAV missing — include _nav-data.js first."); return; }

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

  function colHTML(c){
    // A heading with no children is itself a link (e.g. Capital Markets, Regions).
    if (c.h && (!c.items || !c.items.length) && !c.note) {
      return '<div class="sh-col"><h4 style="border:0;margin-bottom:0;">' +
        '<a href="#" style="color:inherit;text-decoration:none;">' + esc(c.h) + '</a></h4></div>';
    }
    var links = (c.items || []).map(function(i){ return '<li><a href="#">' + esc(i) + '</a></li>'; }).join("");
    var head = c.h ? '<h4>' + esc(c.h) + '</h4>' : '';
    var note = c.note ? '<p class="sh-soft" style="margin:0;">' + esc(c.note) + '</p>' : '';
    return '<div class="sh-col">' + head + (links ? '<ul>' + links + '</ul>' : '') + note + '</div>';
  }

  function itemHTML(n){
    return '<li>' +
        '<a href="#" aria-haspopup="true">' + esc(n.label) + '</a>' +
        '<div class="sh-mega" role="menu" aria-label="' + esc(n.label) + '">' +
          '<div class="sh-mega-in">' + n.cols.map(colHTML).join("") + '</div>' +
        '</div>' +
      '</li>';
  }

  var util = NAV.utilLinks.map(function(l){ return '<a href="' + l[1] + '">' + esc(l[0]) + '</a>'; }).join("");

  var html =
    '<header class="site-header">' +
      '<div class="sh-util"><div class="container sh-util-in">' +
        '<span>' + esc(NAV.phone) + '</span>' +
        '<span class="sh-right">' + util + '</span>' +
      '</div></div>' +
      '<div class="container sh-bar">' +
        '<a class="sh-logo" href="../../version-a/index.html" aria-label="Peoples Company home">' +
          '<img src="' + NAV.logoBlack + '" alt="Peoples Company — Integrated Land Solutions" />' +
        '</a>' +
        '<nav aria-label="Primary"><ul class="sh-nav">' + NAV.items.map(itemHTML).join("") + '</ul></nav>' +
        '<span class="sh-spacer"></span>' +
        '<div class="sh-actions">' +
          '<span class="sh-search" role="search">🔍 Search land &amp; auctions</span>' +
          '<a href="#" class="btn btn-black" style="padding:10px 18px;font-size:14px;">Contact</a>' +
          '<button class="sh-mobile" aria-label="Open menu">☰ Menu</button>' +
        '</div>' +
      '</div>' +
    '</header>';

  var mount = document.getElementById("site-header");
  if (mount) mount.outerHTML = html;
  else document.body.insertAdjacentHTML("afterbegin", html);
})();
