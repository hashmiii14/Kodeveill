const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src/sections'),
  path.join(__dirname, 'src/components')
];

const replacements = [
  { from: /text-indigo-500/g, to: 'text-zinc-900 dark:text-white' },
  { from: /text-indigo-600/g, to: 'text-zinc-900 dark:text-white' },
  { from: /text-indigo-400/g, to: 'text-zinc-500 dark:text-zinc-400' },
  { from: /text-white/g, to: 'text-white dark:text-zinc-900' }, // This is tricky, might mess up hardcoded white text, but I'll skip it and handle it manually if needed.
  { from: /bg-indigo-500\/10/g, to: 'bg-zinc-100 dark:bg-zinc-800' },
  { from: /bg-indigo-500\/5/g, to: 'bg-zinc-50 dark:bg-zinc-900' },
  { from: /bg-indigo-500/g, to: 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' },
  { from: /bg-indigo-600/g, to: 'bg-zinc-800 dark:bg-zinc-200' },
  { from: /bg-indigo-50\/50/g, to: 'bg-zinc-100/50 dark:bg-zinc-800/50' },
  { from: /bg-indigo-50\/30/g, to: 'bg-zinc-100/30 dark:bg-zinc-800/30' },
  { from: /bg-indigo-50/g, to: 'bg-zinc-100 dark:bg-zinc-800' },
  { from: /border-indigo-500\/20/g, to: 'border-zinc-200 dark:border-zinc-700' },
  { from: /border-indigo-500\/30/g, to: 'border-zinc-300 dark:border-zinc-600' },
  { from: /border-indigo-100/g, to: 'border-zinc-200 dark:border-zinc-700' },
  { from: /border-indigo-200/g, to: 'border-zinc-300 dark:border-zinc-600' },
  { from: /border-indigo-500/g, to: 'border-zinc-900 dark:border-white' },
  { from: /border-indigo-300/g, to: 'border-zinc-400 dark:border-zinc-500' },
];

// Special cases: if bg-indigo-500 already adds text-white dark:text-zinc-900, we need to clean up dupes.

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  replacements.forEach(r => {
    // skip the general text-white rule since I removed it from the array above
    if (r.from.source === 'text-white') return; 
    newContent = newContent.replace(r.from, r.to);
  });
  
  // Clean up duplicate text-whites created by the bg-indigo-500 replacement
  newContent = newContent.replace(/text-white text-white dark:text-zinc-900/g, 'text-white dark:text-zinc-900');
  newContent = newContent.replace(/text-white dark:text-zinc-900 text-white dark:text-zinc-900/g, 'text-white dark:text-zinc-900');
  newContent = newContent.replace(/text-zinc-900 dark:text-white text-white dark:text-zinc-900/g, 'text-white dark:text-zinc-900'); // if text-indigo-500 and bg-indigo-500 were on same element

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
