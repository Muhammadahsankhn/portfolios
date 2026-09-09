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

const newText = `<div class="location-area">
                        <p class="sub-title">OFFICES</p>
                        <ul>
                            <li>
                                <h2 class="h4">Head Office</h2>
                                <p>493 Washington Ave, Albany, <br> NY 12206, United States</p>
                            </li>
                            <li>
                                <h2 class="h4">Back Office</h2>
                                <p>Office # 501, 5th Floor, Block A, <br> Anum Classic, Shahrah-e-Faisal, <br> Karachi, Pakistan 75500</p>
                            </li>
                        </ul>
                    </div>`;

let updatedCount = 0;
walkDir(targetDir, (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const regex = /<div class="location-area">[\s\S]*?<p class="sub-title">OFFFICES<\/p>[\s\S]*?<ul>[\s\S]*?<li>[\s\S]*?<h2 class="h4">Montréal<\/h2>[\s\S]*?<p>4200 Saint Laurent Blvd, Suite 305 <br> Montreal, QC H2W 2R2 <br> Canada<\/p>[\s\S]*?<\/li>[\s\S]*?<li>[\s\S]*?<h2 class="h4">Texas<\/h2>[\s\S]*?<p>1920 McKinney Avenue, 7th Floor <br> Dallas, TX 75201 <br> United States<\/p>[\s\S]*?<\/li>[\s\S]*?<\/ul>[\s\S]*?<\/div>/g;
        
        if (regex.test(content)) {
            content = content.replace(regex, newText);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated: ' + filePath);
            updatedCount++;
        }
    }
});

console.log(`Total updated files: ${updatedCount}`);
