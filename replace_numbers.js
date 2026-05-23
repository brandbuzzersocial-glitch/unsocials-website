const fs = require('fs');
const path = require('path');

const files = ['index.html', 'work.html', 'services.html', 'about.html', 'contact.html'];
const waNum = '66960531394';
const waFormatted = '+66 9605 31394';
const callNum = '+66960531394';
const callFormatted = '+66 960531394';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace footer numbers
  content = content.replace(/<a href="https:\/\/wa\.me\/918209980262" target="_blank">WhatsApp: \+91 820-9980262<\/a>/g, `<a href="https://wa.me/${waNum}" target="_blank">WhatsApp: ${waFormatted}</a>`);
  content = content.replace(/<a href="tel:\+919829247707">Tel: \+91 9829247707<\/a>/g, `<a href="tel:${callNum}">Tel: ${callFormatted}</a>`);

  // Replace contact.html specific numbers
  content = content.replace(/<a href="tel:\+919829247707" style="color:inherit;text-decoration:none">\+91 9829247707<\/a>/g, `<a href="tel:${callNum}" style="color:inherit;text-decoration:none">${callFormatted}</a>`);

  // Nav CTA
  content = content.replace(/<a href="contact\.html" class="nbook">Book a Call<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20book%20a%20call." target="_blank" class="nbook">Book a Call</a>`);

  // Index CTA
  content = content.replace(/<a href="#cta-sec" class="cta-s">Book a Call<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20book%20a%20call." target="_blank" class="cta-s">Book a Call</a>`);
  content = content.replace(/<button class="cta-btn">Send it → <span style="font-size:16px">↗<\/span><\/button>/g, `<button class="cta-btn" onclick="window.open('https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20get%20started.', '_blank')">Send it → <span style="font-size:16px">↗</span></button>`);

  // Services CTAs
  content = content.replace(/<a href="contact\.html" class="svc-exp-cta">Start a Campaign →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20start%20a%20campaign." target="_blank" class="svc-exp-cta">Start a Campaign →</a>`);
  content = content.replace(/<a href="contact\.html" class="svc-exp-cta">Own Your Feed →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20own%20my%20feed." target="_blank" class="svc-exp-cta">Own Your Feed →</a>`);
  content = content.replace(/<a href="contact\.html" class="svc-exp-cta">Start a Production →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20start%20a%20production." target="_blank" class="svc-exp-cta">Start a Production →</a>`);
  content = content.replace(/<a href="contact\.html" class="svc-exp-cta">Enter the Future →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20enter%20the%20future%20with%20AI." target="_blank" class="svc-exp-cta">Enter the Future →</a>`);
  content = content.replace(/<a href="contact\.html" class="svc-exp-cta">Build Your Blueprint →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20build%20my%20brand%20blueprint." target="_blank" class="svc-exp-cta">Build Your Blueprint →</a>`);
  content = content.replace(/<a href="contact\.html" class="sbc-link">Book a Strategy Call →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20book%20a%20strategy%20call." target="_blank" class="sbc-link">Book a Strategy Call →</a>`);

  // About CTA
  content = content.replace(/<a href="contact\.html" class="acb-link">Start a Conversation →<\/a>/g, `<a href="https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20start%20a%20conversation." target="_blank" class="acb-link">Start a Conversation →</a>`);

  // Contact CTA button
  content = content.replace(/<button class="cta-btn" type="submit">Send it → <span style="font-size:16px">↗<\/span><\/button>/g, `<button class="cta-btn" type="button" onclick="window.open('https://wa.me/${waNum}?text=Hi!%20I%20would%20like%20to%20get%20in%20touch.', '_blank')">Send it → <span style="font-size:16px">↗</span></button>`);

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
