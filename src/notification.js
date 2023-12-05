class Notification extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .notification{
                position:fixed;
                right:2%;
                bottom:3%;
                border-radius:5px;
                background-color: hsl(123, 59%, 51%);
                opacity:0;
                visibility:hidden;
                transition:0.5s;
            }

            .notification.active{
                position:fixed;
                right:2%;
                bottom:3%;
                border-radius:5px;
                background-color: hsl(123, 59%, 51%);
                opacity:1;
                visibility:visible;
                z-index:1000;
                transition:0.5s;
            }

            p{
                font-family: "Poppins", sans-serif;
                color:white;
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

        <div class="notification">
            <p>Usuario registrado con éxito.</p>
        </div>

        `;

    }
}

customElements.define('notification-component', Notification);