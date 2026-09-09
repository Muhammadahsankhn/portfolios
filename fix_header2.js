const fs = require('fs');

let backup = fs.readFileSync('page_backup.tsx', 'utf8');
let current = fs.readFileSync('src/app/page.tsx', 'utf8');

const headerRegex = /<header[\s\S]*?<\/header>/;
let header = backup.match(headerRegex)[0];

// Fix sticky header
header = header.replace('class="header-style-one site-sticky-header" style="position: sticky; top: 0; z-index: 1000; background-color: var(--color-white, #ffffff); border-bottom: 1px solid #eaeaea;"', 'class="header-style-one header--sticky"');

// Fix desktop menu
header = header.replace(
    /<li class="menu-item"><a class="main-element" href="#about">ABOUT US<\/a><\/li>[\s\S]*?<li class="menu-item"><a class="main-element" href="#services">SERVICES<\/a><\/li>[\s\S]*?<li class="menu-item"><a class="main-element" href="#works">WORKS<\/a><\/li>/g,
    '<li class="menu-item"><a class="main-element" href="#about">ABOUT US</a></li>\n                        <li class="menu-item"><a class="main-element" href="#works">PROJECTS</a></li>\n                        <li class="menu-item"><a class="main-element" href="#services">SERVICES</a></li>'
);

current = current.replace(headerRegex, header);
fs.writeFileSync('src/app/page.tsx', current);
console.log('Fixed header');
