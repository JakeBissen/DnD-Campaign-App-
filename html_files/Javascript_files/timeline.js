// Position timeline items evenly
const items = document.querySelectorAll('.timeline-item');
items.forEach((item, index) => {
  const percent = (index / (items.length - 1)) * 100;
  item.style.left = percent + "%";
});

// Modal logic
const modal = document.getElementById("infoModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

items.forEach(item => {
  item.addEventListener("click", () => {
    modalText.textContent = item.dataset.info;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
