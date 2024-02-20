class FaqForm extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    document.addEventListener('load-data', this.handleLoadData.bind(this))
  };

  handleLoadData (event) {
    document.addEventListener('load-data', async event => {
      this.id = event.detail.id
      await this.populateFormFields()
    })
  }

  async populateFormFields () {
    if (!this.id) return

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}/${this.id}`)
      if (!response.ok) throw new Error('Failed to fetch data')

      const data = await response.json()

      Object.entries(data).forEach(([key, value]) => {
        const input = this.shadow.querySelector(`input[name="${key}"]`)
        if (input) {
          input.value = value
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    this.shadow.innerHTML =
      `
        <style>
            .faq-form{
              display:flex;
              flex-direction: column;
              justify-content: space-between;
              width:45vw;
            }
            
            .image-menu{
              display:flex;
              justify-content: space-between;
              flex-direction: row;
              background-color: white;
              border-radius: 5px;
              margin-bottom:1rem;
            }
            
            .image-menu-title{
              width:30%;
              display:flex;
              flex-direction:row;
              gap:1px;
            }
            
            .image-menu-title-principal{
              width:50%;
              background-color:rgb(119, 173, 193);
              border-radius: 5px;
              display: flex;
              align-items: center;
              height:100%;
              justify-content: space-around;
              cursor:pointer;
            }
            
            .image-menu-title-principal.active{
              background-color:rgb(54, 119, 143);
              width:50%;
              border-radius: 5px;
              display: flex;
              align-items: center;
              height:100%;
            }
            
            .image-menu-title-imagenes{
              width:50%;
              background-color:rgb(119, 173, 193);
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              cursor:pointer;
            }
            
            .image-menu-title-imagenes.active{
              width:50%;
              background-color:rgb(54, 119, 143);
              border-radius: 5px;
              display: flex;
              align-items: center;
            }
            
            .image-menu-title-imagenes h3{
              text-align: center;
              color:white;
              font-family: "Poppins", sans-serif;
              margin: 0;
              justify-content: space-around;
            }
            
            .image-menu-title-principal h3{
              text-align: center;
              color:white;
              font-family: "Poppins", sans-serif;
              margin: 0;
              justify-content: space-around;
            }      
            
            .image-menu-svg{
              width:15%;
              display:flex;
              cursor:pointer;
            }
            
            .image-menu-svg svg{
              width:40%;
              fill:rgb(119, 173, 193);
            }
            
            .send-form-button{
              width:40%;
            }
            
            .send-form-button svg{
              width:100%;
              fill:rgb(119, 173, 193);
            }
            
            .form-row{
              align-items:start;
              justify-content: space-between;
              gap: 1rem;
              width: 100%;
              margin-top:1rem;
              display:none;
            }
            
            .form-row.active{
              display: flex;
              align-items:start;
              justify-content: space-between;
              gap: 1rem;
              width: 100%;
              margin-top:1rem;
            }

            .form-column{
              align-items:self-start;
              justify-content: space-between;
              gap: 1rem;
              width: 100%;
              margin-top:1rem;
              display:none;
              flex-direction:column;
            }
            
            .form-column.active{
              display: flex;
              align-items:self-start;
              justify-content: space-between;
              gap: 1rem;
              width: 100%;
              margin-top:1rem;
              flex-direction:column;
            }
            
            .form-element{
              display:flex;
              flex-direction: column;
              align-items: center;
              justify-content:center;
              gap:1rem;
              width: 100%;
            }
            
            .url-element{
              width:100%;
              position:relative;
              right:45%;
            }
            
            .element-placeholder{
              height:20%;
              margin: 1% 0 1%;
              width:100%;
              text-align: center;
            }
            
            .element-placeholder p{
              font-size: 1.2rem;
              color:white;
              font-family: "Poppins", sans-serif;
              margin: 0;
            }
            
            .form-element input{
              height:40%;
              border-radius:7px;
              border-style: none;
              text-align: center;
              box-sizing: border-box;
              width: 100%;
              font-family: "Poppins", sans-serif;
              overflow: visible;
              font-size: 100%;
              line-height: 1.15;
              margin: 0;
              background-color:rgb(96, 105, 201);
            }
            
            .url-element svg{
              width:10%;
              fill: rgb(119, 173, 193);
            }

            .language-tab{
              display:flex;
              justify-content: space-between;
              flex-direction: row;
              background-color: white;
              border-radius: 5px;
              width:100%;
            }

            .language-tab-title{
              width:30%;
              display:flex;
              flex-direction:row;
              gap:1px;
            }

            .language-tab-title-esp{
              width:50%;
              background-color:rgb(119, 173, 193);
              border-radius: 5px;
              display: flex;
              align-items: center;
              height:100%;
              justify-content: space-around;
              cursor:pointer;
            }

            .language-tab-title-esp.active{
              background-color:rgb(54, 119, 143);
              width:50%;
              border-radius: 5px;
              display: flex;
              align-items: center;
              height:100%;
            }

            .language-tab-title-eng{
              width:50%;
              background-color:rgb(119, 173, 193);
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              cursor:pointer;
            }

            .language-tab-title-eng.active{
              width:50%;
              background-color:rgb(54, 119, 143);
              border-radius: 5px;
              display: flex;
              align-items: center;
            }

            .language-tab-title-eng h3{
              text-align: center;
              color:white;
              font-family: "Poppins", sans-serif;
              margin: 0;
              justify-content: space-around;
            }

            .language-tab-title-esp h3{
              text-align: center;
              color:white;
              font-family: "Poppins", sans-serif;
              margin: 0;
              justify-content: space-around;
            }

            textarea {
              background-color: hsl(235, 11%, 23%);
              border: none;
              color: hsl(0, 0%, 100%);
              font-family: "Poppins", sans-serif;
              font-size: 0.9rem;
              resize: none;
              width: 100%;
              overflow-y: hidden;
              height:5rem;
              border-radius:5px;
            }
            
            textarea::-webkit-scrollbar {
              display: none;
            }
            
            textarea::placeholder {
              color: hsl(0, 0%, 100%, 0.5);
              font-weight: 300;
            }
            
            textarea:focus {
              outline: none;
            }

            .subtab{
              flex-direction:column;
            }
            
            .error-window{
              border-radius:5px;
              background-color: hsl(123, 59%, 51%);
              padding:0 2%;
              display:none;
            }

            .error-window.active{
              border-radius:5px;
              background-color: hsl(37, 99%, 57%, 1);
              z-index:1000;
              transition:0.7s;
              padding:0 2%;
              cursor:pointer;
              display:block;
            }

            .element{
              color:white;
              list-style-type: none;
              font-size:1.1rem;
              height:2rem;
              align-items:center;
              display:flex;
              font-family: "Poppins", sans-serif;
            }

        </style>

        <div class="faq-form">
          <form>
            <div class="image-menu">
              <div class="image-menu-title">
                <div class="image-menu-title-principal active image-menu-button" data-value= "1">
                  <h3>Principal</h3>
                </div>
              </div>
              <div class="image-menu-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                </svg>
                <div class="send-form-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></div>
              </div>
            </div>
            <div class="error-window">
              <ul class="errors-list"></ul>
            </div>
            <div class="form-row active" data-value= "1">
              <input name="id" type="hidden">
              <div class="form-element">
                <div class="element-placeholder">
                  <p>Nombre</p>
                </div>
                <input name="name" type="text" class="validate">
              </div>
            </div>

            <div class="form-row active subtab" data-value= "1">
              <div class="language-tab">
                <div class="language-tab-title">
                  <div class="language-tab-title-esp active image-menu-button" data-value= "3">
                    <h3>ESP</h3>
                  </div>
                  <div class="language-tab-title-eng image-menu-button" data-value= "4">
                    <h3>ENG</h3>
                  </div>
                </div> 
              </div>
              <div class="form-column active" data-value= "3">
                <div class="form-element">
                  <div class="element-placeholder">
                    <p>Pregunta</p>
                  </div>
                  <input name="title-es" type="text">
                </div>

                <div class="form-element">
                  <div class="element-placeholder">
                    <p>Respuesta</p>
                  </div>
                  <textarea placeholder="Introduce una respuesta"></textarea>
                </div>
              </div>
              <div class="form-column" data-value= "4">
                <div class="form-element">
                  <div class="element-placeholder">
                    <p>Question</p>
                  </div>
                  <input name="title-en" type="text">
                </div>

                <div class="form-element">
                  <div class="element-placeholder">
                    <p>Answer</p>
                  </div>
                  <textarea placeholder="Enter an answer"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        `

    // const imageMenu = this.shadow.querySelector('.image-menu')
    const languageTab = this.shadow.querySelector('.language-tab')
    // const formRows = this.shadow.querySelectorAll('.form-row')
    const formColumns = this.shadow.querySelectorAll('.form-column')
    const save = this.shadow.querySelector('.send-form-button')

    // imageMenu?.addEventListener('click', async (event) => {
    //   if (event.target.closest('.image-menu-button')) {
    //     const button = event.target.closest('.image-menu-button')
    //     button.parentElement.querySelector('.active').classList.remove('active')
    //     button.classList.add('active')

    //     formRows.forEach(formRow => {
    //       if (button.dataset.value === formRow.dataset.value) {
    //         formRow.classList.add('active')
    //       } else if (button.dataset.value !== formRow.dataset.value) {
    //         formRow.classList.remove('active')
    //       }
    //     })
    //   }
    // })

    languageTab?.addEventListener('click', async (event) => {
      if (event.target.closest('.image-menu-button')) {
        const button = event.target.closest('.image-menu-button')
        button.parentElement.querySelector('.active').classList.remove('active')
        button.classList.add('active')

        formColumns.forEach(formColumn => {
          if (button.dataset.value === formColumn.dataset.value) {
            formColumn.classList.add('active')
          } else if (button.dataset.value !== formColumn.dataset.value) {
            formColumn.classList.remove('active')
          }
        })
      }
    })

    save.addEventListener('click', async (event) => {
      const form = this.shadow.querySelector('form')
      const formData = new FormData(form)
      const formDataJson = Object.fromEntries(formData.entries())

      document.dispatchEvent(new CustomEvent('refresh', {
      }))

      delete formDataJson.id

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJson)
        })

        if (response.status === 500 || response.status === 422) {
          throw response
        }

        if (response.status === 200) {
          const data = await response.json()
          Object.entries(data).forEach(([key, value]) => {
            console.log(`${key}: ${value}`)
          })
          document.dispatchEvent(new CustomEvent('message', {
            detail: {
              text: 'Formulario enviado correctamente',
              type: 'success'
            }
          }))
          document.dispatchEvent(new CustomEvent('notification', {
          }))
          document.dispatchEvent(new CustomEvent('refresh', {
          }))
        }
      } catch (response) {
        const errors = await response.json()

        const errorWindow = this.shadow.querySelector('.error-window')
        errorWindow.classList.add('active')
        const windowUl = this.shadow.querySelector('.errors-list')
        windowUl.innerHTML = ''

        errors.message.forEach(error => {
          const windowUl = this.shadow.querySelector('.errors-list')
          const windowLi = document.createElement('li')
          const windowP = document.createElement('p')
          windowP.innerHTML = error.message
          windowLi.className = 'element'
          windowUl.appendChild(windowLi)
          windowLi.appendChild(windowP)
        })

        errorWindow.addEventListener('click', async (event) => {
          errorWindow.classList.remove('active')
        })
      }
    })

    save.addEventListener('click', async (event) => {
      const form = this.shadow.querySelector('form')
      const formData = new FormData(form)
      const formDataJson = Object.fromEntries(formData.entries())

      const id = formDataJson.id

      const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}/${id}`)
      const exists = response.status === 200

      if (exists) {
        try {
          const putResponse = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
          })

          if (putResponse.status === 200) {
            const data = await putResponse.json()
            Object.entries(data).forEach(([key, value]) => {
              console.log(`${key}: ${value}`)
            })
            document.dispatchEvent(new CustomEvent('message', {
              detail: {
                text: 'Registro actualizado correctamente',
                type: 'success'
              }
            }))
            document.dispatchEvent(new CustomEvent('notification', {}))
            document.dispatchEvent(new CustomEvent('refresh', {}))
          } else {
            throw new Error('Error al actualizar el registro')
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        try {
          const postResponse = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
          })

          if (postResponse.status === 200) {
            const data = await postResponse.json()
            Object.entries(data).forEach(([key, value]) => {
              console.log(`${key}: ${value}`)
            })
            document.dispatchEvent(new CustomEvent('message', {
              detail: {
                text: 'Registro guardado correctamente',
                type: 'success'
              }
            }))
            document.dispatchEvent(new CustomEvent('notification', {}))
            document.dispatchEvent(new CustomEvent('refresh', {}))
          } else {
            throw new Error('Error al guardar el registro')
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
  };
}

customElements.define('faq-form-component', FaqForm)
