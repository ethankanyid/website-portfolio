const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  const content = header.nextElementSibling; // define content for this header

  header.addEventListener("click", () => {
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      // collapse
      content.style.maxHeight = "0px";
    } else {
      // expand
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
