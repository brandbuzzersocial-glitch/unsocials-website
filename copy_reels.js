const fs = require('fs');
const path = require('path');

const reelsDir = 'c:\\UNSOCIALS\\assets\\reels';
if (!fs.existsSync(reelsDir)){
    fs.mkdirSync(reelsDir, { recursive: true });
}

const map = [
  ['c:\\UNSOCIALS\\assets\\clients\\Elysium Pattaya\\SnapInsta.to_AQMnmQM0j-wBLK_OoRF0NBdD1LJT4-xvn54jW6kdn4h1G0Dpj5HMMjC1pEQqraNY2f9mnJr_L9kJL2mX5XzNDGSKMP2YU-pPjhZ-_Ao.mp4', 'r1.mp4'],
  ['c:\\UNSOCIALS\\assets\\clients\\Alexa beach club\\Alexa beach club digital marketing thailand.mp4', 'r2.mp4'],
  ['c:\\UNSOCIALS\\assets\\clients\\ Nomads Hostel\\SnapInsta.to_AQNePKW00w4Ocac0GF-b05fZ_0xkl2p_xjHtB1q-JYw38TY2OLaCbGFYt5JrXY7UzI4HSk8J_xKtUTdgEXbo8xfH.mp4', 'r3.mp4'],
  ['c:\\UNSOCIALS\\assets\\clients\\Bamboo Beach club\\SnapInsta.to_AQNTn-uvKZej7sVg-vId4JnjuzGq2VW4V6uKvWmA_DHF28zcj9JGThpC796aFErj8vW5KdIfWXQBnlPDnbuXtF8T.mp4', 'r4.mp4']
];

for(let [src, destName] of map) {
   let dest = path.join(reelsDir, destName);
   try {
     fs.copyFileSync(src, dest);
     console.log('Copied to ' + destName);
   } catch(e) {
     console.error('Failed to copy', src, e);
   }
}
