const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentNode;
    const accordionContent = header.nextElementSibling;

    accordionContent.classList.toggle("active");

    accordionItem.classList.toggle("active");
  });
});
