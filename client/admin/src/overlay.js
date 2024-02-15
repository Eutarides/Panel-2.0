class Overlay extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    this.render()
    document.addEventListener('show-overlay', this.handleShowOverlay.bind(this))
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
            right:15%;
            top:10%;
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

          .upload-frame{
            width:80px;
            height:80px;
            background-color:white;
            display:flex;
            align-items:center;
            cursor:pointer;
          }
  
          .upload-frame svg{
            width:40%;
            margin-left:30%;
          }
          
          .gallery-overlay{
            display:flex;
            margin-left:2%;
            margin-right:2%;
            margin-top:2%;
            gap:1rem;
          }

          .gallery-overlay-row{
            background-color:rgb(54, 119, 143);
            display:flex;
            width:100%;
            display:none;
            flex-wrap:wrap;
          }

          .gallery-overlay-row.active{
            background-color:rgb(54, 119, 143);
            display:flex;
            width:80%;
            padding:2% 2%;
            gap:1rem;
            align-items:flex-start;
          }

          .sub-container{
            display:flex;
            gap:1rem;
            flex-wrap:wrap;
          }
        
        </style>

        <div class="overlay">
          <div class="overlay-menu">
            <button class="overlay-button" data-value="1">Galería</button>
            <button class="overlay-button active" data-value="2">Subir imagen</button>
            <svg class="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </div>
          <div class="gallery-overlay">
            <div class="gallery-overlay-row" data-value="1">
              
            </div>
            <div class="gallery-overlay-row active" data-value="2">
              <div class="sub-container">
                <div class="upload-frame">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                </div>
              </div>  
            </div>
            <div class="gallery-overlay-aside">
              <div class="gallery-overlay-aside-element">
                <h3>Título</h3>
                <input></input>
              </div>

              <div class="gallery-overlay-aside-element">
                <h3>Texto alternativo</h3>
                <input></input>
              </div>
            </div>
          </div>
        </div>

      `

    this.renderButtons()
  }

  renderButtons = async () => {
    const overlayMenu = this.shadow.querySelector('.overlay-menu')
    const galleryRows = this.shadow.querySelectorAll('.gallery-overlay-row')
    const closeButton = this.shadow.querySelector('.close-button')
    const overlay = this.shadow.querySelector('.overlay')

    overlayMenu?.addEventListener('click', async (event) => {
      if (event.target.closest('.overlay-button')) {
        const button = event.target.closest('.overlay-button')
        button.parentElement.querySelector('.active').classList.remove('active')
        button.classList.add('active')

        galleryRows.forEach(galleryRow => {
          if (button.dataset.value === galleryRow.dataset.value) {
            galleryRow.classList.add('active')
          } else if (button.dataset.value !== galleryRow.dataset.value) {
            galleryRow.classList.remove('active')
          }
        })
      }
    })

    closeButton.addEventListener('click', async (event) => {
      overlay.classList.remove('active')
    })
  }
}

customElements.define('overlay-component', Overlay)
