const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";

    const arrow = header.querySelector(".arrow");
    if (content.style.display === "block") {
      arrow.innerHTML = "&#9660;"; // down arrow
    } else {
      arrow.innerHTML = "&#9654;"; // right arrow
    }
  });
});
