const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');
const replacement = `<div class="logo-area square-dot">
                    <div class="logo">
                        <a href="#home">
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
                    </a>`;
                    
c = c.replace(/<div class="logo-area square-dot">[\s\S]*?<img src="\/assets\/images\/logo\/header-logo\.png" alt="logo">[\s\S]*?<\/a>[\s\S]*?<\/div>[\s\S]*?<\/a>/, replacement);
fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed desktop menu');
