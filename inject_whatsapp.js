const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'work.html', 'contact.html'];
const waButton = `
<!-- WhatsApp Floating Button -->
<a href="https://wa.me/66613195339?text=Hi!%20I%20would%20like%20to%20start%20a%20conversation." class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.244 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-16.793c-.166-.369-.342-.377-.502-.384-.131-.005-.28-.006-.43-.006-.15 0-.395.056-.602.28-.206.225-.79.771-.79 1.882 0 1.111.808 2.185.92 2.335.113.15 1.59 2.429 3.853 3.407.538.233.957.372 1.285.477.54.172 1.03.148 1.417.09.431-.064 1.328-.542 1.516-1.064.188-.522.188-.97.132-1.064-.056-.094-.207-.15-.433-.263s-1.329-.655-1.536-.73c-.207-.075-.358-.112-.507.113-.15.225-.583.73-.715.88-.132.15-.264.169-.49.056-.226-.113-.956-.352-1.82-1.123-.673-.6-1.127-1.341-1.26-1.566-.131-.225-.014-.347.1-.459.102-.101.226-.263.339-.395.113-.131.15-.225.226-.375.075-.15.038-.281-.019-.394-.056-.113-.502-1.21-.688-1.657z"/></svg>
</a>
</body>`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('whatsapp-float')) {
    console.log(`WhatsApp button already present in ${file}`);
    return;
  }

  content = content.replace(/<\/body>/g, waButton);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected WhatsApp button in ${file}`);
});
