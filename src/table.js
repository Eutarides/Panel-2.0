export default (() => {

    const tableSection = document.querySelector('.table');
<<<<<<< HEAD
    let filter = document.querySelector(".filter-svg");
=======
    let deleteModal = document.querySelector(".delete-modal");
    let deleteOverlay = document.querySelector(".delete-overlay");
    let filter = document.querySelector(".filter-svg");
    let svg = document.querySelector(".filter-svg svg");
    let filterModal = document.querySelector(".filter-modal");
    let modalOverlay = document.querySelector(".modal-overlay");
    
>>>>>>> bd923e6743b464ba7f494c42cbcc7edb04d7dd44
  
    tableSection?.addEventListener('click', async (event) => {
        if (event.target.closest('.delete-button')) {
<<<<<<< HEAD
            document.dispatchEvent(new CustomEvent('show-delete-modal', {
            }));
=======
            deleteModal.classList.toggle("active");
            deleteOverlay.classList.toggle("active");
>>>>>>> bd923e6743b464ba7f494c42cbcc7edb04d7dd44
        }
    });

    filter.addEventListener("click",()=>{
<<<<<<< HEAD
        document.dispatchEvent(new CustomEvent('show-filter-modal', {
        }));

    })
    
=======
        filter.classList.toggle("active");
        filterModal.classList.add("active");
        svg.classList.toggle("active");
        modalOverlay.classList.toggle("active");

    })


>>>>>>> bd923e6743b464ba7f494c42cbcc7edb04d7dd44
})();