class InsertImage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      `
        <style>
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
            
        
        </style>

        <div class="upload-frame">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
        </div>

      `

    this.renderButtons()
  }

  renderButtons = async () => {
    const uploadFrame = this.shadow.querySelector('.upload-frame')

    uploadFrame.addEventListener('click', (event) => {
      document.dispatchEvent(new CustomEvent('show-overlay'))
    })
  }
}

customElements.define('insert-image-component', InsertImage)
