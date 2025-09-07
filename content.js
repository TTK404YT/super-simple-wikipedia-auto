(function() {
  const content = document.querySelector("#mw-content-text");
  const heading = document.querySelector("#firstHeading");
  const infobox = document.querySelector(".infobox"); // keep the first infobox

  if (!content || !heading) return;

  // Clear body
  document.body.innerHTML = "";

  // Wrapper for layout
  const wrapper = document.createElement("div");
  wrapper.id = "simpleWrapper";

  // Title at top
  wrapper.appendChild(heading);

  // Create a container for article + infobox
  const container = document.createElement("div");
  container.id = "articleContainer";

  // Article text
  container.appendChild(content);

  // Keep only the first infobox (move it to the right side)
  if (infobox) {
    container.appendChild(infobox);
  }

  wrapper.appendChild(container);
  document.body.appendChild(wrapper);

  // Strip unwanted elements inside content
  const removeSelectors = [
    ".toc", ".mw-editsection", ".navbox", ".reflist",
    ".reference", ".hatnote", ".ambox",
    ".metadata", ".catlinks", ".mw-indicators"
  ];
  removeSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.remove());
  });
})();