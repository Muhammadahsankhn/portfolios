const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetDir = 'c:\\\\Users\\\\Ahsan Khan\\\\Downloads\\\\marketing\\\\agenio-next\\\\src\\\\app';

const newSocialText = `<div class="left-social-area">
                        <ul>
                            <li><a href="https://www.facebook.com/digicarehouseagency" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="https://www.youtube.com/@digicarehouseagency" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> Youtube</a></li>
                            <li><a href="http://linkedin.com/company/digicarehouseagency" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i> LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/digicarehouseagency/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>`;

let updatedCount = 0;
walkDir(targetDir, (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace social area
        const socialRegex = /<div class="left-social-area">[\s\S]*?<ul>[\s\S]*?<li><a href="#">Instagram<\/a><\/li>[\s\S]*?<li><a href="#">Linkedin<\/a><\/li>[\s\S]*?<li><a href="#">Dribbble<\/a><\/li>[\s\S]*?<li><a href="#">Behance<\/a><\/li>[\s\S]*?<\/ul>[\s\S]*?<\/div>/g;
        if (socialRegex.test(content)) {
            content = content.replace(socialRegex, newSocialText);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated social links: ' + filePath);
            updatedCount++;
        }
    }
});

console.log(`Total social links updated files: ${updatedCount}`);
