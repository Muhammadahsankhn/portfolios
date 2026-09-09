const fs = require('fs');
const path = require('path');

// 1. Fix contact/page.tsx
const contactPath = path.join('c:\\Users\\Ahsan Khan\\Downloads\\marketing\\agenio-next\\src\\app\\contact\\page.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');
contactContent = contactContent.replace('USA, New York – 1060 Str.', '493 Washington Ave, Albany, NY 12206');
fs.writeFileSync(contactPath, contactContent, 'utf8');
console.log('Fixed contact/page.tsx');

// 2. Append to style.css
const cssPath = path.join('c:\\Users\\Ahsan Khan\\Downloads\\marketing\\agenio-next\\public\\assets\\css\\style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent += '\n\n/* Custom Footer Border Color */\n.wpr-footer-area .section-inner.border-1 {\n  border-color: #005D74 !important;\n}\n';
fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Fixed style.css');
