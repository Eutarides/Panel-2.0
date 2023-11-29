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

    imageMenu?.addEventListener('click', async (event) => {
        if (event.target.closest('.image-menu-button')) {
            let button = event.target.closest('.image-menu-button');
            button.parentElement.querySelector('.active').classList.remove('active')
            button.classList.add('active');
        }
    });
})();