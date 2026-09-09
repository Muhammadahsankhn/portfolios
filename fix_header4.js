const fs = require('fs');
let current = fs.readFileSync('src/app/page.tsx', 'utf8');

const newHeader = `    <header class="header-style-one site-sticky-header" style="position: sticky; top: 0; z-index: 1000; background-color: var(--color-white, #ffffff); border-bottom: 1px solid #eaeaea;">
        <div class="header-top">
            <div class="header-top-inner">
                <div class="left-icon"><img src="/assets/images/icon/green-left.svg" alt=""></div>
                <p class="text">WE ARE AVAILABLE FOR <span>DECEMBER PROJECTS</span></p>
                <div class="right-icon"><img src="/assets/images/icon/green-right.svg" alt=""></div>
            </div>
        </div>
        <div class="container">
            <div class="header-style-one-wrapper">
                <div class="left-area square-dot">
                    <div class="logo-area">
                        <a href="/" class="logo">
                            <img src="/assets/images/logo/header-logo.png" alt="logo">
                        </a>
                    </div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
                <nav class="main-nav-area">
                    <ul class="list-unstyled wpr-desktop-menu">
                        <li class="menu-item active">
                            <a class="main-element wpr-dropdown-main-element" href="#home">HOME</a>
                        </li>
                        <li class="menu-item"><a class="main-element" href="#about">ABOUT US</a></li>
                        <li class="menu-item"><a class="main-element" href="#works">PROJECTS</a></li>
                        <li class="menu-item"><a class="main-element" href="#services">SERVICES</a></li>
                        <li class="menu-item"><a class="main-element" href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
                <div class="button-area-start square-dot">
                    <a href="#contact" class="wpr-btn btn-primary">
                        Start a Project
                    </a>
                    <div class="menu-btn d-flex d-lg-none d-md-flex d-sm-flex" id="menu-btn">
                        <span class="line one"></span>
                        <span class="line two"></span>
                    </div>
                    <span class="square-shape top-left"></span>
                    <span class="square-shape bottom-left"></span>
                    <span class="square-shape top-right"></span>
                    <span class="square-shape bottom-right"></span>
                </div>
                <div id="side-bar" class="side-bar">
                    <div class="sidebar-inner">
                        <!-- mobile menu area start -->
                        <div class="mobile-menu-main">
                            <nav class="nav-main mainmenu-nav">
                                <ul class="list-unstyled wpr-desktop-menu" id="mobile-menu">
                                    <!-- HOME -->
                                    <li class="menu-item">
                                        <a class="main-element" href="#home">HOME</a>
                                    </li>
                                    <!-- ABOUT -->
                                    <li class="menu-item">
                                        <a class="main-element" href="#about">ABOUT US</a>
                                    </li>
                                    <!-- PROJECTS -->
                                    <li class="menu-item"><a class="main-element" href="#works">PROJECTS</a></li>
                                    <!-- SERVICES -->
                                    <li class="menu-item"><a class="main-element" href="#services">SERVICES</a></li>
                                    <!-- CONTACT -->
                                    <li class="menu-item">
                                        <a class="main-element" href="#contact">CONTACT</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- mobile menu area end -->
                        <div class="button-area">
                            <a href="#contact" class="wpr-btn btn-primary">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;

const headerRegex = /<header[\s\S]*?<\/header>/;
current = current.replace(headerRegex, newHeader);
fs.writeFileSync('src/app/page.tsx', current);
console.log('Fixed header 4');
