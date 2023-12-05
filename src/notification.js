class Notification extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    connectedCallback() {
        document.addEventListener('notification', (event => {
            console.log("compa");    
            this.notification();

        }));
    };

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .notification{
                position:fixed;
                right:5.3%;
                bottom:45%;
                border-radius:5px;
                background-color: hsl(123, 59%, 51%);
                opacity:0;
                visibility:hidden;
                transition:0.5s;
                padding:0 2%;
            }

            .notification.active{
                position:fixed;
                right:5.3%;
                bottom:45%;
                border-radius:5px;
                background-color: hsl(123, 59%, 51%);
                opacity:1;
                visibility:visible;
                z-index:1000;
                transition:0.5s;
                padding:0 2%;
            }

            p{
                font-family: "Poppins", sans-serif;
                color:white;
            }
        </style>

        <div class="notification">
            <p>Usuario registrado con éxito.</p>
        </div>

        `;



    }

    notification(){
        let noti = this.shadow.querySelector('.notification');

        noti.classList.add('active');

        setTimeout(function() {noti.classList.remove('active');}, 1000);

    }
}

customElements.define('notification-component', Notification);