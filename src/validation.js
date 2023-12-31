export default (() => {

    // let form = document.querySelector("form");
    // let letters = /^[A-Za-z]+$/;


    // form?.addEventListener("input" , async (event)=>{
    //     let input = event.target.closest('.validate')

    //     if(input.dataset.minlength > input.value.length){
    //         input.classList.add('active');
    //     } if(input.dataset.minlength <= input.value.length){
    //         input.classList.remove('active');
    //     } if(input.value.length == "0"){input.classList.remove('active');}

    //     if (!letters.test(input.value)) {
    //         input.classList.add('active');
    //     } else {
    //         input.classList.remove('active');
    //     }
    // })
    
    let form = document.querySelector("form");
    let letters = /^[A-Za-z]+$/;

    form?.addEventListener("input", async (event) => {
        let input = event.target.closest('.validate');

        if (input) {
            if (input.value.length < input.dataset.minlength || !letters.test(input.value)) {
                input.classList.add('active');
            } else {
                input.classList.remove('active');
            }
        }
    });
    
  
})();