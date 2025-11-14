const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  const content = header.nextElementSibling;

  header.addEventListener("click", () => {
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      // collapse
      content.style.maxHeight = "0px";
    } else {
      // expand
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  // initialize with full height so first click works
  content.style.maxHeight = content.scrollHeight + "px";
});
