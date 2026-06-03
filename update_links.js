const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'work.html', 'contact.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace footer social links
  content = content.replace(/href="#" aria-label="Instagram"/g, 'href="https://www.instagram.com/unsocials.th/" target="_blank" aria-label="Instagram"');
  content = content.replace(/href="#" aria-label="TikTok"/g, 'href="https://www.tiktok.com/@unsocials.th" target="_blank" aria-label="TikTok"');
  content = content.replace(/href="#" aria-label="LinkedIn"/g, 'href="https://www.linkedin.com/company/unsocials" target="_blank" aria-label="LinkedIn"');

  // Special fixes for contact.html
  if (file === 'contact.html') {
    content = content.replace(/<a class="cc-channel rv" href="#" style="transition-delay:\.05s">/g, '<a class="cc-channel rv" href="https://www.instagram.com/unsocials.th/" target="_blank" style="transition-delay:.05s">');
    content = content.replace(/<a class="cc-channel rv" href="#" style="transition-delay:\.1s">/g, '<a class="cc-channel rv" href="https://www.tiktok.com/@unsocials.th" target="_blank" style="transition-delay:.1s">');
    content = content.replace(/<a class="cc-channel rv" href="#" style="transition-delay:\.15s">/g, '<a class="cc-channel rv" href="https://www.linkedin.com/company/unsocials" target="_blank" style="transition-delay:.15s">');
    content = content.replace(/href="https:\/\/wa\.me\/918209980262"/g, 'href="https://wa.me/66960531394" target="_blank"');
    content = content.replace(/\+91 820-9980262/g, '+66 9605 31394');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated links in ${file}`);
});
