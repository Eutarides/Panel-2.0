export default (() => {

    const tableSection = document.querySelector('.table');
    let deleteModal = document.querySelector(".delete-modal");
    let overlay = document.querySelector(".delete-overlay");
  
    tableSection?.addEventListener('click', async (event) => {
  
        if (event.target.closest('.delete-button')) {
            deleteModal.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    });
})();