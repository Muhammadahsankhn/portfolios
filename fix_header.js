const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const replacement = `<span class="square-shape bottom-right"></span>
                </div>
                <div id="side-bar" class="side-bar">
                    <div class="sidebar-inner">
                        <!-- mobile menu area start -->
                        <div class="mobile-menu-main">
                            <nav class="nav-main mainmenu-nav">
                                <ul class="list-unstyled wpr-desktop-menu" id="mobile-menu">
                                    <li class="menu-item"><a class="main-element" href="#home">HOME</a></li>
                                    <li class="menu-item"><a class="main-element" href="#about">ABOUT US</a></li>
                                    <li class="menu-item"><a class="main-element" href="#works">PROJECTS</a></li>
                                    <li class="menu-item"><a class="main-element" href="#services">SERVICES</a></li>
                                    <li class="menu-item"><a class="main-element" href="#contact">CONTACT</a></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- mobile menu area end -->
                        <div class="button-area">
                            <a href="#contact" class="wpr-btn btn-primary">`;

content = content.replace(/<span class="square-shape bottom-right"><\/span>\s*<\/div>\s*<a href="#contact" class="wpr-btn btn-primary">/, replacement);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed');
