export default (() => {

    let button = document.querySelector(".filter-button.cancel");
    let filterModal = document.querySelector(".filter-modal");
    let svg = document.querySelector(".filter-svg svg");

    button.addEventListener("click",()=>{
        filterModal.classList.remove("active");
        svg.classList.remove("active");

    })
  
  })();