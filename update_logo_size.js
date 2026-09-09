const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'OOM' || err.code === 'EMFILE') throw err;
    }
  });
  return filelist;
};

const files = walkSync('src/app').filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('header-logo.png') && content.includes('width="160"')) {
    const newContent = content.replace(/<div class="logo"><img src="\/assets\/images\/logo\/header-logo\.png" width="160" alt=""><\/div>/g, '<div class="logo"><img src="/assets/images/logo/header-logo.png" width="220" alt=""></div>');
    if (newContent !== content) {
      fs.writeFileSync(f, newContent, 'utf8');
      console.log(`Updated ${f}`);
    }
  }
});
