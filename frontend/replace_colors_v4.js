const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src/sections'),
  path.join(__dirname, 'src/components')
];

const replacements = [
  // 1. Buttons, solid backgrounds, primary dots
  { from: /bg-blue-600 dark:bg-blue-500/g, to: 'bg-slate-800 dark:bg-slate-300' },
  { from: /bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600/g, to: 'bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200' },
  { from: /bg-blue-700 dark:bg-blue-400/g, to: 'bg-slate-900 dark:bg-slate-200' },
  
  // 2. Soft backgrounds (icons, badges, table cells)
  { from: /bg-blue-50 dark:bg-blue-500\/10/g, to: 'bg-slate-100 dark:bg-slate-300/10' },
  { from: /bg-blue-50\/50 dark:bg-blue-500\/5/g, to: 'bg-slate-100/50 dark:bg-slate-300/5' },
  { from: /bg-blue-50\/30 dark:bg-blue-500\/5/g, to: 'bg-slate-100/30 dark:bg-slate-300/5' },
  { from: /bg-blue-50 dark:bg-blue-900\/20/g, to: 'bg-slate-100 dark:bg-slate-800/50' },
  
  // 3. Borders
  { from: /border-blue-600 dark:border-blue-500/g, to: 'border-slate-800 dark:border-slate-300' },
  { from: /border-blue-600 dark:border-blue-400/g, to: 'border-slate-800 dark:border-slate-400' },
  { from: /border border-blue-200 dark:bg-blue-500\/10 dark:text-blue-400 dark:border-blue-500\/30/g, to: 'border border-slate-200 dark:bg-slate-300/10 dark:text-slate-300 dark:border-slate-300/30' },
  { from: /border-blue-500/g, to: 'border-slate-400' },
  
  // 4. Group hover texts (to fix icons and titles turning white/black)
  { from: /group-hover:text-blue-600 dark:group-hover:text-blue-400/g, to: 'group-hover:text-slate-800 dark:group-hover:text-slate-300' },
  { from: /group-hover:bg-blue-600 dark:group-hover:bg-blue-500/g, to: 'group-hover:bg-slate-800 dark:group-hover:bg-slate-300' },
  
  // 5. Specific text replacements
  { from: /text-blue-600 dark:text-blue-400/g, to: 'text-slate-700 dark:text-slate-300' },
  { from: /text-blue-600/g, to: 'text-slate-700' },
  
  // 7. Pulse dots
  { from: /bg-blue-500 animate-pulse-soft/g, to: 'bg-slate-400 animate-pulse-soft' },
  { from: /bg-blue-500\" aria-hidden/g, to: 'bg-slate-400" aria-hidden' },
  
  // 10. Process dots
  { from: /group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500/g, to: 'group-hover:border-slate-800 group-hover:bg-slate-800 group-hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:border-slate-300 dark:group-hover:bg-slate-300 dark:group-hover:text-slate-900' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  replacements.forEach(r => {
    newContent = newContent.replace(r.from, r.to);
  });
  
  // Fix specifically the pricing text-white that got mixed up
  newContent = newContent.replace(/bg-slate-800 dark:bg-slate-300 text-white/g, 'bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.jsx')) {
        processFile(path.join(dir, file));
      }
    });
  }
});

console.log("Done");
