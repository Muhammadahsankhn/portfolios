const fs = require('fs');
const path = require('path');

const cssPath = path.join('c:\\Users\\Ahsan Khan\\Downloads\\marketing\\agenio-next\\public\\assets\\css\\style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Revert the border color change
cssContent = cssContent.replace(/\/\* Custom Footer Border Color \*\/[\s\S]*?\.wpr-footer-area \.section-inner\.border-1 \{[\s\S]*?border-color: #005D74 !important;[\s\S]*?\}/, '');

// Add the square shape color change
cssContent += '\n\n/* Custom Footer Square Shape Color */\n.wpr-footer-area .square-shape {\n  background-color: #005D74 !important;\n}\n';

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Fixed style.css border shapes');
