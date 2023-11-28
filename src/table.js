export default (() => {

    const tableSection = document.querySelector('.table');
    let deleteModal = document.querySelector(".delete-modal");
    let deleteOverlay = document.querySelector(".delete-overlay");
    let filter = document.querySelector(".filter-svg");
    let svg = document.querySelector(".filter-svg svg");
    let filterModal = document.querySelector(".filter-modal");
    let modalOverlay = document.querySelector(".modal-overlay");
    
  
    tableSection?.addEventListener('click', async (event) => {
        if (event.target.closest('.delete-button')) {
            deleteModal.classList.toggle("active");
            deleteOverlay.classList.toggle("active");
        }
    });

    filter.addEventListener("click",()=>{
        filter.classList.toggle("active");
        filterModal.classList.add("active");
        svg.classList.toggle("active");
        modalOverlay.classList.toggle("active");

    })


})();