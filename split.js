const fs = require('fs');

const path = 'C:\\Users\\korja\\Downloads\\unsocials.html';
const htmlContent = fs.readFileSync(path, 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/i;
const scriptRegex = /<script>([\s\S]*?)<\/script>/i;

const styleMatch = htmlContent.match(styleRegex);
const scriptMatch = htmlContent.match(scriptRegex);

let newHtml = htmlContent;

if (styleMatch) {
  fs.writeFileSync('style.css', styleMatch[1].trim());
  newHtml = newHtml.replace(styleMatch[0], '<link rel="stylesheet" href="style.css">');
}

if (scriptMatch) {
  fs.writeFileSync('script.js', scriptMatch[1].trim());
  newHtml = newHtml.replace(scriptMatch[0], '<script src="script.js"></script>');
}

fs.writeFileSync('index.html', newHtml);
console.log('Successfully split the file into index.html, style.css, and script.js');
