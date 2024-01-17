class DeleteModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback () {
    document.addEventListener('show-delete-modal', event => {
      console.log('compa')
      this.openModal()
    })
  };

  render () {
    this.shadow.innerHTML =
      `
        <style>

            button{
                width:100%;
                height:50%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            
            p{
                font-family: "Poppins", sans-serif;
            }
            
            input{
                width:100%;
                height:65%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            .delete-overlay{
                z-index:1004;
                width:100.4vw;
                height:100vh;
                position:absolute;
                top:-1%;
                left:-1%;
                display:flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-around;
                opacity:0;
                visibility: hidden;
                transition:0.7s;
                background-color: rgba(20, 3, 95, 0.493);
            
            }
            
            .delete-overlay.active{
                visibility: visible;
                opacity: 1;
            }
            
            .delete-modal{
                width:30%;
                height:25%;
                background-color:  hsl(180, 57%, 36%);
                border-radius:10px;
                display:flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
                opacity:0;
                visibility: hidden;
                transition:0.7s;
            }
            
            .delete-modal.active{
                opacity: 1;
                visibility: visible;
                transition:0.7s;
            }
            
            .delete-announcement{
                display:flex;
                justify-content: space-around;
            }
            
            .delete-announcement p{
                font-size: 1.3rem;
                font-weight: 600;
                color:white;
            }
            
            .delete-modal-buttons{
                display:flex;
                justify-content: space-between;
                flex-direction: row;
                height:30%;
                width:80%;
                gap:1.5rem;
            }
            .modal-buttons{
                width:80%;
                height:30%;
                display:flex;
                justify-content:space-between;
            }
            
            .modal-confirm-button{
                width:25%;
            }
            
            .modal-confirm-button button{
                width:100%;
                height:65%;
                background-color: rgb(24, 104, 209);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            
            .modal-deny-button{
                width:25%;
            }
            
            .modal-deny-button button{
                width:100%;
                height:65%;
                background-color: rgb(202, 55, 10);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            
            .filter-button.cancel{
                background-color: rgba(231, 118, 26, 0.904);
            }
            
            
        </style>

        <div class="delete-overlay">
            <div class="delete-modal">
                <div class="delete-announcement">
                    <p>¿Quiere eliminar este registro?</p>
                </div>
                <div class="delete-modal-buttons">
                    <button class="filter-button confirm delete-modal-button">Si</button>
                    <button class="filter-button cancel delete-modal-button">No</button>
                </div>
            </div>
        </div>

        `

    const cancelButton = this.shadow.querySelector('.delete-modal-button.cancel')

    cancelButton.addEventListener('click', () => {
      this.deleteModal()
    })
  };

  openModal () {
    const deleteModal = this.shadow.querySelector('.delete-modal')
    const overlay = this.shadow.querySelector('.delete-overlay')

    deleteModal.classList.toggle('active')
    overlay.classList.toggle('active')
  };

  deleteModal () {
    const deleteModal = this.shadow.querySelector('.delete-modal')
    const overlay = this.shadow.querySelector('.delete-overlay')

    deleteModal.classList.remove('active')
    overlay.classList.remove('active')
  };
}

customElements.define('delete-modal-component', DeleteModal)
