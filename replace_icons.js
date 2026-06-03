const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const pattern = /<a href="#">Instagram<\/a>\s*<a href="#">TikTok<\/a>\s*<a href="#">LinkedIn<\/a>/g;
const replacement = `<div class="ft-social-icons">
  <a href="#" aria-label="Instagram">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  </a>
  <a href="#" aria-label="TikTok">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path><path d="M15 8a4 4 0 1 0 0 8"></path></svg>
  </a>
  <a href="#" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  </a>
</div>`;

for (let file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Updated " + file);
    }
}
