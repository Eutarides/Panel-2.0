export default (() => {

    const tableSection = document.querySelector('.table');
    let filter = document.querySelector(".filter-svg");
  
    tableSection?.addEventListener('click', async (event) => {
  
        if (event.target.closest('.delete-button')) {
            document.dispatchEvent(new CustomEvent('show-delete-modal', {
            }));
        }
    });

    filter.addEventListener("click",()=>{
        document.dispatchEvent(new CustomEvent('show-filter-modal', {
        }));

    })
    
})();