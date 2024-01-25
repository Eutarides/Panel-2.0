class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback () {
  };

  render () {
    this.shadow.innerHTML =
      `
        <style>
            p{
                font-family: "Poppins", sans-serif;
            }
            .client-column{
                display:flex;
                flex-direction: column;
                height:80vh;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .client-form{
                width:55%;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:100%;
            }
            
            .button-menu{
                position:relative;
                bottom:10%;
                left:10%;
                width:40.5%;
                display:center;
            }
            
            .client-item-images svg{
                width:100%;
                fill:white;
            }
            
            .edit-button{
                width:6%;
            }
            
            .delete-button{
                width:6%;
            }
            
            .client-item{
                width:90%;
                height:40%;
            }
            
            .client-item-images{
                height:25%;
                display:flex;
                flex-direction: row;
                justify-content: end;
                gap:0.5rem;
                background-color: rgb(119, 173, 193);
            
            }
            
            .client-item-data{
                height:70%;
                width:100%;
                background-color:rgb(96, 105, 201);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                gap:1rem;
            }
            
            .client-item-data-row{
                width:95%;
                height:30%;
                flex-direction: column;
                display: flex;
                justify-content: space-between;
            }
            
            .data-row h3{
                color:white;
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            
            .info{
                height:90%;
            }
            
            .client-item-data div{
                width:95%;
                height:50%;
                flex-direction: column;
                display: flex;
                color:white;
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .page-counter{
                width:100%;
            }
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
            
            .table{
                height:80%;
                width:90%;
                align-items: center;
                display: flex;
                flex-direction:column;
                gap:1rem;
            
            }
            
            .filter{
                width:90%;
                background-color:rgb(119, 173, 193);
                align-items:center;
                border-radius: 5px;
                display:flex;
                flex-direction: column;
                height:5%;
            }
            
            .filter-svg{
                width:5%;
            }
            svg{
                width:100%;
                fill:white;
            }
            
            svg.active{
                width:100%;
                fill:hsl(120, 59%, 41%);
            }
            
            .input-title{
                display:flex;
                flex-direction:column;
                gap:0.5rem;
                width:90%;
            }
            
            .input-title p{
                font-family: "Poppins", sans-serif;
                font-size: 100%;
                line-height: 1.15;
                color:rgb(119, 173, 193);
                text-align:center;
                font-weight:900;
                margin:0;
            }
            
            .page-counter{
                width:90%;
                height:13%;
                display: flex;
                flex-direction: column;
                background-color:rgb(119, 173, 193);
                border-radius:5px;
            }
            
            .counter-info{
                display:flex;
                justify-content: space-between;
                padding:0% 5%;
            }
            
            .page-counter-buttons{
                display:flex;
                justify-content: space-between;
                padding:0% 20%;
                flex-direction: row;
                height:25%;
                gap:0.5rem;
            }
            
            .counter-button{
                color:white;
                border:solid white 1px;
                border-radius:5px;
                padding:0% 2%;
            }
            
            .counter-button p{
                margin-block-start: 0;
                margin-block-end: 0;
            }
            
        </style>

        <div class="client-column">
            <div class="filter">
                <div class= "filter-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                    </svg>
                </div>
            </div>
            <div class="table">
                <div class="client-item">
                    <div class="client-item-images">
                        <div class="edit-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </div>
                        <div class="delete-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="client-item-data">
                        <div class="data-row">
                            <h3>Email:</h3>
                            <h3>Nombre:</h3>
                            <h3>Apellidos:</h3>
                        </div>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-item-images">
                        <div class="edit-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </div>
                        <div class="delete-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="client-item-data">
                        <div class="data-row">
                            <h3>Email:</h3>
                            <h3>Nombre:</h3>
                            <h3>Apellidos:</h3>
                        </div>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-item-images">
                        <div class="edit-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </div>
                        <div class="delete-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="client-item-data">
                        <div class="data-row">
                            <h3>Email:</h3>
                            <h3>Nombre:</h3>
                            <h3>Apellidos:</h3>
                        </div>
                    </div>
                </div>
                <div class="client-item">
                    <div class="client-item-images">
                        <div class="edit-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </div>
                        <div class="delete-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="client-item-data">
                        <div class="data-row">
                            <h3>Email:</h3>
                            <h3>Nombre:</h3>
                            <h3>Apellidos:</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-counter">
                <div class="counter-info">
                    <div class="info-registers">
                        <p>1-4 de 4 registros</p>
                    </div>
                    <div class="info-page">
                        <p>Página 1 de 1</p>
                    </div>
                </div>
                <div class="page-counter-buttons">
                    <div class="counter-button first">
                        <p>Primera</p>
                    </div>
                    <div class="counter-button previous">
                        <p>Anterior</p>
                    </div>
                    <div class="counter-button next">
                        <p>Siguiente</p>
                    </div>
                    <div class="counter-button last">
                        <p>Última</p>
                    </div>
                </div>
            </div>
        </div>
        `

    const tableSection = this.shadow.querySelector('.table')

    const filter = this.shadow.querySelector('.filter-svg')

    tableSection?.addEventListener('click', async (event) => {
      if (event.target.closest('.delete-button')) {
        document.dispatchEvent(new CustomEvent('show-delete-modal', {
        }))
      }
    })

    filter.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('show-filter-modal', {
      }))
    })
  };
}

customElements.define('table-component', Table)
