const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'services.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Hero Subtitle
const oldHeroSub = `<p class="ph-sub" data-th="เก้าสาขาความเชี่ยวชาญ และความหลงใหลเป็นหนึ่งเดียว ทุกบริการของเราถูกออกแบบมาเพื่อทำให้แบรนด์ของคุณเป็นสิ่งที่หลีกเลี่ยงไม่ได้ — โดยไม่สำคัญว่าคุณจะอยู่ในอุตสาหกรรมใด ตลาดใด หรือเริ่มต้นจากจุดใด">Nine disciplines. One obsession. Every service we offer is engineered to make your brand completely inevitable - regardless of your industry, your market, or your starting point.</p>`;
const newHeroSub = `<p class="ph-sub" data-th="เก้าสาขาความเชี่ยวชาญ และความหลงใหลเป็นหนึ่งเดียว ทุกบริการของเราถูกออกแบบมาเพื่อทำให้แบรนด์ของคุณเป็นสิ่งที่หลีกเลี่ยงไม่ได้ — โดยไม่สำคัญว่าคุณจะอยู่ในอุตสาหกรรมใด ตลาดใด หรือเริ่มต้นจากจุดใด">Nine disciplines. One obsession. Every service we offer is engineered to make your brand completely inevitable — regardless of your industry, your market, or your starting point.</p>`;
html = html.replace(oldHeroSub, newHeroSub);

// CARD 1 Performance Marketing
const oldCard1 = `  <!-- CARD 1 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การตลาดเชิง<br>ประสิทธิภาพ">Performance<br>Marketing</h2>
        <p class="svc-desc reveal-up" data-th="ไม่ว่าคุณจะเป็นร้านอาหารที่ต้องการให้คนเต็มโต๊ะทุกคืน บีชคลับที่ต้องการขายบัตรเข้างานจนหมด แบรนด์สินค้าที่ต้องการก้าวข้ามขีดจำกัดเดิม หรือธุรกิจบริการที่ต้องการหาลูกค้าคุณภาพสูง — เราสร้างโครงสร้างพื้นฐานแบบชำระเงินที่เปลี่ยนงบการตลาดของคุณให้เป็นรายได้ที่วัดผลได้และขยายขนาดได้<br><br>Google, Meta, TikTok ช่องทางการขายแบบ Click-to-Chat บน WhatsApp ที่มีอัตราการเปลี่ยนลูกค้าสูงกว่าหน้าแลนดิ้งเพจทั่วไปถึง 3 เท่า ระบบการจองตรงและการสร้างลูกค้ามุ่งหวังที่ขจัดคนกลางออกไปโดยสิ้นเชิง ทุกบาทถูกติดตาม ทุกแคมเปญสร้างขึ้นเพื่อขยายขนาด">We don't run ads. We build revenue systems. Whether you're a restaurant filling tables every night, a beach club selling out events, a product brand scaling past its ceiling, or a service business generating qualified leads - we build the paid infrastructure that turns your marketing budget into trackable, scalable revenue.<br><br>Google, Meta, TikTok. WhatsApp click-to-chat funnels that convert at 3x the rate of any landing page. Direct booking and lead generation systems that eliminate middlemen entirely. Every baht tracked. Every campaign built to scale.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ใดก็ตามที่ใช้จ่ายงบโฆษณาแต่ยังไม่เห็นผลตอบแทนที่ชัดเจนและวัดผลได้">Any brand spending money on ads that isn't seeing a return.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="โฆษณาการค้นหาและช็อปปิ้งของ Google">Google Search & Shopping Ads</li>
          <li data-th="แคมเปญโฆษณาเพื่อการเปลี่ยนลูกค้าบน Meta & TikTok">Meta & TikTok Conversion Campaigns</li>
          <li data-th="ระบบการสร้างลูกค้ามุ่งหวังผ่าน WhatsApp (Click-to-Chat)">WhatsApp Click-to-Chat Lead Generation</li>
          <li data-th="กลยุทธ์กรวยการขายตรง - ไม่มีคนกลาง">Direct Funnel Strategy - Zero Middlemen</li>
          <li data-th="การตั้งเป้าหมายใหม่และกลุ่มเป้าหมายที่คล้ายคลึงกัน">Retargeting & Lookalike Audiences</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">3x</div>
            <div class="svc-outcome-lbl" data-th="อัตราส่วน ROAS เฉลี่ยในแคมเปญที่ทำงานอยู่">Average ROAS across active campaigns</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">฿0</div>
            <div class="svc-outcome-lbl" data-th="งบประมาณที่สูญเปล่า - ทุกบาทถูกติดตาม">Wasted spend - every baht tracked</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Direct</div>
            <div class="svc-outcome-lbl" data-th="การจองและลีดติดต่อโดยตรง ไม่มีคนกลาง">Bookings & leads. No middlemen.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Scale</div>
            <div class="svc-outcome-lbl" data-th="เมื่อตัวเลขได้ผลลัพธ์ เราผลักดันต่อทันที">When the math works, we push harder</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Performance%20Marketing." target="_blank" class="svc-cta-btn reveal-up" data-th="เริ่มแคมเปญ →">Start a Campaign →</a>
      </div>`;

const newCard1 = `  <!-- CARD 1 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="01 · อสังหาริมทรัพย์ดิจิทัล">01  ·  DIGITAL REAL ESTATE</span>
        <h2 class="svc-title reveal-up" data-th="การตลาดเชิง<br>ประสิทธิภาพ">Performance Marketing</h2>
        <p class="svc-desc reveal-up" data-th="เราไม่ได้แค่รันแอด เราสร้างระบบรายได้<br><br>ไม่ว่าคุณจะเป็นร้านอาหารที่ต้องการคนเต็มโต๊ะทุกคืน บีชคลับที่ต้องการขายบัตรเข้างานจนหมด แบรนด์สินค้าที่ต้องการก้าวข้ามขีดจำกัดเดิม หรือธุรกิจบริการที่ต้องการหาลูกค้าคุณภาพสูง — เราสร้างโครงสร้างพื้นฐานแบบชำระเงินที่เปลี่ยนงบการตลาดของคุณให้เป็นรายได้ที่วัดผลได้และขยายขนาดได้<br><br>Google, Meta, TikTok ช่องทางการขายแบบ Click-to-Chat บน WhatsApp ที่มีอัตราการเปลี่ยนลูกค้าสูงกว่าหน้าแลนดิ้งเพจทั่วไปถึง 3 เท่า ระบบการจองตรงและการสร้างลูกค้ามุ่งหวังที่ขจัดคนกลางออกไปโดยสิ้นเชิง ทุกบาทถูกติดตาม ทุกแคมเปญสร้างขึ้นเพื่อขยายขนาด">We don't run ads. We build revenue systems.<br><br>Whether you're a restaurant filling tables every night, a beach club selling out events, a product brand scaling past its ceiling, or a service business generating qualified leads — we build the paid infrastructure that turns your marketing budget into trackable, scalable revenue.<br><br>Google, Meta, TikTok. WhatsApp click-to-chat funnels that convert at 3x the rate of any landing page. Direct booking and lead generation systems that eliminate middlemen entirely. Every baht tracked. Every campaign built to scale.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ใดก็ตามที่ใช้จ่ายงบโฆษณาแต่ยังไม่เห็นผลตอบแทนที่ชัดเจนและวัดผลได้">Any brand spending money on ads that isn't seeing a clear, trackable return.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="โฆษณาการค้นหาและช็อปปิ้งของ Google">Google Search & Shopping Ads</li>
          <li data-th="แคมเปญโฆษณาเพื่อการเปลี่ยนลูกค้าบน Meta & TikTok">Meta & TikTok Conversion Campaigns</li>
          <li data-th="ระบบการสร้างลูกค้ามุ่งหวังผ่าน WhatsApp (Click-to-Chat)">WhatsApp Click-to-Chat Lead Generation</li>
          <li data-th="กลยุทธ์กรวยการขายตรง — ไม่มีคนกลาง">Direct Funnel Strategy — Zero Middlemen</li>
          <li data-th="การตั้งเป้าหมายใหม่และกลุ่มเป้าหมายที่คล้ายคลึงกัน">Retargeting & Lookalike Audiences</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">3×</div>
            <div class="svc-outcome-lbl" data-th="อัตราส่วน ROAS เฉลี่ยในแคมเปญที่ทำงานอยู่">Average ROAS across active campaigns</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">฿0</div>
            <div class="svc-outcome-lbl" data-th="งบประมาณที่สูญเปล่า — ทุกบาทถูกติดตาม">Wasted spend — every baht tracked</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Direct</div>
            <div class="svc-outcome-lbl" data-th="การจองและลีดติดต่อโดยตรง ไม่มีคนกลาง">Bookings & leads. No middlemen.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Scale</div>
            <div class="svc-outcome-lbl" data-th="เมื่อตัวเลขได้ผลลัพธ์ เราผลักดันต่อทันที">When the math works, we push harder</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Performance%20Marketing." target="_blank" class="svc-cta-btn reveal-up" data-th="เริ่มแคมเปญ →">Start a Campaign →</a>
      </div>`;

html = html.replace(oldCard1, newCard1);


// CARD 2 Social Media Management
const oldCard2 = `  <!-- CARD 2 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การจัดการ<br>โซเชียลมีเดีย">Social Media<br>Management</h2>
        <p class="svc-desc reveal-up" data-th="ฟีดของคุณคือหน้าร้านที่มีค่าที่สุดของคุณ แบรนด์ส่วนใหญ่ปล่อยทิ้งไว้โดยไม่มีใครดูแล เรารับผิดชอบการดูแลโซเชียลของคุณอย่างเต็มรูปแบบ — ทั้งกลยุทธ์ ปฏิทินเนื้อหา การดำเนินงานรายวัน การจัดการคอมมูนิตี้ และการเติบโต ตั้งแต่แบรนด์ไลฟ์สไตล์ บีชคลับ ไปจนถึงสินค้าหรูหรา ร้านอาหาร F&B และธุรกิจอีคอมเมิร์ซ เราเปลี่ยนช่องทางที่เงียบเหงาให้เป็นเครื่องมือขายและสร้างแบรนด์ที่ทรงพลังที่สุดที่คุณมี<br><br>เราไม่ได้โพสต์ไปวันๆ ทุกชิ้นงานมีเป้าหมาย ทุกสัปดาห์สร้างขึ้นเพื่อหนุนเนื่องสัปดาห์ก่อนหน้า ทุกเดือนตัวเลขจะต้องเติบโตขึ้น">Your feed is your most valuable storefront. Most brands leave it unmanned. We take complete ownership of your social presence - strategy, content calendar, daily execution, community management, growth. From lifestyle brands and beach clubs to luxury goods, F&B concepts and e-commerce businesses, we turn dormant channels into the most powerful sales and brand-building tool your business has.<br><br>We don't post for the sake of posting. Every piece of content has a purpose. Every week builds on the last. Every month the numbers go up.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่รู้ว่าโซเชีลมีเดียควรทำงานได้ดีกว่านี้ — และต้องการให้ใครสักคนเข้ามาดูแลอย่างเบ็ดเสร็จ">Brands that know their social media should be working harder - and want someone to own it completely.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="น้ำเสียงของแบรนด์และกลยุทธ์การจัดกริดฟีด">Brand Voice & Grid Strategy</li>
          <li data-th="จัดการเนื้อหาและโพสต์รายวัน">Daily Content Execution</li>
          <li data-th="การเติบโตของคอมมูนิตี้และการมีส่วนร่วม">Community Growth & Engagement</li>
          <li data-th="ตารางการโพสต์ที่ปรับให้เข้ากับอัลกอริทึม">Algorithm-Optimised Posting Schedules</li>
          <li data-th="รายงานผลและการทบทวนกลยุทธ์รายเดือน">Monthly Analytics & Strategy Reviews</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Daily</div>
            <div class="svc-outcome-lbl" data-th="โพสต์เนื้อหาหรูหราที่ตรงกับภาพลักษณ์แบรนด์สม่ำเสมอ">Consistent high-end brand-aligned posts</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">10x</div>
            <div class="svc-outcome-lbl" data-th="อัตราการเติบโตของเอนเกจเมนต์ออร์แกนิกเฉลี่ย">Average increase in organic engagement</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">24/7</div>
            <div class="svc-outcome-lbl" data-th="การจัดการคอมมูนิตี้และดูแลลูกค้าเป้าหมาย">Community management & lead nurturing</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Owned</div>
            <div class="svc-outcome-lbl" data-th="สร้างฐานผู้ฟังที่คุณเป็นเจ้าของเอง ไม่เช่าโฆษณา">An audience you own, not renting from ads</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Social%20Media%20Management." target="_blank" class="svc-cta-btn reveal-up" data-th="เป็นเจ้าของฟีดของคุณ →">Own Your Feed →</a>
      </div>`;

const newCard2 = `  <!-- CARD 2 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="02 · อัตลักษณ์ดิจิทัล">02  ·  DIGITAL IDENTITY</span>
        <h2 class="svc-title reveal-up" data-th="การจัดการ<br>โซเชียลมีเดีย">Social Media Management</h2>
        <p class="svc-desc reveal-up" data-th="ฟีดของคุณคือหน้าร้านที่มีค่าที่สุดของคุณ แบรนด์ส่วนใหญ่ปล่อยทิ้งไว้โดยไม่มีใครดูแล<br><br>เรารับผิดชอบการดูแลโซเชียลของคุณอย่างเต็มรูปแบบ — ทั้งกลยุทธ์ ปฏิทินเนื้อหา การดำเนินงานรายวัน การจัดการคอมมูนิตี้ และการเติบโต ตั้งแต่แบรนด์ไลฟ์สไตล์ บีชคลับ ไปจนถึงสินค้าหรูหรา ร้านอาหาร F&B และธุรกิจอีคอมเมิร์ซ เราเปลี่ยนช่องทางที่เงียบเหงาให้เป็นเครื่องมือขายและสร้างแบรนด์ที่ทรงพลังที่สุดที่คุณมี<br><br>เราไม่ได้โพสต์ไปวันๆ ทุกชิ้นงานมีเป้าหมาย ทุกสัปดาห์สร้างขึ้นเพื่อหนุนเนื่องสัปดาห์ก่อนหน้า ทุกเดือนตัวเลขจะต้องเติบโตขึ้น">Your feed is your most valuable storefront. Most brands leave it unmanned.<br><br>We take complete ownership of your social presence — strategy, content calendar, daily execution, community management, growth. From lifestyle brands and beach clubs to luxury goods, F&B concepts and e-commerce businesses, we turn dormant channels into the most powerful sales and brand-building tool your business has.<br><br>We don't post for the sake of posting. Every piece of content has a purpose. Every week builds on the last. Every month the numbers go up.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่รู้ว่าโซเชียลมีเดียควรทำงานได้ดีกว่านี้ — และต้องการให้ใครสักคนเข้ามาดูแลอย่างเบ็ดเสร็จ">Brands that know their social media should be working harder — and want someone to own it completely.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="น้ำเสียงของแบรนด์และกลยุทธ์การจัดกริดฟีด">Brand Voice & Grid Strategy</li>
          <li data-th="จัดการเนื้อหาและโพสต์รายวัน">Daily Content Execution</li>
          <li data-th="การเติบโตของคอมมูนิตี้และการมีส่วนร่วม">Community Growth & Engagement</li>
          <li data-th="ตารางการโพสต์ที่ปรับให้เข้ากับอัลกอริทึม">Algorithm-Optimised Posting Schedules</li>
          <li data-th="รายงานผลและการทบทวนกลยุทธ์รายเดือน">Monthly Analytics & Strategy Reviews</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Daily</div>
            <div class="svc-outcome-lbl" data-th="โพสต์เนื้อหาหรูหราที่ตรงกับภาพลักษณ์แบรนด์สม่ำเสมอ">Consistent high-end brand-aligned posts</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">2×</div>
            <div class="svc-outcome-lbl" data-th="อัตราการเติบโตของเอนเกจเมนต์ออร์แกนิกเฉลี่ย">Average increase in organic engagement</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">24/7</div>
            <div class="svc-outcome-lbl" data-th="การจัดการคอมมูนิตี้และดูแลลูกค้าเป้าหมาย">Community management & lead nurturing</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Owned</div>
            <div class="svc-outcome-lbl" data-th="สร้างฐานผู้ฟังที่คุณเป็นเจ้าของเอง ไม่เช่าโฆษณา">An audience you own, not renting from ads</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Social%20Media%20Management." target="_blank" class="svc-cta-btn reveal-up" data-th="เป็นเจ้าของฟีดของคุณ →">Own Your Feed →</a>
      </div>`;

html = html.replace(oldCard2, newCard2);


// CARD 3 Content Production
const oldCard3 = `  <!-- CARD 3 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การผลิต<br>คอนเทนต์">Content<br>Production</h2>
        <p class="svc-desc reveal-up" data-th="ถ่ายทำเพื่อการเปลี่ยนลูกค้า ทุกเฟรมถูกวิเคราะห์ย้อนกลับเพื่อกระตุ้นให้เกิดการตัดสินใจ เราผลิตเนื้อหาภาพและวิดีโอที่แบรนด์ของคุณต้องการเพื่อครอบงำหน้าฟีด — วิดีโอสั้น (Reels) ที่ทรงพลัง วิดีโอสั้นเน้นส่วนดึงดูด (Hook) ภาพถ่ายไลฟ์สไตล์และภาพถ่ายแฟชั่นคอนเซปต์ UGC การรายงานบรรยากาศงานอีเวนต์ และภาพที่ปรับแต่งด้วย AI สำหรับร้านอาหาร คลับ แบรนด์สินค้า งานอีเวนต์ ธุรกิจไลฟ์สไตล์ และอื่นๆ<br><br>คอนเทนต์ไม่ใช่ของประดับตกแต่ง แต่มันคือพนักงานขายที่ขยายขนาดได้มากที่สุดของคุณ — ทำงานตลอด 24 ชั่วโมงเพื่อหาลูกค้าใหม่ให้คุณในขณะที่คุณนอนหลับ">Shoot to convert. Every frame reverse-engineered to drive action. We produce the visual content your brand needs to dominate feeds - high-energy reels, hook-led short form, lifestyle and editorial photography, UGC, event coverage, AI-enhanced visuals. For restaurants, clubs, product brands, events, lifestyle businesses and everything in between.<br><br>Content is not decoration. It is your most scalable salesperson - working 24 hours a day, finding your next customer while you sleep.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่ต้องการคอนเทนต์คุณภาพสูงอย่างต่อเนื่องโดยไม่ต้องสร้างทีมงานในองค์กรเอง">Brands that need a constant stream of high-quality content without building an in-house team.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="คลิปวิดีโอสั้น (Reels) ทรงพลังที่มีช่วงดึงดูดชัดเจน">High-Energy & Hook-Led Reels</li>
          <li data-th="วิดีโอสั้นสำหรับ Instagram, TikTok, YouTube Shorts">Short-Form Video - Instagram, TikTok, YouTube Shorts</li>
          <li data-th="การถ่ายภาพไลฟ์สไตล์และทิศทางแฟชั่น (Editorial)">Lifestyle & Editorial Photography</li>
          <li data-th="คอนเทนต์สไตล์ UGC จากครีเอเตอร์ที่น่าเชื่อถือ">UGC & Authentic Creator Content</li>
          <li data-th="การรายงานบรรยากาศงานและอีเวนต์สด">Event & Live Coverage</li>
          <li data-th="การทดสอบรูปแบบวิดีโอ (Format Testing)">Trial Reels & Format Testing</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">4K</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพระดับภาพยนตร์สำหรับทุกผลงาน">Cinema-grade quality for all assets</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Reach</div>
            <div class="svc-outcome-lbl" data-th="รูปแบบที่ออกแบบมาเพื่อดึงดูดอัลกอริทึม">Format-engineered for the algorithm</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="การผลิตและส่งมอบอย่างรวดเร็ว สอดรับกับเทรนด์">Rapid turnaround, culturally relevant</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Scale</div>
            <div class="svc-outcome-lbl" data-th="คลังคอนเทนต์ขนาดใหญ่จากการถ่ายทำครั้งเดียว">Vast content libraries from single shoots</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Content%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="เริ่มการผลิต →">Start Production →</a>
      </div>`;

const newCard3 = `  <!-- CARD 3 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="03 · ครอบครองทางสายตา">03  ·  VISUAL DOMINATION</span>
        <h2 class="svc-title reveal-up" data-th="การผลิต<br>คอนเทนต์">Content Production</h2>
        <p class="svc-desc reveal-up" data-th="ถ่ายทำเพื่อการเปลี่ยนลูกค้า ทุกเฟรมถูกวิเคราะห์ย้อนกลับเพื่อกระตุ้นให้เกิดการตัดสินใจ<br><br>เราผลิตเนื้อหาภาพและวิดีโอที่แบรนด์ของคุณต้องการเพื่อครอบงำหน้าฟีด — วิดีโอสั้น (Reels) ที่ทรงพลัง วิดีโอสั้นเน้นส่วนดึงดูด (Hook) ภาพถ่ายไลฟ์สไตล์และภาพถ่ายแฟชั่นคอนเซปต์ UGC การรายงานบรรยากาศงานอีเวนต์ และภาพที่ปรับแต่งด้วย AI สำหรับร้านอาหาร คลับ แบรนด์สินค้า งานอีเวนต์ ธุรกิจไลฟ์สไตล์ และอื่นๆ<br><br>คอนเทนต์ไม่ใช่ของประดับตกแต่ง แต่มันคือพนักงานขายที่ขยายขนาดได้มากที่สุดของคุณ — ทำงานตลอด 24 ชั่วโมงเพื่อหาลูกค้าใหม่ให้คุณในขณะที่คุณนอนหลับ">Shoot to convert. Every frame reverse-engineered to drive action.<br><br>We produce the visual content your brand needs to dominate feeds — high-energy reels, hook-led short form, lifestyle and editorial photography, UGC, event coverage, AI-enhanced visuals. For restaurants, clubs, product brands, events, lifestyle businesses and everything in between.<br><br>Content is not decoration. It is your most scalable salesperson — working 24 hours a day, finding your next customer while you sleep.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่ต้องการคอนเทนต์คุณภาพสูงอย่างต่อเนื่องโดยไม่ต้องสร้างทีมงานในองค์กรเอง">Brands that need a constant stream of high-quality content without building an in-house team.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="คลิปวิดีโอสั้น (Reels) ทรงพลังที่มีช่วงดึงดูดชัดเจน">High-Energy & Hook-Led Reels</li>
          <li data-th="วิดีโอสั้นสำหรับ Instagram, TikTok, YouTube Shorts">Short-Form Video — Instagram, TikTok, YouTube Shorts</li>
          <li data-th="การถ่ายภาพไลฟ์สไตล์และทิศทางแฟชั่น (Editorial)">Lifestyle & Editorial Photography</li>
          <li data-th="คอนเทนต์สไตล์ UGC จากครีเอเตอร์ที่น่าเชื่อถือ">UGC & Authentic Creator Content</li>
          <li data-th="การรายงานบรรยากาศงานและอีเวนต์สด">Event & Live Coverage</li>
          <li data-th="การทดสอบรูปแบบวิดีโอ (Format Testing)">Trial Reels & Format Testing</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">4K</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพระดับภาพยนตร์สำหรับทุกผลงาน">Cinema-grade quality for all assets</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Reach</div>
            <div class="svc-outcome-lbl" data-th="รูปแบบที่ออกแบบมาเพื่อดึงดูดอัลกอริทึม">Format-engineered for the algorithm</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="การผลิตและส่งมอบอย่างรวดเร็ว สอดรับกับเทรนด์">Rapid turnaround, culturally relevant</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Scale</div>
            <div class="svc-outcome-lbl" data-th="คลังคอนเทนต์ขนาดใหญ่จากการถ่ายทำครั้งเดียว">Vast content libraries from single shoots</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Content%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="เริ่มการผลิต →">Start Production →</a>
      </div>`;

html = html.replace(oldCard3, newCard3);


// CARD 4 AI Creative Automation
const oldCard4 = `  <!-- CARD 4 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="AI ครีเอทีฟ<br>อัตโนมัติ">AI Creative<br>Automation</h2>
        <p class="svc-desc reveal-up" data-th="ในขณะที่คู่แข่งต้องรอถ่ายทำเป็นสัปดาห์ — เราสร้างความสมบูรณ์แบบได้ในระดับชั่วโมง เราใช้ AI ขั้นสูงเพื่อผลิตภาพสินค้าหรูหรา ตัวแทนแบรนด์เสมือนจริง กราฟิกแคมเปญ และเนื้อหาโซเชียลในระดับไม่จำกัด — สำหรับทุกอุตสาหกรรม ทุกแบรนด์ ทุกโจทย์ แบรนด์สินค้า ไลฟ์สไตล์ อัญมณี แฟชั่น อีเวนต์ ร้านอาหารและเครื่องดื่ม หากต้องการให้ดูหรูหราพรีเมียม ครีเอทีฟ AI ทำได้เร็วกว่า ถูกกว่า และหลากหลายกว่าสายงานผลิตแบบดั้งเดิม<br><br>พบกับ Ava & Alex: ตัวแทนแบรนด์ AI ของเราที่ทำงานให้กับลูกค้าทั่วประเทศไทยแล้ววันนี้ ความได้เปรียบที่ไม่เป็นธรรมพร้อมให้คุณใช้งานแล้ว">While competitors wait weeks for a shoot day - we generate perfection in hours. We use advanced AI to produce luxury visual assets, brand representatives, campaign graphics and social content at infinite scale - for any industry, any brand, any brief. Product brands. Lifestyle. Gems. Fashion. Events. F&B. If it needs to look incredible, AI creative does it faster, cheaper and with more variation than any traditional production workflow.<br><br>Meet Ava & Alex: Our AI brand representatives already working for clients across Thailand. The unfair advantage is available right now.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ใดก็ตามที่ต้องการภาพระดับลักชัวรีโดยไม่ต้องใช้งบการผลิตหรือระยะเวลาแบบดั้งเดิม">Any brand that needs luxury-level visuals without luxury-level production budgets or timelines.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="ตัวแทนแบรนด์ AI - Ava & Alex">AI Brand Representatives - Ava & Alex</li>
          <li data-th="ภาพถ่ายไลฟ์สไตล์และสินค้าด้วย Generative AI">Generative Product & Lifestyle Photography</li>
          <li data-th="เนื้อหาโซเชียลปรับแต่งด้วย AI ในปริมาณมาก">AI-Enhanced Social Content at Scale</li>
          <li data-th="ภาพกราฟิก AI เชิงแนวคิดและศิลปะเชิงแฟชั่น">Conceptual & Editorial AI Graphics</li>
          <li data-th="กราฟิกโปรโมตอีเวนต์ - ไม่มีงานออกแบบช้า">Event Promotion Graphics - Zero Design Bottleneck</li>
          <li data-th="การพัฒนาโมเดล AI ลิขสิทธิ์เฉพาะสำหรับแบรนด์">Custom AI Model Development</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Zero</div>
            <div class="svc-outcome-lbl" data-th="ไม่จำเป็นต้องใช้ทีมงาน ฉาก หรือนักแสดงจริง">Need for crews, sets or traditional talent</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">100%</div>
            <div class="svc-outcome-lbl" data-th="ความเป็นเจ้าของและการควบคุมรายละเอียดทุกจุด">Ownership and control over every detail</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Days</div>
            <div class="svc-outcome-lbl" data-th="ไม่ใช่สัปดาห์ แคมเปญพร้อมเปิดตัวได้ทันที">Not weeks. Campaigns delivered instantly.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">8</div>
            <div class="svc-outcome-lbl" data-th="รูปแบบ มุมมอง และแนวคิดตามต้องการ">Variations, angles and concepts on demand</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20AI%20Creative%20Automation." target="_blank" class="svc-cta-btn reveal-up" data-th="ก้าวสู่อนาคต →">Enter the Future →</a>
      </div>`;

const newCard4 = `  <!-- CARD 4 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="04 · อนาคตอยู่ที่นี่แล้ว">04  ·  THE FUTURE IS HERE</span>
        <h2 class="svc-title reveal-up" data-th="ครีเอทีฟอัตโนมัติ<br>ด้วย AI">AI Creative Automation</h2>
        <p class="svc-desc reveal-up" data-th="ในขณะที่คู่แข่งต้องรอถ่ายทำเป็นสัปดาห์ — เราสร้างความสมบูรณ์แบบได้ในระดับชั่วโมง<br><br>เราใช้ AI ขั้นสูงเพื่อผลิตภาพสินค้าหรูหรา ตัวแทนแบรนด์เสมือนจริง กราฟิกแคมเปญ และเนื้อหาโซเชียลในระดับไม่จำกัด — สำหรับทุกอุตสาหกรรม ทุกแบรนด์ ทุกโจทย์ แบรนด์สินค้า ไลฟ์สไตล์ อัญมณี แฟชั่น อีเวนต์ ร้านอาหารและเครื่องดื่ม หากต้องการให้ดูหรูหราพรีเมียม ครีเอทีฟ AI ทำได้เร็วกว่า ถูกกว่า และหลากหลายกว่าสายงานผลิตแบบดั้งเดิม<br><br>พบกับ Ava & Alex: ตัวแทนแบรนด์ AI ของเราที่ทำงานให้กับลูกค้าทั่วประเทศไทยแล้ววันนี้ ความได้เปรียบที่ไม่เป็นธรรมพร้อมให้คุณใช้งานแล้ว">While competitors wait weeks for a shoot day — we generate perfection in hours.<br><br>We use advanced AI to produce luxury visual assets, brand representatives, campaign graphics and social content at infinite scale — for any industry, any brand, any brief. Product brands. Lifestyle. Gems. Fashion. Events. F&B. If it needs to look incredible, AI creative does it faster, cheaper and with more variation than any traditional production workflow.<br><br>Meet Ava & Alex: Our AI brand representatives already working for clients across Thailand. The unfair advantage is available right now.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ใดก็ตามที่ต้องการภาพระดับลักชัวรีโดยไม่ต้องใช้งบการผลิตหรือระยะเวลาแบบดั้งเดิม">Any brand that needs luxury-level visuals without luxury-level production budgets or timelines.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="ตัวแทนแบรนด์ AI - Ava & Alex">AI Brand Representatives — Ava & Alex</li>
          <li data-th="ภาพถ่ายไลฟ์สไตล์และสินค้าด้วย Generative AI">Generative Product & Lifestyle Photography</li>
          <li data-th="เนื้อหาโซเชียลปรับแต่งด้วย AI ในปริมาณมาก">AI-Enhanced Social Content at Scale</li>
          <li data-th="ภาพกราฟิก AI เชิงแนวคิดและศิลปะเชิงแฟชั่น">Conceptual & Editorial AI Graphics</li>
          <li data-th="กราฟิกโปรโมตอีเวนต์ - ไม่มีงานออกแบบช้า">Event Promotion Graphics — Zero Design Bottleneck</li>
          <li data-th="การพัฒนาโมเดล AI ลิขสิทธิ์เฉพาะสำหรับแบรนด์">Custom AI Model Development</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Zero</div>
            <div class="svc-outcome-lbl" data-th="ไม่จำเป็นต้องใช้ทีมงาน ฉาก หรือนักแสดงจริง">Need for crews, sets or traditional talent</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">100%</div>
            <div class="svc-outcome-lbl" data-th="ความเป็นเจ้าของและการควบคุมรายละเอียดทุกจุด">Ownership and control over every detail</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Days</div>
            <div class="svc-outcome-lbl" data-th="ไม่ใช่สัปดาห์ แคมเปญพร้อมเปิดตัวได้ทันที">Not weeks. Campaigns delivered instantly.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">∞</div>
            <div class="svc-outcome-lbl" data-th="รูปแบบ มุมมอง และแนวคิดตามต้องการ">Variations, angles and concepts on demand</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20AI%20Creative%20Automation." target="_blank" class="svc-cta-btn reveal-up" data-th="ก้าวสู่อนาคต →">Enter the Future →</a>
      </div>`;

html = html.replace(oldCard4, newCard4);


// CARD 5 Website Development
const oldCard5 = `  <!-- CARD 5 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การพัฒนา<br>เว็บไซต์">Website<br>Development</h2>
        <p class="svc-desc reveal-up" data-th="เว็บไซต์ของคุณคือสถานที่แห่งเดียวบนอินเทอร์เน็ตที่คุณเป็นเจ้าของอย่างเต็มตัว ทำให้มันคุ้มค่าที่สุด ทุกโฆษณาที่คุณรัน ทุกโพสต์ที่คุณทำ ทุกเนื้อหาที่คุณผลิต — ท้ายที่สุดแล้วทั้งหมดจะนำพามาที่นี่ หากสิ่งที่พวกเขาพบบนหน้าเว็บไม่สามารถเปลี่ยนเป็นยอดขายได้ ทุกสิ่งก่อนหน้านั้นย่อมสูญเปล่า<br><br>เราสร้างเว็บไซต์ที่ได้ผลจริง รวดเร็ว คมชัด หรูหราทางสายตา และออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้เป็นลูกค้า ไม่มีเทมเพลตทั่วไปที่ซ้ำซาก ไม่มีขั้นตอนของเอเจนซี่ที่เทอะทะ มีเพียงประสบการณ์ดิจิทัลที่สะอาดตาและมีเป้าหมาย ที่ดูดีสมกับที่แบรนด์ของคุณคู่ควร และทำงานได้ทรงประสิทธิภาพตามที่ธุรกิจของคุณต้องการ">Your website is the one place on the internet you fully own. Make it count. Every ad you run, every post you make, every piece of content you produce - it all eventually leads here. If what they find doesn't convert, everything before it was wasted.<br><br>We build websites that work. Fast, sharp, visually premium and engineered to turn visitors into customers. No generic templates. No bloated agency processes. Just clean, purposeful digital experiences that look as good as your brand deserves and perform as hard as your business demands.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่เปิดตัวเป็นครั้งแรก แบรนด์ที่เว็บไซต์ปัจจุบันไม่สะท้อนถึงสิ่งที่เป็นอยู่ และแบรนด์ที่อัตราการเปลี่ยนลูกค้าต่ำ">Brands launching for the first time, brands whose current site doesn't reflect who they've become, and brands whose website traffic converts at a rate that embarrasses them.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การออกแบบและพัฒนาเว็บไซต์โดยเน้นตัวตนของแบรนด์">Brand-Led Website Design & Development</li>
          <li data-th="หน้าแลนดิ้งเพจที่สร้างขึ้นเพื่อเพิ่มยอดการเปลี่ยนลูกค้า">Landing Pages Built to Convert</li>
          <li data-th="การเชื่อมต่อระบบอีคอมเมิร์ซและการจองห้องพัก/โต๊ะ">E-Commerce & Booking System Integration</li>
          <li data-th="การสร้างที่รองรับมือถือเป็นหลักและโหลดอย่างรวดเร็ว">Mobile-First, Speed-Optimised Builds</li>
          <li data-th="การวางรากฐาน SEO และโครงสร้างทางเทคนิค">SEO Foundation & Technical Setup</li>
          <li data-th="การดูแลรักษาและการอัปเดตอย่างต่อเนื่อง">Ongoing Maintenance & Updates</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="เวลาโหลดต่ำกว่า 3 วินาที เสมอ">Sub 3-second load times, always</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Sharp</div>
            <div class="svc-outcome-lbl" data-th="งานดีไซน์ที่ตรงกับความทะเยอทะยานของแบรนด์">Design that matches your brand ambition</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Built</div>
            <div class="svc-outcome-lbl" data-th="เพื่อเปลี่ยนเป็นยอดขาย ไม่ใช่แค่เพื่อความสวยงาม">To convert, not just to look good</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Yours</div>
            <div class="svc-outcome-lbl" data-th="ความเป็นเจ้าของอย่างเต็มรูปแบบ ไม่ขึ้นกับแพลตฟอร์มอื่น">Full ownership. No platform dependency.</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Website%20Development." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างเว็บของคุณ →">Build Your Site →</a>
      </div>`;

const newCard5 = `  <!-- CARD 5 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="05 · สำนักงานใหญ่ดิจิทัลของคุณ">05  ·  YOUR DIGITAL HEADQUARTERS</span>
        <h2 class="svc-title reveal-up" data-th="การพัฒนา<br>เว็บไซต์">Website Development</h2>
        <p class="svc-desc reveal-up" data-th="เว็บไซต์ของคุณคือสถานที่แห่งเดียวบนอินเทอร์เน็ตที่คุณเป็นเจ้าของอย่างเต็มตัว ทำให้มันคุ้มค่าที่สุด<br><br>ทุกโฆษณาที่คุณรัน ทุกโพสต์ที่คุณทำ ทุกเนื้อหาที่คุณผลิต — ท้ายที่สุดแล้วทั้งหมดจะนำพามาที่นี่ หากสิ่งที่พวกเขาพบบนหน้าเว็บไม่สามารถเปลี่ยนเป็นยอดขายได้ ทุกสิ่งก่อนหน้านั้นย่อมสูญเปล่า<br><br>เราสร้างเว็บไซต์ที่ได้ผลจริง รวดเร็ว คมชัด หรูหราทางสายตา และออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้เป็นลูกค้า ไม่มีเทมเพลตทั่วไปที่ซ้ำซาก ไม่มีขั้นตอนของเอเจนซี่ที่เทอะทะ มีเพียงประสบการณ์ดิจิทัลที่สะอาดตาและมีเป้าหมาย ที่ดูดีสมกับที่แบรนด์ของคุณคู่ควร และทำงานได้ทรงประสิทธิภาพตามที่ธุรกิจของคุณต้องการ">Your website is the one place on the internet you fully own. Make it count.<br><br>Every ad you run, every post you make, every piece of content you produce — it all eventually leads here. If what they find doesn't convert, everything before it was wasted.<br><br>We build websites that work. Fast, sharp, visually premium and engineered to turn visitors into customers. No generic templates. No bloated agency processes. Just clean, purposeful digital experiences that look as good as your brand deserves and perform as hard as your business demands.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่เปิดตัวเป็นครั้งแรก แบรนด์ที่เว็บไซต์ปัจจุบันไม่สะท้อนถึงสิ่งที่เป็นอยู่ และแบรนด์ที่อัตราการเปลี่ยนลูกค้าต่ำ">Brands launching for the first time, brands whose current site doesn't reflect who they've become, and brands whose website traffic converts at a rate that embarrasses them.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การออกแบบและพัฒนาเว็บไซต์โดยเน้นตัวตนของแบรนด์">Brand-Led Website Design & Development</li>
          <li data-th="หน้าแลนดิ้งเพจที่สร้างขึ้นเพื่อเพิ่มยอดการเปลี่ยนลูกค้า">Landing Pages Built to Convert</li>
          <li data-th="การเชื่อมต่อระบบอีคอมเมิร์ซและการจองห้องพัก/โต๊ะ">E-Commerce & Booking System Integration</li>
          <li data-th="การสร้างที่รองรับมือถือเป็นหลักและโหลดอย่างรวดเร็ว">Mobile-First, Speed-Optimised Builds</li>
          <li data-th="การวางรากฐาน SEO และโครงสร้างทางเทคนิค">SEO Foundation & Technical Setup</li>
          <li data-th="การดูแลรักษาและการอัปเดตอย่างต่อเนื่อง">Ongoing Maintenance & Updates</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="เวลาโหลดต่ำกว่า 3 วินาที เสมอ">Sub 3-second load times, always</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Sharp</div>
            <div class="svc-outcome-lbl" data-th="งานดีไซน์ที่ตรงกับความทะเยอทะยานของแบรนด์">Design that matches your brand ambition</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Built</div>
            <div class="svc-outcome-lbl" data-th="เพื่อเปลี่ยนเป็นยอดขาย ไม่ใช่แค่เพื่อความสวยงาม">To convert, not just to look good</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Yours</div>
            <div class="svc-outcome-lbl" data-th="ความเป็นเจ้าของอย่างเต็มรูปแบบ ไม่ขึ้นกับแพลตฟอร์มอื่น">Full ownership. No platform dependency.</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Website%20Development." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างเว็บของคุณ →">Build Your Site →</a>
      </div>`;

html = html.replace(oldCard5, newCard5);


// CARD 6 Brand Strategy
const oldCard6 = `  <!-- CARD 6 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="กลยุทธ์<br>แบรนด์">Brand<br>Strategy</h2>
        <p class="svc-desc reveal-up" data-th="ยุทธวิธีที่ปราศจากกลยุทธ์เป็นเพียงเสียงรบกวน แบรนด์ส่วนใหญ่กำลังสร้างเสียงรบกวนมากมาย เราสร้าง DNA ที่เป็นรากฐานของแบรนด์ของคุณ — ทั้งจุดยืน เรื่องราว และอัตลักษณ์ทางภาพ — เพื่อให้แน่ใจว่าทุกโฆษณาที่คุณรัน ทุกโพสต์ที่คุณเขียน ทุกคอนเทนต์ที่คุณสร้าง และทุกหน้าของเว็บไซต์ จะส่งผลกระทบอย่างแรงกล้าและมีความสม่ำเสมอ<br><br>เราทำงานร่วมกับธุรกิจบริการ ร้าน F&B แบรนด์ไลฟ์สไตล์ สินค้าลักชัวรี อีคอมเมิร์ซ และธุรกิจบริการต่างๆ เพราะบีชคลับในกระบี่ต้องการกลยุทธ์ที่แตกต่างจากแบรนด์อัญมณีในกรุงเทพฯ อย่างสิ้นเชิง — และเราเข้าใจความแตกต่างนั้นเป็นอย่างดี">Tactics without strategy is noise. Most brands are making a lot of noise. We build the foundational DNA of your brand - positioning, narrative, visual identity - so that every ad you run, every post you make, every piece of content you produce and every page of your website lands with force and consistency.<br><br>We work across hospitality, F&B, lifestyle, luxury goods, e-commerce and service businesses. Because a beach club in Krabi needs a completely different strategy than a gem brand in Bangkok - and we know the difference.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ใหม่ที่ต้องการเปิดตัวให้ถูกต้องในครั้งแรก และแบรนด์ปัจจุบันที่เติบโตเกินกว่าอัตลักษณ์เดิม">New brands that need to launch right the first time. Existing brands that have outgrown their identity.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การจัดวางตำแหน่งแบรนด์และการออกแบบหมวดหมู่ธุรกิจ">Brand Positioning & Category Design</li>
          <li data-th="น้ำเสียง เรื่องราว และกรอบข้อความการสื่อสาร">Voice, Narrative & Messaging Framework</li>
          <li data-th="ระบบอัตลักษณ์ทางภาพของแบรนด์ (Visual Identity)">Visual Identity Systems</li>
          <li data-th="การวิเคราะห์คู่แข่งและการหาช่องว่างทางการตลาด">Competitor Analysis & Market Gap Identification</li>
          <li data-th="กลยุทธ์การเปิดตัวสู่ตลาด">Go-to-Market Strategy</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">One</div>
            <div class="svc-outcome-lbl" data-th="น้ำเสียงที่เป็นหนึ่งเดียวในทุกช่องทางการสื่อสาร">Unified voice across every touchpoint</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Moat</div>
            <div class="svc-outcome-lbl" data-th="กำแพงทางจิตวิทยาที่คู่แข่งยากจะข้ามเข้ามาได้">Psychological barriers competitors can't cross</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Price</div>
            <div class="svc-outcome-lbl" data-th="การวางตำแหน่งที่ช่วยให้เรียกราคาในระดับพรีเมียม">Positioning that commands premium pricing</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Clarity</div>
            <div class="svc-outcome-lbl" data-th="ความสอดคล้องอย่างสมบูรณ์แบบในสิ่งที่คุณเป็น">Absolute alignment on who you are</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Brand%20Strategy." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างพิมพ์เขียว →">Build Blueprint →</a>
      </div>`;

const newCard6 = `  <!-- CARD 6 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="06 · พิมพ์เขียว">06  ·  THE BLUEPRINT</span>
        <h2 class="svc-title reveal-up" data-th="กลยุทธ์<br>แบรนด์">Brand Strategy</h2>
        <p class="svc-desc reveal-up" data-th="ยุทธวิธีที่ปราศจากกลยุทธ์เป็นเพียงเสียงรบกวน แบรนด์ส่วนใหญ่กำลังสร้างเสียงรบกวนมากมาย<br><br>เราสร้าง DNA ที่เป็นรากฐานของแบรนด์ของคุณ — ทั้งจุดยืน เรื่องราว และอัตลักษณ์ทางภาพ — เพื่อให้แน่ใจว่าทุกโฆษณาที่คุณรัน ทุกโพสต์ที่คุณเขียน ทุกคอนเทนต์ที่คุณสร้าง และทุกหน้าของเว็บไซต์ จะส่งผลกระทบอย่างแรงกล้าและมีความสม่ำเสมอ<br><br>เราทำงานร่วมกับธุรกิจบริการ ร้าน F&B แบรนด์ไลฟ์สไตล์ สินค้าลักชัวรี อีคอมเมิร์ซ และธุรกิจบริการต่างๆ เพราะบีชคลับในกระบี่ต้องการกลยุทธ์ที่แตกต่างจากแบรนด์อัญมณีในกรุงเทพฯ อย่างสิ้นเชิง — และเราเข้าใจความแตกต่างนั้นเป็นอย่างดี">Tactics without strategy is noise. Most brands are making a lot of noise.<br><br>We build the foundational DNA of your brand — positioning, narrative, visual identity — so that every ad you run, every post you make, every piece of content you produce and every page of your website lands with force and consistency.<br><br>We work across hospitality, F&B, lifestyle, luxury goods, e-commerce and service businesses. Because a beach club in Krabi needs a completely different strategy than a gem brand in Bangkok — and we know the difference.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ใหม่ที่ต้องการเปิดตัวให้ถูกต้องในครั้งแรก และแบรนด์ปัจจุบันที่เติบโตเกินกว่าอัตลักษณ์เดิม">New brands that need to launch right the first time. Existing brands that have outgrown their identity.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การจัดวางตำแหน่งแบรนด์และการออกแบบหมวดหมู่ธุรกิจ">Brand Positioning & Category Design</li>
          <li data-th="น้ำเสียง เรื่องราว และกรอบข้อความการสื่อสาร">Voice, Narrative & Messaging Framework</li>
          <li data-th="ระบบอัตลักษณ์ทางภาพของแบรนด์ (Visual Identity)">Visual Identity Systems</li>
          <li data-th="การวิเคราะห์คู่แข่งและการหาช่องว่างทางการตลาด">Competitor Analysis & Market Gap Identification</li>
          <li data-th="กลยุทธ์การเปิดตัวสู่ตลาด">Go-to-Market Strategy</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">One</div>
            <div class="svc-outcome-lbl" data-th="น้ำเสียงที่เป็นหนึ่งเดียวในทุกช่องทางการสื่อสาร">Unified voice across every touchpoint</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Moat</div>
            <div class="svc-outcome-lbl" data-th="กำแพงทางจิตวิทยาที่คู่แข่งยากจะข้ามเข้ามาได้">Psychological barriers competitors can't cross</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Price</div>
            <div class="svc-outcome-lbl" data-th="การวางตำแหน่งที่ช่วยให้เรียกราคาในระดับพรีเมียม">Positioning that commands premium pricing</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Clarity</div>
            <div class="svc-outcome-lbl" data-th="ความสอดคล้องอย่างสมบูรณ์แบบในสิ่งที่คุณเป็น">Absolute alignment on who you are</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Brand%20Strategy." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างพิมพ์เขียว →">Build Blueprint →</a>
      </div>`;

html = html.replace(oldCard6, newCard6);


// CARD 7 Brand Consultancy
const oldCard7 = `  <!-- CARD 7 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="ที่ปรึกษา<br>แบรนด์">Brand<br>Consultancy</h2>
        <p class="svc-desc reveal-up" data-th="บางครั้งคุณไม่ต้องการเอเจนซี่เพื่อมาบริหารจัดการทุกอย่าง แต่คุณต้องการคนที่บอกว่าควรทำอะไรเป็นลำดับถัดไป บริการที่ปรึกษาแบรนด์มอบโอกาสให้คุณเข้าถึงนักวางกลยุทธ์ระดับอาวุโสของเราโดยตรง — สำหรับธุรกิจที่ต้องการการนำทางจากผู้เชี่ยวชาญโดยไม่มีข้อผูกมัดแบบสัญญาเต็มรูปแบบ เพียงเซสชันเดียวก็สามารถประหยัดงบที่อาจสูญเปล่าไปได้หลายเดือน ความสัมพันธ์แบบที่ปรึกษารายเดือนสามารถปรับเปลี่ยนทิศทางทั้งหมดของแบรนด์คุณได้<br><br>ซื่อสัตย์ ตรงไปตรงมา ไม่มีเป้าหมายอื่นใดนอกจากความเติบโตของคุณ ไม่มีผู้ดูแลบัญชี (Account Manager) คอยคั่นกลาง ไม่มีเรื่องการเมืองในองค์กร มีเพียงผู้สร้างกลยุทธ์ที่สร้างผลลัพธ์จริง ที่จะมาบอกคุณถึงสิ่งที่พวกเขาเห็นและสิ่งที่ต้องเปลี่ยนอย่างตรงจุด">Sometimes you don't need an agency to run everything. You need someone who tells you exactly what to do next. Our Brand Consultancy service gives you direct access to our senior strategists - for businesses that want expert guidance without a full retainer. One session can save months of wasted budget. A monthly advisory relationship can reshape the entire trajectory of your brand.<br><br>Honest. Direct. No agenda except your growth. No account managers in the middle. No politics. Just the people who built the strategies that generated results - telling you exactly what they see and exactly what to change.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="ผู้ก่อตั้งและเจ้าของธุรกิจที่ต้องการมุมมองของผู้เชี่ยวชาญโดยไม่มีค่าจ้างรายเดือน และทีมการตลาดในองค์กร">Founders and business owners who want expert eyes on their brand without a full-service retainer. Also ideal for in-house marketing teams that need senior strategic direction.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การตรวจสอบแบรนด์และการตลาดแบบครั้งเดียว">One-Off Brand & Marketing Audits</li>
          <li data-th="การให้คำปรึกษาเชิงกลยุทธ์รายเดือนอย่างต่อเนื่อง">Ongoing Monthly Strategy Advisory</li>
          <li data-th="การชี้นำทิศทางโซเชียลมีเดียและทิศทางคอนเทนต์">Social Media & Content Direction</li>
          <li data-th="การทบทวนแคมเปญและการแนะนำการเพิ่มประสิทธิภาพ">Campaign Review & Optimisation Guidance</li>
          <li data-th="การฝึกอบรมทีมงานและการเพิ่มทักษะภายในองค์กร">Team Training & Internal Upskilling</li>
          <li data-th="การช่วยสนับสนุนข้อมูลและเนื้อหานำเสนอสำหรับผู้ร่วมทุน">Investor & Pitch Deck Narrative Support</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Honest</div>
            <div class="svc-outcome-lbl" data-th="ไม่มีเนื้อหาน้ำท่วมทุ่ง ไม่มีเรื่องซับซ้อน ตรงประเด็น">No fluff. No politics. Just what to change.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Senior</div>
            <div class="svc-outcome-lbl" data-th="การพูดคุยกับผู้เชี่ยวชาญอาวุโสโดยตรง">Direct access - not account managers</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Flex</div>
            <div class="svc-outcome-lbl" data-th="แบบครั้งเดียวหรือรายเดือนต่อเนื่อง — คุณเลือกได้">One session or ongoing - you decide</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="ความชัดเจนในระดับชั่วโมง ไม่ต้องรอนานหลายเดือน">Clarity in hours, not months</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Brand%20Consultancy." target="_blank" class="svc-cta-btn reveal-up" data-th="ขอคำปรึกษา →">Request Consultation →</a>
      </div>`;

const newCard7 = `  <!-- CARD 7 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="07 · มุมมองจากภายนอก">07  ·  THE OUTSIDE EYE</span>
        <h2 class="svc-title reveal-up" data-th="ที่ปรึกษา<br>แบรนด์">Brand Consultancy</h2>
        <p class="svc-desc reveal-up" data-th="บางครั้งคุณไม่ต้องการเอเจนซี่เพื่อมาบริหารจัดการทุกอย่าง แต่คุณต้องการคนที่บอกว่าควรทำอะไรเป็นลำดับถัดไป<br><br>บริการที่ปรึกษาแบรนด์มอบโอกาสให้คุณเข้าถึงนักวางกลยุทธ์ระดับอาวุโสของเราโดยตรง — สำหรับธุรกิจที่ต้องการการนำทางจากผู้เชี่ยวชาญโดยไม่มีข้อผูกมัดแบบสัญญาเต็มรูปแบบ เพียงเซสชันเดียวก็สามารถประหยัดงบที่อาจสูญเปล่าไปได้หลายเดือน ความสัมพันธ์แบบที่ปรึกษารายเดือนสามารถปรับเปลี่ยนทิศทางทั้งหมดของแบรนด์คุณได้<br><br>ซื่อสัตย์ ตรงไปตรงมา ไม่มีเป้าหมายอื่นใดนอกจากความเติบโตของคุณ ไม่มีผู้ดูแลบัญชี (Account Manager) คอยคั่นกลาง ไม่มีเรื่องการเมืองในองค์กร มีเพียงผู้สร้างกลยุทธ์ที่สร้างผลลัพธ์จริง ที่จะมาบอกคุณถึงสิ่งที่พวกเขาเห็นและสิ่งที่ต้องเปลี่ยนอย่างตรงจุด">Sometimes you don't need an agency to run everything. You need someone who tells you exactly what to do next.<br><br>Our Brand Consultancy service gives you direct access to our senior strategists — for businesses that want expert guidance without a full retainer. One session can save months of wasted budget. A monthly advisory relationship can reshape the entire trajectory of your brand.<br><br>Honest. Direct. No agenda except your growth. No account managers in the middle. No politics. Just the people who built the strategies that generated results — telling you exactly what they see and exactly what to change.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="ผู้ก่อตั้งและเจ้าของธุรกิจที่ต้องการมุมมองของผู้เชี่ยวชาญโดยไม่มีค่าจ้างรายเดือน และทีมการตลาดในองค์กร">Founders and business owners who want expert eyes on their brand without a full-service retainer. Also ideal for in-house marketing teams that need senior strategic direction.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การตรวจสอบแบรนด์และการตลาดแบบครั้งเดียว">One-Off Brand & Marketing Audits</li>
          <li data-th="การให้คำปรึกษาเชิงกลยุทธ์รายเดือนอย่างต่อเนื่อง">Ongoing Monthly Strategy Advisory</li>
          <li data-th="การชี้นำทิศทางโซเชียลมีเดียและทิศทางคอนเทนต์">Social Media & Content Direction</li>
          <li data-th="การทบทวนแคมเปญและการแนะนำการเพิ่มประสิทธิภาพ">Campaign Review & Optimisation Guidance</li>
          <li data-th="การฝึกอบรมทีมงานและการเพิ่มทักษะภายในองค์กร">Team Training & Internal Upskilling</li>
          <li data-th="การช่วยสนับสนุนข้อมูลและเนื้อหานำเสนอสำหรับผู้ร่วมทุน">Investor & Pitch Deck Narrative Support</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Honest</div>
            <div class="svc-outcome-lbl" data-th="ไม่มีเนื้อหาน้ำท่วมทุ่ง ไม่มีเรื่องซับซ้อน ตรงประเด็น">No fluff. No politics. Just what to change.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Senior</div>
            <div class="svc-outcome-lbl" data-th="การพูดคุยกับผู้เชี่ยวชาญอาวุโสโดยตรง">Direct access — not account managers</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Flexible</div>
            <div class="svc-outcome-lbl" data-th="แบบครั้งเดียวหรือรายเดือนต่อเนื่อง — คุณเลือกได้">One session or ongoing — you decide</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="ความชัดเจนในระดับชั่วโมง ไม่ต้องรอนานหลายเดือน">Clarity in hours, not months</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20Brand%20Consultancy." target="_blank" class="svc-cta-btn reveal-up" data-th="ขอคำปรึกษา →">Request Consultation →</a>
      </div>`;

html = html.replace(oldCard7, newCard7);


// CARD 8 CGI & 3D Production
const oldCard8 = `  <!-- CARD 8 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การผลิต<br>CGI และ 3D">CGI & 3D<br>Production</h2>
        <p class="svc-desc reveal-up" data-th="เมื่อความจริงยังไม่เพียงพอ — เราสร้างโลกใบใหม่ขึ้นมา สินค้าบางประเภทไม่สามารถถ่ายภาพได้ พื้นที่บางแห่งยังไม่มีอยู่จริง แนวคิดบางอย่างก็กว้างใหญ่เกินกว่าที่กล้องตัวหนึ่งจะบันทึกได้ งานสร้างสรรค์ CGI และ 3D มอบขีดความสามารถให้แบรนด์ของคุณในการแสดงสิ่งที่เป็นไปไม่ได้ — ด้วยความแม่นยำและเสมือนจริงในทุกระดับสเกล สำหรับทุกสื่อนำเสนอ<br><br>ตั้งแต่ภาพเรนเดอร์อสังหาริมทรัพย์ระดับหรูที่ช่วยขายโครงการได้ก่อนสร้างเสร็จ ไปจนถึงโมเดลภาพผลิตภัณฑ์แบบ 3 มิติที่กระตุ้นยอดขายอีคอมเมิร์ซอย่างไม่เคยมีมาก่อน ไปจนถึงสินทรัพย์ 3 มิติของแบรนด์ที่ใช้งานบนดิจิทัล โซเชียล และการออกอากาศ — เราสร้างภาพที่ไม่มีกล้องตัวใดสามารถเก็บรายละเอียดได้">When reality is not enough - we build worlds. Some products cannot be photographed. Some spaces do not exist yet. Some ideas are too big for a camera. CGI and 3D production gives your brand the ability to show the impossible - with photorealistic precision, at any scale, for any medium.<br><br>From luxury real estate renders that sell properties before they are built, to product visualisations that make e-commerce convert like never before, to 3D brand assets that live across digital, social and broadcast - we create the visuals that no camera can capture.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="ผู้พัฒนาอสังหาริมทรัพย์ แบรนด์สินค้า สินค้าลักชัวรี และแบรนด์ที่ต้องการนำเสนอสิ่งที่ไม่มีอยู่จริง">Real estate developers, product brands, luxury goods, architecture firms, and any brand that needs to show something that does not exist yet - or cannot be captured on a standard shoot.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การสร้างภาพโมเดลผลิตภัณฑ์และการเรนเดอร์เสมือนจริง">Photorealistic Product Visualisation & Rendering</li>
          <li data-th="ภาพเรนเดอร์ 3 มิติสำหรับสถาปัตยกรรมและอสังหาริมทรัพย์">Architectural & Real Estate 3D Renders</li>
          <li data-th="สินทรัพย์แบรนด์แบบ 3 มิติและภาพเคลื่อนไหว">3D Brand Assets & Motion Graphics</li>
          <li data-th="เนื้อหาโซเชียลมีเดียสไตล์ CGI">CGI Social Media Content</li>
          <li data-th="การทัวร์เสมือนจริงและสภาพแวดล้อม 3 มิติที่สมจริง">Virtual Tours & Immersive 3D Environments</li>
          <li data-th="แอนิเมชัน 3 มิติสำหรับสื่อดิจิทัลและสื่อออกอากาศ">3D Animation for Digital & Broadcast</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Real</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพภาพเสมือนจริงที่ไม่สามารถแยกจากการถ่ายรูปจริง">Photorealistic quality - indistinguishable from photography</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Any</div>
            <div class="svc-outcome-lbl" data-th="สเกลใดก็ได้ — ตั้งแต่ผลิตภัณฑ์ไปจนถึงสิ่งแวดล้อม">Scale - from hero product to full environment</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="การเรนเดอร์งานที่ส่งมอบได้เร็วกว่าการถ่ายทำจริง">Renders delivered faster than traditional shoot days</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Inf</div>
            <div class="svc-outcome-lbl" data-th="การแก้ไขปรับปรุงมุมมองได้โดยไม่ต้องถ่ายทำใหม่">Revisions and angles without reshooting</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20CGI%20and%203D%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างโลก 3 มิติ →">Build 3D Worlds →</a>
      </div>`;

const newCard8 = `  <!-- CARD 8 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="08 · มิติที่สาม">08  ·  THE THIRD DIMENSION</span>
        <h2 class="svc-title reveal-up" data-th="การผลิต<br>CGI และ 3D">CGI & 3D Production</h2>
        <p class="svc-desc reveal-up" data-th="เมื่อความจริงยังไม่เพียงพอ — เราสร้างโลกใบใหม่ขึ้นมา<br><br>สินค้าบางประเภทไม่สามารถถ่ายภาพได้ พื้นที่บางแห่งยังไม่มีอยู่จริง แนวคิดบางอย่างก็กว้างใหญ่เกินกว่าที่กล้องตัวหนึ่งจะบันทึกได้ งานสร้างสรรค์ CGI และ 3D มอบขีดความสามารถให้แบรนด์ของคุณในการแสดงสิ่งที่เป็นไปไม่ได้ — ด้วยความแม่นยำและเสมือนจริงในทุกระดับสเกล สำหรับทุกสื่อนำเสนอ<br><br>ตั้งแต่ภาพเรนเดอร์อสังหาริมทรัพย์ระดับหรูที่ช่วยขายโครงการได้ก่อนสร้างเสร็จ ไปจนถึงโมเดลภาพผลิตภัณฑ์แบบ 3 มิติที่กระตุ้นยอดขายอีคอมเมิร์ซอย่างไม่เคยมีมาก่อน ไปจนถึงสินทรัพย์ 3 มิติของแบรนด์ที่ใช้งานบนดิจิทัล โซเชียล และการออกอากาศ — เราสร้างภาพที่ไม่มีกล้องตัวใดสามารถเก็บรายละเอียดได้">When reality is not enough — we build worlds.<br><br>Some products cannot be photographed. Some spaces do not exist yet. Some ideas are too big for a camera. CGI and 3D production gives your brand the ability to show the impossible — with photorealistic precision, at any scale, for any medium.<br><br>From luxury real estate renders that sell properties before they are built, to product visualisations that make e-commerce convert like never before, to 3D brand assets that live across digital, social and broadcast — we create the visuals that no camera can capture.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="ผู้พัฒนาอสังหาริมทรัพย์ แบรนด์สินค้า สินค้าลักชัวรี และแบรนด์ที่ต้องการนำเสนอสิ่งที่ไม่มีอยู่จริง">Real estate developers, product brands, luxury goods, architecture firms, and any brand that needs to show something that does not exist yet — or cannot be captured on a standard shoot.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="การสร้างภาพโมเดลผลิตภัณฑ์และการเรนเดอร์เสมือนจริง">Photorealistic Product Visualisation & Rendering</li>
          <li data-th="ภาพเรนเดอร์ 3 มิติสำหรับสถาปัตยกรรมและอสังหาริมทรัพย์">Architectural & Real Estate 3D Renders</li>
          <li data-th="สินทรัพย์แบรนด์แบบ 3 มิติและภาพเคลื่อนไหว">3D Brand Assets & Motion Graphics</li>
          <li data-th="เนื้อหาโซเชียลมีเดียสไตล์ CGI">CGI Social Media Content</li>
          <li data-th="การทัวร์เสมือนจริงและสภาพแวดล้อม 3 มิติที่สมจริง">Virtual Tours & Immersive 3D Environments</li>
          <li data-th="แอนิเมชัน 3 มิติสำหรับสื่อดิจิทัลและสื่อออกอากาศ">3D Animation for Digital & Broadcast</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Real</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพภาพเสมือนจริงที่ไม่สามารถแยกจากการถ่ายรูปจริง">Photorealistic quality — indistinguishable from photography</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Any</div>
            <div class="svc-outcome-lbl" data-th="สเกลใดก็ได้ — ตั้งแต่ผลิตภัณฑ์ไปจนถึงสิ่งแวดล้อม">Scale — from hero product to full environment</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Fast</div>
            <div class="svc-outcome-lbl" data-th="การเรนเดอร์งานที่ส่งมอบได้เร็วกว่าการถ่ายทำจริง">Renders delivered faster than traditional shoot days</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Inf</div>
            <div class="svc-outcome-lbl" data-th="การแก้ไขปรับปรุงมุมมองได้โดยไม่ต้องถ่ายทำใหม่">Revisions and angles without reshooting</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20CGI%20and%203D%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างโลก 3 มิติ →">Build 3D Worlds →</a>
      </div>`;

html = html.replace(oldCard8, newCard8);


// CARD 9 AI Film Production
const oldCard9 = `  <!-- CARD 9 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <h2 class="svc-title reveal-up" data-th="การผลิตภาพยนตร์<br>ด้วย AI">AI Film<br>Production</h2>
        <p class="svc-desc reveal-up" data-th="การเล่าเรื่องคุณภาพระดับโรงภาพยนตร์ ไม่มีทีมงาน ไม่มีสถานที่ถ่ายทำ ไม่มีข้อจำกัด การผลิตภาพยนตร์ด้วย AI คือการเปลี่ยนแปลงที่สำคัญที่สุดในโลกการสร้างคอนเทนต์นับตั้งแต่เกิดสมาร์ทโฟน เราใช้เครื่องมือสร้างวิดีโอ AI ขั้นสูงเพื่อผลิตภาพยนตร์แบรนด์ ภาพยนตร์ผลิตภัณฑ์ และวิดีโอแคมเปญระดับภาพยนตร์ — โดยจ่ายเพียงเศษเสี้ยวของต้นทุนการผลิตปกติและใช้เวลาน้อยลงอย่างมาก<br><br>นี่ไม่ใช่คอนเทนต์ AI คุณภาพต่ำ แต่เป็นงานเล่าเรื่องภาพยนตร์เชิงลึกที่ผ่านการวางแผนเชิงกลยุทธ์ เขียนบท กำกับ และผลิตโดยทีมงานของเรา พร้อมกับขุมพลังของ AI การเล่าเรื่องแคมเปญภาพที่เดิมทีต้องใช้กองถ่ายเต็มรูปแบบ พร้อมส่งมอบในเวลาไม่กี่วันในราคาที่สมเหตุสมผลสำหรับทุกงบประมาณ">Cinema-quality storytelling. No crew. No location. No limits. AI film production is the most significant shift in content creation since the smartphone. We use advanced AI video generation tools to produce cinematic brand films, product films and campaign videos - at a fraction of traditional production cost and in a fraction of the time.<br><br>This is not low-quality AI content. This is high-concept, strategically crafted film storytelling - written, directed and produced by our team, powered by AI. Campaign-grade visual storytelling that used to require a full film crew, delivered in days at a price that makes sense for any budget.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR:</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่ต้องการแรงกระทบของหนังโดยไม่มีค่าใช้จ่ายหรือเวลายาวนาน และทุกธุรกิจที่มีเรื่องราวน่าเล่า">Brands that want the impact of a film production without the cost or timeline. Startups launching products. Established brands refreshing campaign content. Any business with a story worth telling cinematically.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="ภาพยนตร์แบรนด์และวิดีโอแคมเปญด้วย AI">AI Brand Films & Campaign Videos</li>
          <li data-th="ภาพยนตร์เปิดตัวผลิตภัณฑ์และแคมเปญสินค้าด้วย AI">AI Product & Launch Films</li>
          <li data-th="เนื้อหาภาพยนตร์สั้นด้วย AI สำหรับ Instagram, TikTok, YouTube">Short-Form AI Cinematic Content - Instagram, TikTok, YouTube</li>
          <li data-th="ภาพยนตร์นำเสนอไลฟ์สไตล์และการเล่าเรื่องด้วย AI">AI-Generated Lifestyle & Narrative Films</li>
          <li data-th="จบงานจากแนวคิดสู่หน้าจอในเวลาหลักวัน - ไม่ใช่หลักเดือน">Concept-to-Screen in Days - Not Months</li>
          <li data-th="การเชื่อมโยงเสียงพากย์ ดนตรีประกอบ และการออกแบบเสียงด้วย AI">AI Voice, Score & Sound Design Integration</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Days</div>
            <div class="svc-outcome-lbl" data-th="จากบรีฟแรกสู่งานภาพยนตร์ที่เสร็จสมบูรณ์">From brief to finished film - not months</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">90%</div>
            <div class="svc-outcome-lbl" data-th="ประหยัดค่าใช้จ่ายเมื่อเทียบกับการถ่ายทำกองปกติ">Cost saving vs traditional film production</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Cinema</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพของงานภาพระดับโรงภาพยนตร์ ขับเคลื่อนด้วย AI">Grade visual quality. AI-powered.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Inf</div>
            <div class="svc-outcome-lbl" data-th="ทิศทางครีเอทีฟและไอเดียที่ทดสอบก่อนจัดทำจริง">Creative directions explored before committing</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20AI%20Film%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างภาพยนตร์ของคุณ →">Build AI Films →</a>
      </div>`;

const newCard9 = `  <!-- CARD 9 -->
  <div class="svc-card">
    <div class="svc-card-inner">
      <div></div>
      <div class="svc-left">
        <span class="svc-num reveal-up" data-th="09 · อนาคตแห่งภาพยนตร์">09  ·  THE FUTURE OF FILM</span>
        <h2 class="svc-title reveal-up" data-th="การผลิตภาพยนตร์<br>ด้วย AI">AI Film Production</h2>
        <p class="svc-desc reveal-up" data-th="การเล่าเรื่องคุณภาพระดับโรงภาพยนตร์ ไม่มีทีมงาน ไม่มีสถานที่ถ่ายทำ ไม่มีข้อจำกัด<br><br>การผลิตภาพยนตร์ด้วย AI คือการเปลี่ยนแปลงที่สำคัญที่สุดในโลกการสร้างคอนเทนต์นับตั้งแต่เกิดสมาร์ทโฟน เราใช้เครื่องมือสร้างวิดีโอ AI ขั้นสูงเพื่อผลิตภาพยนตร์แบรนด์ ภาพยนตร์ผลิตภัณฑ์ และวิดีโอแคมเปญระดับภาพยนตร์ — โดยจ่ายเพียงเศษเสี้ยวของต้นทุนการผลิตปกติและใช้เวลาน้อยลงอย่างมาก<br><br>นี่ไม่ใช่คอนเทนต์ AI คุณภาพต่ำ แต่เป็นงานเล่าเรื่องภาพยนตร์เชิงลึกที่ผ่านการวางแผนเชิงกลยุทธ์ เขียนบท กำกับ และผลิตโดยทีมงานของเรา พร้อมกับขุมพลังของ AI การเล่าเรื่องแคมเปญภาพที่เดิมทีต้องใช้กองถ่ายเต็มรูปแบบ พร้อมส่งมอบในเวลาไม่กี่วันในราคาที่สมเหตุสมผลสำหรับทุกงบประมาณ">Cinema-quality storytelling. No crew. No location. No limits.<br><br>AI film production is the most significant shift in content creation since the smartphone. We use advanced AI video generation tools to produce cinematic brand films, product films and campaign videos — at a fraction of traditional production cost and in a fraction of the time.<br><br>This is not low-quality AI content. This is high-concept, strategically crafted film storytelling — written, directed and produced by our team, powered by AI. Campaign-grade visual storytelling that used to require a full film crew, delivered in days at a price that makes sense for any budget.</p>
        
        <div class="svc-target reveal-up">
          <span class="svc-target-lbl" data-th="สำหรับใคร">WHO THIS IS FOR</span>
          <span class="svc-target-txt" data-th="แบรนด์ที่ต้องการแรงกระทบของหนังโดยไม่มีค่าใช้จ่ายหรือเวลายาวนาน และทุกธุรกิจที่มีเรื่องราวน่าเล่า">Brands that want the impact of a film production without the cost or timeline. Startups launching products. Established brands refreshing campaign content. Any business with a story worth telling cinematically.</span>
        </div>

        <ul class="svc-deliverables reveal-up">
          <li data-th="ภาพยนตร์แบรนด์และวิดีโอแคมเปญด้วย AI">AI Brand Films & Campaign Videos</li>
          <li data-th="ภาพยนตร์เปิดตัวผลิตภัณฑ์และแคมเปญสินค้าด้วย AI">AI Product & Launch Films</li>
          <li data-th="เนื้อหาภาพยนตร์สั้นด้วย AI สำหรับ Instagram, TikTok, YouTube">Short-Form AI Cinematic Content — Instagram, TikTok, YouTube</li>
          <li data-th="ภาพยนตร์นำเสนอไลฟ์สไตล์และการเล่าเรื่องด้วย AI">AI-Generated Lifestyle & Narrative Films</li>
          <li data-th="จบงานจากแนวคิดสู่หน้าจอในเวลาหลักวัน - ไม่ใช่หลักเดือน">Concept-to-Screen in Days — Not Months</li>
          <li data-th="การเชื่อมโยงเสียงพากย์ ดนตรีประกอบ และการออกแบบเสียงด้วย AI">AI Voice, Score & Sound Design Integration</li>
        </ul>

        <div class="svc-outcomes-grid reveal-up">
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Days</div>
            <div class="svc-outcome-lbl" data-th="จากบรีฟแรกสู่งานภาพยนตร์ที่เสร็จสมบูรณ์">From brief to finished film — not months</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">90%</div>
            <div class="svc-outcome-lbl" data-th="ประหยัดค่าใช้จ่ายเมื่อเทียบกับการถ่ายทำกองปกติ">Cost saving vs traditional film production</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Cinema</div>
            <div class="svc-outcome-lbl" data-th="คุณภาพของงานภาพระดับโรงภาพยนตร์ ขับเคลื่อนด้วย AI">Grade visual quality. AI-powered.</div>
          </div>
          <div class="svc-outcome-card">
            <div class="svc-outcome-val">Inf</div>
            <div class="svc-outcome-lbl" data-th="ทิศทางครีเอทีฟและไอเดียที่ทดสอบก่อนจัดทำจริง">Creative directions explored before committing</div>
          </div>
        </div>

        <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20discuss%20AI%20Film%20Production." target="_blank" class="svc-cta-btn reveal-up" data-th="สร้างภาพยนตร์ของคุณ →">Build AI Films →</a>
      </div>`;

html = html.replace(oldCard9, newCard9);


// 2. Update Bottom CTA
const oldBottomCta = `<div class="svc-bottom-cta">
  <div class="sbc-h" data-th="พร้อมที่จะ<br><em>ครอบงำหรือยัง?</em>">Ready to<br><em>Dominate?</em></div>
  <a href="https://wa.me/66960531394" target="_blank" class="sbc-link" data-th="จองคิววางกลยุทธ์ →">Book a Strategy Call →</a>
</div>`;

const newBottomCta = `<div class="svc-bottom-cta" style="flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 24px; background: var(--ac); color: var(--bg);">
  <h2 class="sbc-h" data-th="พร้อมที่จะ<br><em>ครอบงำหรือยัง?</em>" style="margin-bottom: 8px;">Ready to Dominate?</h2>
  <p style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.6; max-width: 800px; color: rgba(0,0,0,0.85); font-weight: 500;" data-th="ไม่ว่าคุณจะอยู่ในอุตสาหกรรมใดหรือเริ่มจากตรงไหน หากแบรนด์ของคุณควรค่าแก่การเป็นที่กล่าวถึง มีผู้เข้าชม และซื้อซ้ำมากที่สุดในตลาด — เราสร้างระบบที่ทำให้สิ่งนั้นเกิดขึ้นอย่างหลีกเลี่ยงไม่ได้ เราทำงานร่วมกับแบรนด์ที่เราเชื่อมั่นเท่านั้น บอกเราเกี่ยวกับแบรนด์ของคุณ">It doesn't matter what industry you're in or where you're starting from. If your brand deserves to be the most talked-about, most visited, most bought-from name in your market — we can build the system that makes it inevitable.<br><br>We only work with brands we believe in. Tell us about yours.</p>
  <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 16px;">
    <a href="https://wa.me/66960531394?text=Hi!%20I%20would%20like%20to%20book%20a%20strategy%20call." target="_blank" class="sbc-link" data-th="จองคิววางกลยุทธ์ →" style="background: var(--bg); color: var(--ac);">Book a Strategy Call →</a>
    <a href="https://wa.me/66960531394?text=Hi!%20I%27d%20like%20to%20chat%20on%20WhatsApp." target="_blank" class="sbc-link" data-th="ส่งข้อความหาเราทาง WhatsApp" style="background: transparent; color: var(--bg); border: 1px solid rgba(0,0,0,0.3); padding: 18px 40px; text-decoration: none; border-radius: 100px; font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">Or message us directly on WhatsApp</a>
  </div>
</div>`;

html = html.replace(oldBottomCta, newBottomCta);


// 3. Update Footer Bottom Text
const oldFooterBot = `<div class="ft-bot"><p data-th="© 2026 Unsocials · อินเดีย &amp; ไทย · สงวนลิขสิทธิ์">© 2026 Unsocials · India &amp; Thailand · All Rights Reserved.</p><p data-th="เราทำให้มันเกิดขึ้นอย่างหลีกเลี่ยงไม่ได้">We Make It Inevitable.</p></div>`;

const newFooterBot = `<div class="ft-bot"><p data-th="unsocials.th · กรุงเทพฯ, ประเทศไทย · เราทำให้มันเกิดขึ้นอย่างหลีกเลี่ยงไม่ได้">unsocials.th  ·  Bangkok, Thailand  ·  We Make It Inevitable.</p><p data-th="© 2026 Unsocials Thailand. สงวนลิขสิทธิ์">© 2026 Unsocials Thailand. All Rights Reserved</p></div>`;

html = html.replace(oldFooterBot, newFooterBot);


fs.writeFileSync(filePath, html, 'utf8');
console.log("Services page updated successfully!");
