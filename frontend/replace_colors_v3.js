const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src/sections'),
  path.join(__dirname, 'src/components')
];

const replacements = [
  // 1. Buttons, solid backgrounds, primary dots
  { from: /bg-zinc-900 dark:bg-white text-white dark:text-zinc-900/g, to: 'bg-blue-600 dark:bg-blue-500 text-white' },
  { from: /bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200/g, to: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600' },
  { from: /bg-zinc-800 dark:bg-zinc-200/g, to: 'bg-blue-700 dark:bg-blue-400' },
  
  // 2. Soft backgrounds (icons, badges, table cells)
  { from: /bg-zinc-100 dark:bg-zinc-800/g, to: 'bg-blue-50 dark:bg-blue-500/10' },
  { from: /bg-zinc-100\/50 dark:bg-zinc-800\/50/g, to: 'bg-blue-50/50 dark:bg-blue-500/5' },
  { from: /bg-zinc-100\/30 dark:bg-zinc-800\/30/g, to: 'bg-blue-50/30 dark:bg-blue-500/5' },
  
  // 3. Borders
  { from: /border-zinc-900 dark:border-white/g, to: 'border-blue-600 dark:border-blue-400' },
  
  // 4. Group hover texts (to fix icons and titles turning white/black)
  { from: /group-hover:text-zinc-900 dark:text-white/g, to: 'group-hover:text-blue-600 dark:group-hover:text-blue-400' },
  { from: /group-hover:bg-zinc-900 dark:group-hover:bg-white/g, to: 'group-hover:bg-blue-600 dark:group-hover:bg-blue-500' },
  
  // 5. Specific text replacements that I previously turned into zinc-900 dark:text-white
  // (We have to be careful not to turn standard headings blue, so we'll only target known icon colors and specific text)
  { from: /text-zinc-900 dark:text-white group-hover:text-zinc-900 dark:text-white/g, to: 'text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400' },
  { from: /text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:text-white/g, to: 'text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400' },
  
  // 6. Pricing specific
  { from: /text-zinc-900 dark:text-white bg-zinc-100\/50 dark:bg-zinc-800\/5/g, to: 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5' },
  { from: /bg-zinc-100 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800/g, to: 'bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30' },
  
  // 7. Pulse dots
  { from: /bg-zinc-900 dark:bg-white animate-pulse-soft/g, to: 'bg-blue-500 animate-pulse-soft' },
  { from: /bg-zinc-900 dark:bg-white\" aria-hidden/g, to: 'bg-blue-500" aria-hidden' },
  
  // 8. Spinners
  { from: /border-zinc-900 dark:border-white border-t-transparent animate-spin/g, to: 'border-blue-500 border-t-transparent animate-spin' },
  
  // 9. Floating action styles in some files
  { from: /text-zinc-900 dark:text-white flex-shrink-0/g, to: 'text-blue-600 dark:text-blue-400 flex-shrink-0' },
  
  // 10. Process dots
  { from: /border-2 border-zinc-200 bg-white font-mono text-xs font-bold text-zinc-400 transition-all duration-300 group-hover:border-blue-600 dark:border-blue-400 group-hover:bg-blue-600 dark:bg-blue-500 group-hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:border-blue-600 dark:border-blue-400 dark:group-hover:bg-blue-600 dark:bg-blue-500/g, to: 'border-2 border-zinc-200 bg-white font-mono text-xs font-bold text-zinc-400 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  replacements.forEach(r => {
    newContent = newContent.replace(r.from, r.to);
  });
  
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
