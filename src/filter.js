export default (() => {

    let filter = document.querySelector(".filter-svg");
    let filterForm = document.querySelector(".filter-form");
    let svg = document.querySelector(".filter-svg svg")

    filter.addEventListener("click",()=>{
        filter.classList.toggle("active");
        filterForm.classList.toggle("active");
        svg.classList.toggle("active");
        console.log("hey");

    })
  
  })();