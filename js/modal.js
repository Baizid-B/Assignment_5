function getModal(){

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("noakhali-donate-btn");
const closeBtn = document.getElementById("closeBtn");

function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}


openBtn.addEventListener("click", openModal);

// Event listener to close the modal
closeBtn.addEventListener("click", closeModal);

// Condition to close modal if user clicks outside modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});}
