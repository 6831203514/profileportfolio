// Renders the skill rows and animates the bars when they scroll into view.
// Data lives at the top so it's easy to edit without touching the markup.

(function () {
  var general = [
    { name: "Management", level: 5 },
    { name: "Organization", level: 5 },
    { name: "Creativity & Innovation", level: 5 },
    { name: "Problem-Solving", level: 4 },
    { name: "Productivity", level: 4 },
    { name: "Communication", level: 3 },
  ];

  var specialized = [
    { name: "Coding", level: 4 },
    { name: "Generative AI", level: 4 },
    { name: "Content Writing", level: 3 },
    { name: "Graphic Design", level: 3 },
    { name: "Video Editing", level: 2 },
  ];

  function buildRow(skill) {
    var row = document.createElement("div");
    row.className = "skill-row";

    var meta = document.createElement("div");
    meta.className = "skill-meta";

    var name = document.createElement("span");
    name.className = "skill-name";
    name.textContent = skill.name;

    var score = document.createElement("span");
    score.className = "skill-score";
    score.textContent = skill.level + "/5";

    meta.appendChild(name);
    meta.appendChild(score);

    var track = document.createElement("div");
    track.className = "skill-track";

    var fill = document.createElement("span");
    fill.className = "skill-fill";
    fill.dataset.target = String((skill.level / 5) * 100);

    track.appendChild(fill);
    row.appendChild(meta);
    row.appendChild(track);
    return row;
  }

  function fillGroup(container, skills) {
    if (!container) return;
    skills.forEach(function (s) {
      container.appendChild(buildRow(s));
    });
  }

  var groups = document.querySelectorAll("[data-skill-group]");
  if (groups[0]) fillGroup(groups[0], general);
  if (groups[1]) fillGroup(groups[1], specialized);

  // Animate fills the first time they enter the viewport.
  var fills = document.querySelectorAll(".skill-fill");

  function animate(fill) {
    var target = parseFloat(fill.dataset.target || "0");
    // Defer to next frame so the transition actually plays.
    requestAnimationFrame(function () {
      fill.style.width = target + "%";
    });
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach(function (f) {
      io.observe(f);
    });
  } else {
    // Fallback: just fill them in immediately.
    fills.forEach(animate);
  }
})();
