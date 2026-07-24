// SERVER ONLY — do not import this from any component, only from pages/api routes.
const fs = require('fs');
const path = require('path');

const FILES = ['about.md', 'projects.md', 'skills.md', 'contact.md'];

module.exports = function loadDocuments() {
  return FILES.map((f) => {
    const content = fs.readFileSync(path.join(process.cwd(), 'data', f), 'utf8');
    const label = f.replace('.md', '').toUpperCase();
    return `--- ${label} ---\n${content}`;
  }).join('\n\n');
};
