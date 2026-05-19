const modal = document.getElementById("infoModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const items = document.querySelectorAll(".timeline-item");

// Open modal with fade-in
items.forEach(item => {
    item.addEventListener("click", () => {
        modalText.innerHTML = item.dataset.info;
        modal.classList.remove("hide");
        modal.classList.add("show");
    });
});

// Close modal with fade-out
function closeModalWindow() {
    modal.classList.remove("show");
    modal.classList.add("hide");

    // Wait for fade-out to finish before hiding completely
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("hide");
    }, 300);
}

closeModal.addEventListener("click", closeModalWindow);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalWindow();
    }
});

// Ensure display:flex is applied only when showing
const observer = new MutationObserver(() => {
    if (modal.classList.contains("show")) {
        modal.style.display = "flex";
    }
});
observer.observe(modal, { attributes: true });
