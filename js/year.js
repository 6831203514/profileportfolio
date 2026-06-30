// Keeps the footer year fresh without me having to remember to update it.
(function () {
  var el = document.getElementById("footer-year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
