const fs = require('fs');
const path = require('path');

const cssPath = path.join('c:\\Users\\Ahsan Khan\\Downloads\\marketing\\agenio-next\\public\\assets\\css\\style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent += '\n\n/* Force FAQ visibility */\n.accordion-collapse.show {\n  display: block !important;\n  height: auto !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n';
fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Fixed style.css visibility issue');
