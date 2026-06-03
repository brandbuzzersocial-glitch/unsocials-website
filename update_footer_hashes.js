const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'work.html', 'contact.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/href="work\.html">Elysium Pattaya<\/a>/g, 'href="work.html#elysium">Elysium Pattaya</a>');
  content = content.replace(/href="work\.html">Alexa Beach Club<\/a>/g, 'href="work.html#alexa">Alexa Beach Club</a>');
  content = content.replace(/href="work\.html">Hotel Skyview<\/a>/g, 'href="work.html#skyview">Hotel Skyview</a>');
  content = content.replace(/href="work\.html">Nomads Asia<\/a>/g, 'href="work.html#nomads">Nomads Asia</a>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated footer hashes in ${file}`);
});
