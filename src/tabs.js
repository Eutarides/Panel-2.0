export default (() => {

    // const imageMenu = document.querySelector('.image-menu');
    // const imageButtons = imageMenu.querySelectorAll('.image-menu-button');

    // imageButtons.forEach(imageButton => {
    //     imageButton.addEventListener('click', () => {
    //         imageMenu.querySelector('.active').classList.remove('active');
    //         imageButton.classList.add('active');
    //     });
    // });

    let imageMenu = document.querySelector('.image-menu');
    let formRows = document.querySelectorAll('.form-row');

    imageMenu?.addEventListener('click', async (event) => {
        if (event.target.closest('.image-menu-button')) {
            let button = event.target.closest('.image-menu-button');
            button.parentElement.querySelector('.active').classList.remove('active')
            button.classList.add('active');

            formRows.forEach( formRow => {
                if (button.dataset.value == formRow.dataset.value){
                    formRow.classList.add('active');
                }else if(button.dataset.value != formRow.dataset.value){
                    formRow.classList.remove('active');
                }
            })
        }
    });
})();