class ClientForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
    };

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .client-form{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:100%;
            }
            
            .image-menu{
                display:flex;
                justify-content: space-between;
                flex-direction: row;
                background-color: white;
                border-radius: 5px;
                margin-bottom:2rem;
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
                height:35%;
                align-items:center;
                justify-content: space-between;
                gap: 1rem;
                width: 100%;
                margin-top:1rem;
                display:none;
            }
            
            .form-row.active{
                display: flex;
                height:35%;
                align-items:center;
                justify-content: space-between;
                gap: 1rem;
                width: 100%;
                margin-top:1rem;
            }
            
            .form-element{
                height:100%;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                gap:1rem;
                width: 50%;
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
            
        </style>

        <div class="client-form">
            <form>
                <div class="image-menu">
                    <div class="image-menu-title">
                        <div class="image-menu-title-principal active image-menu-button" data-value= "1">
                            <h3>Principal</h3>
                        </div>
                        <div class="image-menu-title-imagenes image-menu-button" data-value= "2">
                            <h3>Imágenes</h3>
                        </div>
                    </div>
                    <div class="image-menu-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                        </svg>
                        <div class="send-form-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></div>
                    </div>
                </div>
                <div class="form-row active" data-value= "1">
                    <input name="id" type="hidden">
                    <div class="form-element">
                        <div class="element-placeholder">
                            <p>Nombre de usuario</p>
                        </div>
                        <input name="name" type="text" class="validate">
                    </div>
                    <div class="form-element">
                        <div class="element-placeholder">
                            <p>Email</p>
                        </div>
                        <input name="email" type="text">
                    </div>
                </div>
                <div class="form-row active" data-value= "1">
                    <div class="form-element">
                        <div class="element-placeholder">
                            <p>Contraseña</p>
                        </div>
                        <input name="password" type="password" class="validate" data-minlength="8" data-onlyletters="true">
                    </div>
                    <div class="form-element">
                        <div class="element-placeholder">
                            <p>Confirma Contraseña</p>
                        </div>
                        <input name="confirmPassword" type="password" class="validate" data-minlength="8" data-onlyletters="true">
                    </div>
                </div>
                <div class="form-row" data-value= "2">
                    <div class= "form-element url-element">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab-plus</title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>
                    </div>
                </div>
            </form>
        </div>
        
        `;

        let imageMenu = this.shadow.querySelector('.image-menu');
        let formRows = this.shadow.querySelectorAll('.form-row');
        let save = this.shadow.querySelector('.send-form-button');

        imageMenu?.addEventListener('click', async (event) => {
            if (event.target.closest('.image-menu-button')) {
                let button = event.target.closest('.image-menu-button');
                button.parentElement.querySelector('.active').classList.remove('active')
                button.classList.add('active');

                // button.closest('form').querySelector(".form-row.active").classList.remove('active');
                // button.closest('form').querySelector(`.form-row[data-value="${button.dataset.value}"]`).classList.add('active');

                formRows.forEach( formRow => {
                    if (button.dataset.value == formRow.dataset.value){
                        formRow.classList.add('active');
                    }else if(button.dataset.value != formRow.dataset.value){
                        formRow.classList.remove('active');
                    }
                })
            }
        });

        save.addEventListener('click', async (event) => {
            document.dispatchEvent(new CustomEvent('show-delete-modal', {
            }));
        });
    };
}

customElements.define('client-form-component', ClientForm);