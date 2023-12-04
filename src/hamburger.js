class Hamburger extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .header-hamburger{
                width:20%;
                display:flex;
                justify-content: end;
            
            }
            
            .hamburger{
                height: 2.5rem;
                width: 20%;
                position:relative;
                margin-top:0.5rem;
            }
            
            .hamburger .line {
                display: block;
                background-color:hsl(192, 15%, 94%);
                width: 100%;
                height: 0.3rem;
                position: absolute;
                left:0%;
                border-radius: 0.25rem;
                transition: all 0.4s;
                -webkit-transition: all 0.4s;
                -moz-transition: all 0.4s;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            
            .hamburger .line.line-1 {
                top: 10%;
            }
            
            .hamburger .line.line-2 {
                top: 50%;
            }
            
            .hamburger .line.line-3 {
                top: 90%;
            }
            
            .hamburger:hover .line-1, .hamburger:focus .line-1 {
                transform: translateY(-0.25rem);
                -webkit-transform: translateY(-0.25rem);
                -moz-transform: translateY(-0.25rem);
            }
            
            .hamburger:hover .line-3, .hamburger:focus .line-3 {
                transform: translateY(0.25rem);
                -webkit-transform: translateY(0.25rem);
                -moz-transform: translateY(0.25rem);
            }
            
            .hamburger.active .line-1 {
                transform: translateY(0.65rem) translateX(0) rotate(45deg);
                -webkit-transform: translateY(0rem) translateX(0rem) rotate(45deg);
                -moz-transform: translateY(0.65rem) translateX(0) rotate(45deg);
                top: 25%;
            }
            
            .hamburger.active .line-2 {
                opacity: 0;
            }
            
            .hamburger.active .line-3 {
                transform: translateY(-0.65rem) translateX(0) rotate(-45deg);
                -webkit-transform: translateY(-0.32rem) translateX(0px) rotate(-45deg);
                -moz-transform: translateY(-0.65rem) translateX(0) rotate(-45deg);
                top: 40%;
            }
            
            .hamburger.active{
                z-index:1001;
            }

            .curtain{
                width:100vw;
                height:0;
                position:absolute;
                top:0%;
                transition:0.7s;
            }
            
            .curtain.active{
                width:100.4vw;
                height:100vh;
                background-color: hsl(180, 57%, 36%);
                z-index: 1000;
                position:absolute;
                top:-1.5%;
                left:-1%;
                display:block;
            }
            
        
        </style>

        <div class="header-hamburger">
            <div class="hamburger">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </div>
        </div>

        <div class="curtain"></div>

        `;

        let curtain= this.shadow.querySelector(".curtain");

        let hamburger= this.shadow.querySelector(".hamburger");


        hamburger.addEventListener("click",()=>{
            
            curtain.classList.toggle("active");
            hamburger.classList.toggle("active");
        })
  

    }
}

customElements.define('hamburger-component', Hamburger);