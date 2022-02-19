class MyHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<a class="logo-link" href="index.html">
        <div class="logo-container"><svg class="logo" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                    fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24 0C24 16 16 24 0 24C15.718 24.114 23.718 32.114 24 48C24 32 32 24 48 24C32 24 24 16 24 0Z"
                    fill="#0B0D17" />
            </svg></div>
    </a>
    <div class="navbar-decoration-line"></div>
    <!-- header navbar  -->
    <div class="navbar-container">
        <!-- navbar close btn  -->
        <div class="res-navbar-close-btn-container"><svg class="res-navbar-close-btn" viewBox="0 0 20 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.57496 0.954L19.545 17.924L17.425 20.046L0.454956 3.076L2.57496 0.954Z" fill="#D0D6F9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.453979 17.925L17.424 0.955001L19.546 3.075L2.57598 20.045L0.453979 17.925Z" fill="#D0D6F9" />
            </svg></div>
        <!-- navbar  -->
        <ul class="navbar">
            <li class="nav-item ${this.getAttribute("homeActive")}"><a href="index.html" class="nav-link"><span
                        class="nav-link-num">00</span>Home</a>
            </li>
            <li class="nav-item ${this.getAttribute("destinationActive")}"><a href="destination.html" class="nav-link"><span class="nav-link-num">01</span>Destination</a></li>
            <li class="nav-item ${this.getAttribute("crewActive")}"><a href="crew.html" class="nav-link"><span class="nav-link-num">02</span>Crew</a></li>
            <li class="nav-item ${this.getAttribute("technologyActive")}"><a href="technology.html" class="nav-link"><span class="nav-link-num">03</span>Technology</a></li>
        </ul>
    </div>
    <!-- hamburger icon  -->
    <div class="hamburger-btn-container"><svg class="hamburger-btn" width="24" height="21" viewBox="0 0 24 21"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V3H0V0ZM0 9H24V12H0V9ZM0 18H24V21H0V18Z"
                fill="#D0D6F9" />
        </svg></div>`;
    }
};

customElements.define("my-header", MyHeader);
console.log($(".header").html());