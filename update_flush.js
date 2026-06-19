const fs = require('fs');
let html = fs.readFileSync('C:\\UNSOCIALS\\index.html', 'utf8');

const target = `<section id="ai-results" style="padding:100px 8vw;background:#060606;overflow:hidden;position:relative;z-index:10;min-height:100vh;display:flex;align-items:center;width:100%;">
  <div class="about-grid" style="align-items:center">
    <div>
      <h2 class="sec-h" data-th="ผลกระทบ<br><em>ที่มองเห็นได้.</em>">Visible<br><em>Impact.</em></h2>
      <p class="ab-body" data-th="Alex แสดงให้คุณเห็นเพียงสิ่งเดียวที่สำคัญ: <span class='hl-text'>ผลลัพธ์.</span> แคมเปญที่ขับเคลื่อนด้วย AI ของเราไม่ได้มีแค่ความสวยงาม — พวกมันคือเครื่องจักรที่สร้างยอดขาย">Alex shows you the only thing that matters: <span class="hl-text">Results.</span> Our AI-driven campaigns aren't just pretty — they are performance machines.</p>
      <p class="ab-body" style="margin-top:20px;" data-th="ทุกแคมเปญที่เราสร้างมุ่งเป้าไปที่ตัวชี้วัดหนึ่งเดียว: รายได้ ไม่ใช่ความประทับใจ ไม่ใช่การเข้าถึง — แต่เป็นผลลัพธ์ทางธุรกิจที่วัดผลได้จริง สร้างขึ้นจากข้อมูล ขับเคลื่อนด้วย AI และปรับแต่งอย่างไม่มีวันหยุดพัก">Every campaign we build targets one metric: revenue. Not impressions, not reach — measurable business outcomes. Data-built, AI-powered, and relentlessly optimised.</p>
    </div>
    <div class="rv" style="position:relative">
      <div style="max-width:440px;margin:0 0 0 auto;">
        <div style="position:relative;overflow:hidden;border-radius:24px;background:#060606;">
          <!-- Subtle edge vignette so the video fades into the section background -->
          <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%, transparent 50%, #060606 100%);z-index:2;pointer-events:none;border-radius:24px;"></div>
          <video src="assets/01.mp4" autoplay loop muted playsinline
            style="width:100%;height:auto;display:block;border-radius:24px;
                   position:relative;z-index:1;">
          </video>
        </div>
      </div>

    </div>
  </div>
</section>`;

const replacement = `<section id="ai-results" style="padding:100px 0 100px max(6vw, calc(50vw - 650px)); background:#060606; overflow:hidden; position:relative; z-index:10; min-height:100vh; display:flex; align-items:center; width:100%;">
  <div class="split-flush-right">
    <div style="padding-right: 2vw;">
      <h2 class="sec-h" data-th="ผลกระทบ<br><em>ที่มองเห็นได้.</em>">Visible<br><em>Impact.</em></h2>
      <p class="ab-body" data-th="Alex แสดงให้คุณเห็นเพียงสิ่งเดียวที่สำคัญ: <span class='hl-text'>ผลลัพธ์.</span> แคมเปญที่ขับเคลื่อนด้วย AI ของเราไม่ได้มีแค่ความสวยงาม — พวกมันคือเครื่องจักรที่สร้างยอดขาย">Alex shows you the only thing that matters: <span class="hl-text">Results.</span> Our AI-driven campaigns aren't just pretty — they are performance machines.</p>
      <p class="ab-body" style="margin-top:20px;" data-th="ทุกแคมเปญที่เราสร้างมุ่งเป้าไปที่ตัวชี้วัดหนึ่งเดียว: รายได้ ไม่ใช่ความประทับใจ ไม่ใช่การเข้าถึง — แต่เป็นผลลัพธ์ทางธุรกิจที่วัดผลได้จริง สร้างขึ้นจากข้อมูล ขับเคลื่อนด้วย AI และปรับแต่งอย่างไม่มีวันหยุดพัก">Every campaign we build targets one metric: revenue. Not impressions, not reach — measurable business outcomes. Data-built, AI-powered, and relentlessly optimised.</p>
    </div>
    <div class="rv" style="position:relative; width: 100%; height: 100%; display:flex; justify-content:flex-end;">
      <div style="width:100%; max-width:800px; height:80vh; max-height:800px; position:relative; overflow:hidden; border-top-left-radius:24px; border-bottom-left-radius:24px; background:#060606;">
        <video src="assets/01.mp4" autoplay loop muted playsinline
          style="width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:1;">
        </video>
      </div>
    </div>
  </div>
</section>`;

if (html.includes('Visible<br><em>Impact.</em>')) {
  html = html.replace(target, replacement);
  fs.writeFileSync('C:\\UNSOCIALS\\index.html', html);
  console.log("Updated ai-results layout to flush right");
} else {
  console.log("Could not find ai-results target section.");
}
