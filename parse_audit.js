const fs = require('fs');
const content = fs.readFileSync('word/document.xml', 'utf8');

const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
const tRegex = /<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g;

let match;
const paragraphs = [];
while ((match = pRegex.exec(content)) !== null) {
  const pContent = match[1];
  let tMatch;
  let pText = '';
  // Reset regex index for safety
  tRegex.lastIndex = 0;
  while ((tMatch = tRegex.exec(pContent)) !== null) {
    pText += tMatch[1];
  }
  paragraphs.push(pText);
}

fs.writeFileSync('audit_content.txt', paragraphs.join('\n'));
console.log('Done, extracted ' + paragraphs.length + ' paragraphs.');
