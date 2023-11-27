export default (() => {

    let curtain= document.querySelector(".curtain");

    let hamburger= document.querySelector(".hamburger");


    hamburger.addEventListener("click",()=>{
        curtain.classList.toggle("active");
        hamburger.classList.toggle("active");
    })
  
  })();