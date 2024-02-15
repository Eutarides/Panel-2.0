class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  };

  render () {
    this.shadow.innerHTML =
      `
        <style>
            .gallery{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                width:46vw;
            }

            .gallery-column{
                display:flex;
                flex-direction:column;
                width:25%;
            }

            .gallery-title{
                padding-left:30%;
                padding-right:30%;
                color:white;
                display:flex;
                flex-direction:column;
                align-items:center;
                font-family: "Poppins", sans-serif;
            }

            .gallery-title h2{
                font-size: 1.2rem;
            }

            .gallery-data{
                display:flex;
                flex-wrap:wrap;
                gap:1rem;
            }

            .upload-frame{
                width:80px;
                height:80px;
                background-color:white;
                display:flex;
                align-items:center;
            }

            .upload-frame svg{
                width:40%;
                margin-left:30%;
            }

            .gallery-image{
                width:80px;
                height:80px;
            }
            
        
        </style>

        <div class="gallery">
            <div class="gallery-column">
                <div class="gallery-title">
                    <h2>Imagen destacada</h2>
                </div>
                <div class="gallery-data">
                    <insert-image-component></insert-image-component>
                </div>
            </div>

            <div class="gallery-column">
                <div class="gallery-title">
                    <h2>Imagen destacada</h2>
                </div>
                <div class="gallery-data">
                    <insert-image-component></insert-image-component>
                </div>
            </div>

            <div class="gallery-column">
                <div class="gallery-title">
                    <h2>Imagen destacada</h2>
                </div>
                <div class="gallery-data">
                    <insert-image-component></insert-image-component>
                </div>
            </div>
        </div>

        `
  }
}

customElements.define('gallery-component', Gallery)
