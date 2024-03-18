document.addEventListener('DOMContentLoaded', function() {
    const mouseOver = "mouseover";
    const mouseOut = "mouseout";

    const headerBtns = document.querySelectorAll(".header__link");
    headerBtns.forEach((e) => {
        e.addEventListener(mouseOver, () => {
            e.style.color = "#C21010"
            e.style.fontSize = "1.25em"
        });
        e.addEventListener(mouseOut, () => {
            e.style.color = "#000"
            e.style.fontSize = "1.2em"
        });
    });

    const close = document.getElementsByClassName("modal__close");
    close.addEventListener(mouseOver, () => {
        close.style.color = "#C21010"
    })
    close.addEventListener(mouseOut, () => {
        close.style.color = "#000"
    })
});