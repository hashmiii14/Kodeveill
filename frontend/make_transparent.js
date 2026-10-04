const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/sections');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Make sections transparent so the ambient background can shine through
  // But keep the light mode backgrounds to ensure contrast if needed
  let newContent = content.replace(/bg-zinc-50 dark:bg-zinc-950/g, 'bg-zinc-50/50 dark:bg-transparent');
  newContent = newContent.replace(/bg-white dark:bg-zinc-950/g, 'bg-white/50 dark:bg-transparent');
  
  // Make solid elements inside sections translucent in dark mode to avoid "disappearing"
  newContent = newContent.replace(/bg-zinc-900 dark:bg-zinc-900/g, 'bg-zinc-900 dark:bg-zinc-900/40 dark:backdrop-blur-xl');
  newContent = newContent.replace(/dark:border-zinc-800/g, 'dark:border-white/10');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    processFile(path.join(dir, file));
  }
});

console.log("Done");
