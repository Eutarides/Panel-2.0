export default (() => {

    let button = document.querySelector(".filter-button.cancel");
    let filterModal = document.querySelector(".filter-modal");
    let svg = document.querySelector(".filter-svg svg");
    let overlay = document.querySelector(".modal-overlay");
    let filter = document.querySelector(".filter-svg");

    document.addEventListener("show-filter-modal", (event => {

        filter.classList.toggle("active");
        filterModal.classList.add("active");
        svg.classList.toggle("active");
        overlay.classList.toggle("active");
    
    }));

    button.addEventListener("click",()=>{
        filterModal.classList.remove("active");
        svg.classList.remove("active");
        overlay.classList.remove("active");

    })
  
  })();