
const modal = document.getElementById("modal");
const openModalButtons = document.querySelectorAll("#openModal");
const closeModalButton = document.querySelector(".modal__close");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

openModalButtons.forEach(button => {
    button.addEventListener("click", openModal);
});

closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});