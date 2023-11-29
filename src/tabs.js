export default (() => {

    const imageMenu = document.querySelector('.image-menu');
    const imageButtons = imageMenu.querySelectorAll('.image-menu-button');

    imageButtons.forEach(imageButton => {
        imageButton.addEventListener('click', () => {
            imageMenu.querySelector('.active').classList.remove('active');
            imageButton.classList.add('active');
        });
    });
  
})();