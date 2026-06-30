// Mobile nav toggle + close on link click.
// Small enough to live on its own; keeps the rest of the page free of nav code.

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("primary-nav");
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    links.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  // Tapping a link should close the mobile menu.
  links.addEventListener("click", function (event) {
    var target = event.target;
    if (target && target.tagName === "A") {
      setOpen(false);
    }
  });
})();
