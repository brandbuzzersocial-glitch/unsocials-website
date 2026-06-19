const fs = require('fs');
let html = fs.readFileSync('C:\\UNSOCIALS\\index.html', 'utf8');

html = html.replace(
  /<div style="width:100%; max-width:800px; height:80vh; max-height:800px; position:relative; overflow:hidden; border-top-left-radius:24px; border-bottom-left-radius:24px; background:#060606;">/,
  '<div class="flush-vid-container">'
);

fs.writeFileSync('C:\\UNSOCIALS\\index.html', html);

let css = fs.readFileSync('C:\\UNSOCIALS\\style.css', 'utf8');
css += `
.flush-vid-container {
  width:100%;
  max-width:800px;
  height:80svh;
  max-height:800px;
  position:relative;
  overflow:hidden;
  border-radius: 24px 0 0 24px;
  background:#060606;
}
@media(max-width:900px) {
  .flush-vid-container {
    border-radius: 24px;
    height: 50svh;
  }
}
`;
fs.writeFileSync('C:\\UNSOCIALS\\style.css', css);
console.log('Fixed mobile video border radius');
