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

    // this.id = event.detail.id
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
            margin-left:70%;
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

          .frame{
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

          .delete-button{
            width:100%;
            height:3rem;
            background-color: rgb(119, 173, 193);
            color:white;
            cursor: pointer;
            border-radius:10px;
            border:none;
            font-size:1.3rem;
            background-color: rgba(231, 118, 26, 0.904);
            position:relative;
            top:64%;
          }

          button h3{
            font-size:1rem;
          }
        </style>

        <div class="overlay">
          <div class="overlay-menu">
            <button class="overlay-button" data-value="1">Galería</button>
            <svg class="close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </div>
          <div class="gallery-overlay">
            <div class="gallery-overlay-row active" data-value="1">
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

              <button class="delete-button">
                <h3>Borrar</h3>
              </button>
            </div>
          </div>
        </div>

      `

    this.renderButtons()
  }

  renderButtons = async () => {
    // const overlayMenu = this.shadow.querySelector('.overlay-menu')
    // const galleryRows = this.shadow.querySelectorAll('.gallery-overlay-row')
    const closeButton = this.shadow.querySelector('.close-button')
    const overlay = this.shadow.querySelector('.overlay')
    const subContainer = this.shadow.querySelector('.sub-container')

    // overlayMenu?.addEventListener('click', async (event) => {
    //   if (event.target.closest('.overlay-button')) {
    //     const button = event.target.closest('.overlay-button')
    //     button.parentElement.querySelector('.active').classList.remove('active')
    //     button.classList.add('active')

    //     galleryRows.forEach(galleryRow => {
    //       if (button.dataset.value === galleryRow.dataset.value) {
    //         galleryRow.classList.add('active')
    //       } else if (button.dataset.value !== galleryRow.dataset.value) {
    //         galleryRow.classList.remove('active')
    //       }
    //     })
    //   }
    // })

    closeButton.addEventListener('click', async (event) => {
      overlay.classList.remove('active')
    })

    subContainer.addEventListener('click', () => {
      const fileInput = document.createElement('input')
      fileInput.setAttribute('name', 'file')
      fileInput.type = 'file'
      fileInput.style.display = 'none'

      fileInput.addEventListener('change', (event) => {
        this.uploadImage(event.target.files[0])
      })

      document.body.appendChild(fileInput)
      fileInput.click()
      document.body.removeChild(fileInput)
    })
  }

  async uploadImage (file) {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`, {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      console.log(result)

      result.forEach(file => {
        const thumb = document.createElement('div')
        thumb.classList.add('frame')

        const img = document.createElement('img')
        img.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${file}`
        img.alt = 'x'

        const closeButton = document.createElement('div')
        closeButton.classList.add('close-button')
        closeButton.textContent = 'x'

        const subContainer = this.shadow.querySelector('.sub-container')

        thumb.appendChild(closeButton)
        thumb.addEventListener('click', () => {
          subContainer.querySelectorAll('.frame').forEach(avatar => {
            avatar.classList.remove('selected')
          })
        })
        thumb.classList.add('selected')
        const galleryOverlayRow = this.shadow.querySelector('.gallery-overlay-row')
        thumb.appendChild(img)
        galleryOverlayRow.prepend(thumb)
      })
    } catch (error) {
      console.error('Error al procesar una imagen:', error)
      throw error
    }
  }

  async paintImage (file) {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`, {
        method: 'GET',
        body: formData
      })

      const result = await response.json()
      console.log(result)

      result.forEach(file => {
        const thumb = document.createElement('div')
        thumb.classList.add('frame')

        const img = document.createElement('img')
        img.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${file}`
        img.alt = 'x'

        const closeButton = document.createElement('div')
        closeButton.classList.add('close-button')
        closeButton.textContent = 'x'

        const subContainer = this.shadow.querySelector('.sub-container')

        thumb.appendChild(closeButton)
        thumb.addEventListener('click', () => {
          subContainer.querySelectorAll('.frame').forEach(avatar => {
            avatar.classList.remove('selected')
          })
        })
        thumb.classList.add('selected')
        const galleryOverlayRow = this.shadow.querySelector('.gallery-overlay-row')
        thumb.appendChild(img)
        galleryOverlayRow.prepend(thumb)
      })
    } catch (error) {
      console.error('Error al procesar una imagen:', error)
      throw error
    }
  }
}

customElements.define('overlay-component', Overlay)
