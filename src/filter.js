export default (() => {

    let filter = document.querySelector(".filter-svg");
    let svg = document.querySelector(".filter-svg svg");
    let filterModal = document.querySelector(".filter-modal");

    filter.addEventListener("click",()=>{
        filter.classList.toggle("active");
        filterModal.classList.add("active");
        svg.classList.toggle("active");
        console.log("hey");

    })
  
  })();