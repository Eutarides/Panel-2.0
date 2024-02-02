class Overlay extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  async connectedCallback () {
    document.addEventListener('show-overlay', this.handleShowOverlay.bind(this))

    this.render()
  }

  handleShowOverlay (event) {
    const overlay = this.shadow.querySelector('.overlay')
    overlay.classList.toggle('active')

    this.id = event.detail.id
  }

  render () {
    this.shadow.innerHTML =
      `
        <style>
          .overlay{
            height: 50vh;
            position: fixed;
            top: 0;
            width: 50vw;
            z-index: 3000;
            display: none;
            background-color: hsl(194, 65%, 45%);
            right:38%;
            top:40%;
          }
          
          .overlay.active{
            height: 80vh;
            position: fixed;
            top: 0;
            width: 70vw;
            z-index: 3000;
            display: block;
            background-color: hsl(194, 68%, 71%);
            right:20%;
            top:5%;
            border-radius:10px;
          }
          
          .overlay-menu{
            height:10%;
            display:flex;
            align-items:left;
            gap:0.2rem;
            padding-left:1rem;
            margin-top:1rem;
          }
          
          .image-overlay{
            height:70%;
            display:flex;
            display:none;
          }
          
          .image-overlay.active{
            height:70%;
            display:flex;
            flex-direction:column;
          }
          
          .image-overlay-title{
            height:15%;
            padding-left:3%;
            margin-top:1rem;
          }
          
          .image-overlay-title p{
            font-size: 1.3rem;
            font-family: "Poppins", sans-serif;
            margin: 0;
          }
          
          .image-overlay-svg{
            fill:black;
            width:10%;
            padding-left:2rem;
          }
          
          .gallery-overlay{
            height:80%;
            display:flex;
            justify-content:space-between;
            display:none;
            position:relative;
          }
          
          .gallery-overlay.active{
            height:80%;
            display:flex;
            justify-content:space-between;
            display: block;
            position:relative;
          }
          
          .overlay-button{
            background-color:rgb(54, 119, 143);
            width:20%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            height:100%;
            font-family: "Poppins", sans-serif;
            font-size:1.3rem;
          }
          
          .overlay-button.active{
            background-color:rgb(119, 173, 193);
            width:20%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            height:100%;
            font-family: "Poppins", sans-serif;
            font-size:1.3rem;
          }
          
          .overlay-menu svg{
            margin-left:50%;
            width:10%;
          }
          
          .image{
            width:80%;
            height:80%;
          }
          
          .gallery-overlay-menu{
            width:20%;
            right:5%;
            top:10%;
            position:absolute;
          }
          
          .gallery-overlay-menu p{
            text-align:center;
            font-family: "Poppins", sans-serif;
            font-size:1.3rem;
          }
          
          .gallery-overlay input{
            width:100%;
            border-radius:7px;
            border-style: none;
            height:1.5rem;
          }
          
          .img.selected{
            border: 2px hsl(84, 71%, 46%);
          }
          
          .gallery-overlay button{
            bottom:0%;
            right:5%;
            width:20%;
            height:10%;
            background-color: rgb(119, 173, 193);
            color:white;
            cursor: pointer;
            border-radius:10px;
            border:none;
            font-size:1.3rem;
            position:absolute;
          }
            
        
        </style>

        <div class="overlay active">
          <div class="overlay-menu">
            <button class="overlay-button active" data-value="1">Imágenes</button>
            <button class="overlay-button" data-value="2">Galería</button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </div>
          <div class="image-overlay row active" data-value="1">
            <div class="image-overlay-title">
              <p>Selecciona una imágen.</p>
            </div>
            <div class="image-overlay-svg">
              <input type="file" id="file-input" style="display: none;">
              <label for="file-input">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab-plus</title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>
              </label>                
            </div>
          </div>
          <div class="gallery-overlay row" data-value="2">
            <div class="gallery-overlay-menu">
              <p>Título</p>
              <input class="title"></input>
              <p>Texto alternativo</p>
              <input class="alt"></input>
            </div>
            <button>Elegir imagen</button>
          </div>
        </div>

      `

    this.renderButtons()
  }

  renderButtons = async () => {
    const modalConfirmButton = this.shadow.querySelector('.modal-confirm-button')

    modalConfirmButton.addEventListener('click', event => {
      event.preventDefault()
      const overlay = this.shadow.querySelector('.overlay')
      overlay.classList.remove('active')
      fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}/${this.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
      }).then(response => {
        if (response.ok) {
          console.log('Registro eliminado con éxito')
          document.dispatchEvent(new CustomEvent('refresh-table'))
        } else {
          console.log('Error al eliminar el registro')
        }
      }).catch(error => {
        console.log(error)
      })
    })

    const modalDenyButton = this.shadow.querySelector('.modal-deny-button')

    modalDenyButton.addEventListener('click', event => {
      const overlay = this.shadow.querySelector('.overlay')
      overlay.classList.remove('active')
    })
  }
}

customElements.define('overlay-component', Overlay)
