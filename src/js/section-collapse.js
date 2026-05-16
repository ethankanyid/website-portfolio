const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("hidden"); // toggle a class instead of manipulating display

    const arrow = header.querySelector(".arrow");
    if (!content.classList.contains("hidden")) {
      arrow.innerHTML = "&#9660;"; // down arrow
    } else {
      arrow.innerHTML = "&#9654;"; // right arrow
    }
  });
});