class FilterModal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener("show-filter-modal", (event => {
            this.openModal();
        
        }));
    };

    render() {

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
            .modal-overlay{
                z-index:1003;
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
            
            .modal-overlay.active{
                visibility: visible;
                opacity: 1;
            }
            
            .filter-modal{
                width:30%;
                height:45%;
                background-color:  hsl(180, 57%, 36%);
                border-radius:10px;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                opacity:1;
                visibility: hidden;
                transition:0.7s;
            }
            
            .filter-modal.active{
                opacity: 1;
                visibility: visible;
                transition:0.7s;
            }
            
            .announcement{
                padding:5% 10% 0% 10%;
                height:15%;
            }
            
            .announcement p{
                font-size: 1.3rem;
                font-weight: 600;
                color:white;
            }
            
            .filter-form{
                height:35%;
                width:90%;
                display:flex;
                justify-content:space-between;
                flex-direction: column;
                align-items: center;
            }
            
            .filter-form.active{
                width:90%;
                height:50%;
                display:flex;
                justify-content:space-between;
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
                color:white;
                text-align:center;
                font-weight:900;
                margin:0;
            }
            
            .input-row{
                display:flex;
            }
            
            .input-row input{
                height:100%;
            }
            
            .filter-modal-buttons{
                display:flex;
                flex-direction: row;
                height:20%;
                justify-content: space-between;
                width:81%;
                gap:2.6rem;
            }
            
            .filter-button.cancel{
                background-color: rgba(231, 118, 26, 0.904);
            }
        </style>

        <div class="modal-overlay">
            <div class="filter-modal">
                <div class="announcement">
                    <p>Filtraje de tabla</p>
                </div>
                <form class="filter-form">
                    <div class="input-title">
                        <p>Nombre</p>
                        <div class="input-row">
                            <input name="name" type="text" class="id-input active">
                        </div>
                    </div>
                    <div class="input-title">
                        <p>Email</p>
                        <div class="input-row">
                            <input name="email" type="text" class="id-input active">
                        </div>
                    </div>
                </form>
                <div class="filter-modal-buttons">
                    <button class="filter-button confirm">Filtrar</button>
                    <button class="filter-button cancel">Cancelar</button>
                </div>
            </div>
        </div>

        `;

        let button = this.shadow.querySelector(".filter-button.cancel");

        button.addEventListener("click",()=>{
            
            this.deleteModal();
    
        });

    };
    

    openModal(){

        let filterModal = this.shadow.querySelector(".filter-modal");
        let overlay = this.shadow.querySelector(".modal-overlay");

        filterModal.classList.add("active");
        overlay.classList.toggle("active");
    };

    deleteModal(){

        let filterModal = this.shadow.querySelector(".filter-modal");
        let overlay = this.shadow.querySelector(".modal-overlay");

        filterModal.classList.remove("active");
        overlay.classList.remove("active");
    };
}

customElements.define('filter-modal-component', FilterModal);