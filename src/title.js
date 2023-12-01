class Title extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .header-title{
                width:20%;
            }
            
            .header-title h1{
                color:white;
                font-size: 2.5rem;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
        </style>

        <div class="header-title">
            <h1>Clientes</h1>
        </div>

        `;

    }
}

customElements.define('title-component', Title);