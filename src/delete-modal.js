export default (() => {

    let binButtons = document.querySelectorAll(".delete-button svg");
    let deleteModal = document.querySelector(".delete-modal");
    let overlay = document.querySelector(".delete-overlay");
    let cancelButton = document.querySelector(".delete-modal-button.cancel");

    binButtons.forEach(binButton => {
        binButton.addEventListener('click', () => {
            deleteModal.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    });

    cancelButton.addEventListener('click', () => {
        deleteModal.classList.remove("active");
        overlay.classList.remove("active");
    });

    
  
  })();