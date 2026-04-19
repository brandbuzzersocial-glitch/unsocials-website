// ─── CURSOR ───
var cur=document.getElementById('cur'),cur2=document.getElementById('cur2'),mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
function animCur(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;cur2.style.left=cx+'px';cur2.style.top=cy+'px';requestAnimationFrame(animCur)}animCur();
document.querySelectorAll('a,button,.cc,.si,.sb').forEach(function(el){
  el.addEventListener('mouseenter',function(){document.body.classList.add('hov')});
  el.addEventListener('mouseleave',function(){document.body.classList.remove('hov')});
});

// ─── PRELOADER ───
var pf=document.getElementById('pf'),pt=document.getElementById('pt'),pct=0;
var enEl=document.getElementById('pre-en'),thEl=document.getElementById('pre-th');
var isEn=true,flipDur=320; // ms per half-flip

var labels=['INITIALISING','กำลังโหลด','LOADING','เริ่มต้น','BUILDING','กำลังสร้าง','ALMOST','เกือบแล้ว'];
var labelIdx=0;

// flip between EN and TH on a fixed interval
function doFlip(){
  var outEl=isEn?enEl:thEl;
  var inEl=isEn?thEl:enEl;
  // outgoing: slide up away
  outEl.style.animation='none'; outEl.offsetHeight; // reflow
  outEl.style.animation='flipOut '+flipDur+'ms cubic-bezier(.4,0,.2,1) forwards';
  // incoming: slide up in
  inEl.style.animation='none'; inEl.offsetHeight;
  inEl.style.animation='flipIn '+flipDur+'ms cubic-bezier(.4,0,.2,1) forwards';
  isEn=!isEn;
  // cycle label
  labelIdx=(labelIdx+1)%labels.length;
  pt.textContent=labels[labelIdx];
}

var flipTimer=setInterval(doFlip,700);

var pi=setInterval(function(){
  pct+=Math.random()*14+2;
  if(pct>=100){
    pct=100;
    clearInterval(pi);
    clearInterval(flipTimer);
    // final snap to EN
    if(!isEn) doFlip();
    pt.textContent='LET\'S GO';
    setTimeout(function(){document.getElementById('pre').classList.add('out')},600);
  }
  pf.style.width=pct+'%';
},90);

// ─── NAV SCROLL ───
window.addEventListener('scroll',function(){
  document.getElementById('nav').classList.toggle('compact',window.scrollY>80);
});

// ─── GSAP PHYSICS ENGINE ───
if(typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Text Highlights
  document.querySelectorAll('.hl-text').forEach(function(el){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('on'),
    });
  });

  // 2. Staggered 3D Reveals
  gsap.set('.rv', { y: 60, opacity: 0, rotateX: 15, transformPerspective: 800 });
  gsap.set('.rv-l', { x: -60, opacity: 0 });

  ScrollTrigger.batch('.rv', {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }),
    start: 'top 85%'
  });
  ScrollTrigger.batch('.rv-l', {
    onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }),
    start: 'top 85%'
  });

  // 3. Magnetic Hover Buttons
  document.querySelectorAll('.nbook, .cta-btn, .cta-p, .cta-s, .cc').forEach(function(btn){
    if(btn.classList.contains('cc')) return;
    btn.classList.add('magnetic');
    btn.addEventListener('mousemove', function(e){
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width/2;
      var y = e.clientY - rect.top - rect.height/2;
      gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', function(){
      gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
    });
  });

  // 4. 3D Tilt for Case Study Cards
  document.querySelectorAll('.cc').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var xPct = (x / rect.width - 0.5) * 2;
      var yPct = (y / rect.height - 0.5) * 2;
      
      gsap.to(card, {
        rotateY: xPct * 8,
        rotateX: -yPct * 8,
        transformPerspective: 1200,
        duration: 0.4,
        ease: 'power2.out'
      });
      var ov = card.querySelector('.cc-ov');
      if(ov) gsap.to(ov, { opacity: 0.85 + (yPct * 0.15), duration: 0.2 });
    });
    card.addEventListener('mouseleave', function(){
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'power2.out' });
      var ov = card.querySelector('.cc-ov');
      if(ov) gsap.to(ov, { opacity: 0, duration: 0.5 });
    });
  });
}

// ─── NEXUS STARFIELD ───
(function(){
  var c = document.getElementById('nexus-canvas');
  if(!c) return;
  var ctx = c.getContext('2d');
  var W = 520, H = 520;
  c.width = W; c.height = H;

  var stars = Array.from({length:120}, function(){
    return {
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*1.4 + 0.3,
      a: Math.random(),
      speed: Math.random()*0.005 + 0.002,
      phase: Math.random()*Math.PI*2
    };
  });

  var isNexusVis = false;
  var nxSect = document.getElementById('nexus-section');
  if(nxSect){
    new IntersectionObserver(function(es){ isNexusVis=es[0].isIntersecting; }).observe(nxSect);
  }

  function drawStars(t){
    requestAnimationFrame(drawStars);
    if(!isNexusVis) return;
    ctx.clearRect(0,0,W,H);
    stars.forEach(function(s){
      var alpha = 0.2 + 0.5 * Math.abs(Math.sin(t*s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,220,150,'+alpha+')';
      ctx.fill();
    });
  }
  drawStars(0);
})();

// ─── NEXUS ORBIT ANIMATION ───
(function(){
  var cards = document.querySelectorAll('.nx-card');
  var nodes = document.querySelectorAll('.nx-node');
  if(!cards.length) return;

  var radii  = [280, 320, 260, 300, 290];
  var angles = [0, 72, 144, 216, 288];
  var speeds = [0.18, -0.12, 0.22, -0.16, 0.14];
  var nodeAngles = [36, 108, 180, 252, 324];
  var nodeRadii  = [180, 160, 200, 175, 185];

  function toRad(d){ return d * Math.PI / 180; }

  function tick(){
    cards.forEach(function(card, i){
      angles[i] += speeds[i];
      var rad = toRad(angles[i]);
      var cx = radii[i] * Math.cos(rad);
      var cy = radii[i] * Math.sin(rad);
      card.style.transform = 'translate(calc(-50% + '+cx+'px), calc(-50% + '+cy+'px))';
    });
    nodes.forEach(function(node, i){
      nodeAngles[i] += 0.08;
      var rad = toRad(nodeAngles[i]);
      var cx = nodeRadii[i] * Math.cos(rad);
      var cy = nodeRadii[i] * Math.sin(rad);
      node.style.transform = 'translate(calc(-50% + '+cx+'px), calc(-50% + '+cy+'px))';
    });
    requestAnimationFrame(tick);
  }
  tick();
})();

// ─── HERO WEBGL SHADER ───
(function(){
  var canvas=document.getElementById('hero-canvas');
  var gl=canvas.getContext('webgl', { powerPreference: "high-performance" });
  if(!gl) return;
  function resize(){canvas.width=window.innerWidth/2;canvas.height=window.innerHeight/2;gl.viewport(0,0,canvas.width,canvas.height)}
  resize();window.addEventListener('resize',resize);

  var vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
  var fs=`
    precision mediump float;
    uniform float t;
    uniform vec2 res;
    uniform vec2 mouse;
    
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){
      vec2 i=floor(p),f=fract(p);
      f=f*f*(3.0-2.0*f);
      return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
    }
    float fbm(vec2 p){
      float v=0.0,a=0.5;
      for(int i=0;i<5;i++){v+=a*noise(p);p*=2.02;a*=0.48;}
      return v;
    }
    
    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*res)/min(res.x,res.y);
      vec2 m=(mouse-.5*res)/min(res.x,res.y);
      float d=length(uv-m*0.3);
      vec2 q=vec2(fbm(uv+t*0.06),fbm(uv+vec2(1.3,0.8)+t*0.05));
      vec2 r=vec2(fbm(uv+2.5*q+vec2(1.7,9.2)+t*0.035),fbm(uv+2.5*q+vec2(8.3,2.8)+t*0.025));
      float f=fbm(uv+2.7*r);
      vec3 col=mix(vec3(0.04,0.04,0.04),vec3(0.12,0.06,0.18),clamp(f*f*2.5,0.0,1.0));
      col=mix(col,vec3(0.55,0.72,0.04),clamp(f*3.0-2.1,0.0,1.0));
      col=mix(col,vec3(0.91,1.0,0.0),clamp(length(q)*0.4,0.0,1.0));
      col*=1.0-0.6*d;
      col+=0.06*vec3(0.91,1.0,0.0)*max(0.0,0.5-d);
      gl_FragColor=vec4(col*0.65,1.0);
    }
  `;

  function shader(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s}
  var prog=gl.createProgram();
  gl.attachShader(prog,shader(gl.VERTEX_SHADER,vs));
  gl.attachShader(prog,shader(gl.FRAGMENT_SHADER,fs));
  gl.linkProgram(prog);gl.useProgram(prog);

  var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var pLoc=gl.getAttribLocation(prog,'p');gl.enableVertexAttribArray(pLoc);gl.vertexAttribPointer(pLoc,2,gl.FLOAT,false,0,0);

  var tLoc=gl.getUniformLocation(prog,'t');
  var rLoc=gl.getUniformLocation(prog,'res');
  var mLoc=gl.getUniformLocation(prog,'mouse');
  var mx2=canvas.width/2,my2=canvas.height/2;
  document.addEventListener('mousemove',function(e){mx2=e.clientX;my2=window.innerHeight-e.clientY});

  var start=performance.now();
  var hero=document.getElementById('hero');
  var isHeroVis=true;
  if(hero) new IntersectionObserver(function(e){isHeroVis=e[0].isIntersecting}).observe(hero);

  function draw(){
    requestAnimationFrame(draw);
    if(!isHeroVis) return;
    var t=(performance.now()-start)/1000;
    gl.uniform1f(tLoc,t);
    gl.uniform2f(rLoc,canvas.width,canvas.height);
    gl.uniform2f(mLoc,mx2,my2);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  }
  draw();
})();

// ─── AVA & ALEX CHARACTER ANIMATIONS ───
(function(){
  if(typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. Fragment & Node reveals
  gsap.set('.rep-fragment, .rep-node-w, .rep-img-w-premium', { y: 40, opacity: 0, scale: 0.95 });
  
  ScrollTrigger.batch('.rep-fragment, .rep-node-w, .rep-img-w-premium', {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }),
    start: 'top 85%'
  });

  // 2. Fragment Parallax (Internal Image)
  document.querySelectorAll('.rep-fragment').forEach(function(frag){
    const img = frag.querySelector('img');
    gsap.to(img, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: frag,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // 3. Floating Node (Breathe effect)
  gsap.to('.rep-node', {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // 4. Hero Ava Mouse Interaction (Dynamic Depth)
  const heroNode = document.querySelector('.rep-node-w');
  if(heroNode) {
    document.addEventListener('mousemove', function(e){
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      gsap.to(heroNode, { x: x, y: y, duration: 1.2, ease: 'power2.out' });
      const nodeImg = heroNode.querySelector('img');
      if(nodeImg) gsap.to(nodeImg, { x: -x*0.3, y: -y*0.3, duration: 1.5, ease: 'power2.out' });
    });
  }

  // 5. Placard Typewriter Integration
  const placText = document.querySelector('.placard-text');
  if(placText) {
    const originalText = placText.textContent;
    placText.textContent = '';
    ScrollTrigger.create({
      trigger: '.ai-reps-sec',
      start: 'top 60%',
      onEnter: () => {
        let i = 0;
        placText.textContent = '';
        const timer = setInterval(() => {
          if (i < originalText.length) {
            placText.textContent += originalText[i];
            i++;
          } else {
            clearInterval(timer);
          }
        }, 100);
      }
    });
  }

  // 6. Refined Mockup Reveal (Results)
  const psRefined = document.querySelector('.ps-refined');
  if(psRefined) {
    gsap.from(psRefined.querySelectorAll('.ps-stat-val, .ps-stat-lbl, .ps-chart-w'), {
      y: 30, opacity: 0, stagger: 0.15, duration: 1.2, ease: 'power4.out',
      scrollTrigger: {
        trigger: psRefined,
        start: 'top 80%'
      }
    });
  }

  // 7. Global Video Optimization
  if ('IntersectionObserver' in window) {
    var vidObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.play().catch(function(){}); }
        else { e.target.pause(); }
      });
    }, { rootMargin: '100px' });
    document.querySelectorAll('video').forEach(function(v) { vidObs.observe(v); });
  }

})();

// ─── CASE STUDY OVERLAY LOGIC ───
const caseData = {
  elysium: {
    eye: '5-Star Hotel · Pattaya Prathumnak Hill · End-to-End Brand Transformation',
    title: 'Elysium Pattaya',
    tags: ['Social Revamp', 'Google Hotel Ads', 'Meta Performance', 'AI Content', 'Direct Bookings'],
    problemHtml: `<div class="cs-sec-title">A 5-star hotel that looked like a 2-star on social.</div>
<p class="cs-p">Elysium Pattaya is one of the city's most premium properties — a 5-star boutique hotel perched on Prathumnak Hill, one of Pattaya's most coveted luxury locations. But when they came to us, their digital presence told a very different story.</p>
<p class="cs-p">Their social media was a graveyard of basic offer graphics, stock vectors, and promotional banners that screamed discount hotel — not luxury destination. Website bookings were at zero. Every single reservation came through OTAs — Agoda, Booking.com, Expedia — with commission fees eating directly into revenue. No customer data. No direct relationship with guests. No control over their own brand.</p>
<p class="cs-p">Elysium had the product. They needed the story — and the system to monetise it.</p>`,
    strategyHtml: `<div class="cs-sec-title">Luxury content. Performance ads. Direct revenue.</div>
<p class="cs-p"><strong>Phase 1 — Social Transformation:</strong> We stripped the account back to zero and rebuilt it from the ground up. Luxury lifestyle shoots capturing the hotel's rooftop pool, panoramic Prathumnak Hill views, and intimate suite experiences. Travel-led editorial reels designed to trigger aspiration, not just awareness. AI-enhanced visuals that elevated the property into something cinematic — giving potential guests the feeling of Elysium before they ever arrived.</p>
<p class="cs-p"><strong>Phase 2 — Google Hotel Search Ads:</strong> We launched Hotel Search campaigns targeting travellers actively searching for hotels in Pattaya — worldwide. Guests from Europe, the Middle East, and Asia saw Elysium at the top of Google results. We also ran direct call ads targeting domestic Thai travellers, giving every type of guest the fastest route to conversion.</p>
<p class="cs-p"><strong>Phase 3 — Meta Awareness & Direct Booking Incentives:</strong> Awareness campaigns ran across Meta targeting the top feeder countries visiting Pattaya. We offered a complimentary mini bar and 20% off for guests who booked directly via Instagram or WhatsApp — bypassing OTAs entirely. Guests had a reason to reach out directly. Elysium had a reason to celebrate.</p>`,
    sidebar: [
      { title: 'The Brand', text: "Elysium Pattaya — 5-star boutique hotel on Prathumnak Hill, one of Pattaya's most prestigious luxury addresses." },
      { title: 'The Challenge', text: "Zero website revenue. 100% OTA dependency. Social media that didn't reflect the property's luxury positioning or 5-star calibre." },
      { title: 'Services Delivered', text: "Full social media revamp · Luxury lifestyle shoots · AI-enhanced content · Google Hotel Search Ads (worldwide) · Call ads (domestic) · Meta awareness campaigns · WhatsApp direct booking system · Direct booking incentive strategy" },
      { title: 'Key Innovation', text: "A complimentary mini bar + 20% pre-booking offer positioned Elysium's direct channel as more attractive than any OTA — turning social followers into direct-paying guests." }
    ],
    results: [
      { num: '1M THB', lbl: 'Direct website revenue generated within 2 months of campaign launch' },
      { num: '∞%', lbl: 'Website revenue growth — from absolute zero to 7-figure monthly revenue' },
      { num: '0% OTA', lbl: 'Direct booking channel built — guests choosing Elysium over OTA platforms' },
      { num: '5★', lbl: "Social presence finally matching the luxury reality of Prathumnak Hill's finest hotel" }
    ]
  },
  alexa: {
    eye: 'Beach Club · Pattaya · Brand Positioning + Performance Ads',
    title: 'Alexa Beach Club',
    tags: ['Brand Positioning', 'Lifestyle Content', 'Meta Ads', 'Pre-Reservations', 'Event Marketing'],
    problemHtml: `<div class="cs-sec-title">The best beach club in Pattaya that nobody knew existed.</div>
<p class="cs-p">Alexa Beach Club had everything — an infinity pool, a private beach, world-class DJs, foam parties, and an Ibiza-style atmosphere that Pattaya had never seen before. There was just one problem: it sat outside the main tourist strip, and the world had no idea it existed.</p>
<p class="cs-p">Their online presence was minimal. Their social wasn't telling the story. Without visibility, the reservations weren't coming. They came to Unsocials Thailand with a clear brief: they didn't just want reach — they wanted to be positioned as the number one beach club in Pattaya.</p>`,
    strategyHtml: `<div class="cs-sec-title">Show the experience. Build the desire. Drive the bookings.</div>
<p class="cs-p"><strong>Phase 1 — Lifestyle Content Production:</strong> We went in and shot everything. Models in the infinity pool. Birthdays on the beach. Couples at sunset dinners. Foam party madness. DJ sets. Activities. Lunches. Edited into scroll-stopping reels and carousels, we built a content library that made Pattaya look like Ibiza.</p>
<p class="cs-p"><strong>Phase 2 — Brand Awareness:</strong> Meta awareness campaigns showed Pattaya wasn't just a city for nightlife — Alexa Beach Club was where your day belonged. Targeting tourists in Thailand, expats in Pattaya, and Bangkok weekenders, we repositioned the narrative: if you're in Pattaya and haven't been to Alexa, your trip isn't complete.</p>
<p class="cs-p"><strong>Phase 3 — Pre-Reservation Campaigns:</strong> Website click ads and WhatsApp/Facebook DM campaigns drove active bookings. Birthdays. Girls' day outs. Corporate events. Weddings. The weekend campaign specifically targeting Bangkok residents produced repeat waves of traffic every Friday — turning Alexa into Pattaya's most-booked beach club.</p>`,
    sidebar: [
      { title: 'The Brand', text: "Alexa Beach Club — Pattaya's premier Ibiza-style beach club featuring an infinity pool, private beach, international DJs, foam parties, and full dining experiences." },
      { title: 'The Goal', text: "Positioning. Not just reach. Become undeniably the #1 beach club in Pattaya and generate consistent pre-reservations across all event types." },
      { title: 'Services Delivered', text: "Lifestyle content production with models · Social media management · Meta brand awareness campaigns · Website click ads · WhatsApp + DM lead generation · Bangkok weekend targeting · Event marketing" },
      { title: 'Breakthrough Moment', text: "Bangkok weekend campaigns unlocked a recurring revenue stream — local Thai travellers booking Alexa as their Pattaya itinerary centrepiece, not an afterthought." }
    ],
    results: [
      { num: '26K→2.6M', lbl: 'Instagram reach in 3 months — a 9,700% increase in content visibility' },
      { num: '280+', lbl: 'Direct reservation messages — birthdays, corporate events, weddings via WhatsApp & DMs' },
      { num: '20,103', lbl: 'Ad clicks in 3 months — qualified traffic from tourists, Bangkok weekenders, expats' },
      { num: '#1', lbl: "Positioned as Pattaya's number one beach club — the goal from day one, achieved" }
    ]
  },
  skyview: {
    eye: 'Hotel · Bangkok · WhatsApp Lead Generation',
    title: 'Hotel Skyview BKK',
    tags: ['WhatsApp Marketing', 'Meta Ads', 'Direct Bookings', 'Cost Per Lead'],
    problemHtml: `<div class="cs-sec-title">Good bookings. Bad economics. Every sale cost too much.</div>
<p class="cs-p">Hotel Skyview Bangkok was already running direct booking ads — but the numbers didn't add up. The cost per website purchase was high. Converting leads through a multi-click website funnel meant paying a premium for every booking. Margins were under pressure, and the team needed a smarter, more direct path to revenue.</p>
<p class="cs-p">They had a great product. What they needed was a more efficient way to get guests from interest to booking — without the cost and drop-off of a website journey.</p>`,
    strategyHtml: `<div class="cs-sec-title">Cut the middleman. Put the conversation first.</div>
<p class="cs-p">We introduced a WhatsApp Click-to-Chat ad strategy — Meta campaigns that sent interested travellers directly into a WhatsApp conversation with the hotel team, rather than pushing them through a booking engine.</p>
<p class="cs-p">The logic was simple: a guest who messages directly is already warm. The hotel team could respond instantly, personalise the offer, confirm availability in real time, and close the booking in a single conversation. No abandoned carts. No lost momentum. Just a direct conversation that turned intent into revenue.</p>
<p class="cs-p">At just 50–100 THB cost per click, the economics transformed completely. The hotel was acquiring qualified leads at a fraction of the previous cost — and converting them at a higher rate because every interaction was personal and immediate.</p>`,
    sidebar: [
      { title: 'The Brand', text: "Hotel Skyview Bangkok — boutique hotel in the heart of Bangkok, offering premium stays with a strong direct booking ambition." },
      { title: 'The Challenge', text: "High cost per website purchase making direct campaigns uneconomical. Needed a lower-cost, higher-converting lead generation system." },
      { title: 'Services Delivered', text: "WhatsApp Click-to-Chat ad campaigns · Meta Ads management · Lead qualification strategy · Direct booking funnel design · Ongoing optimisation" },
      { title: 'The Advantage', text: "Direct guest contact means the hotel team can respond in real time, offer exclusive deals, and build genuine rapport — converting bookings a website alone could never close." }
    ],
    results: [
      { num: '50–100 THB', lbl: 'Cost per WhatsApp lead — a fraction of the previous website cost per booking' },
      { num: 'Direct', lbl: 'Guest contact from first message — dates, room type, budget captured instantly' },
      { num: '↑ Revenue', lbl: 'Increased direct room revenue as conversion rates improved through personal booking conversations' },
      { num: '0% OTA', lbl: 'Every WhatsApp booking is commission-free — full margin stays with the hotel' }
    ]
  },
  nomads: {
    eye: 'Global Hostel Brand · Thailand · UGC + Social Media',
    title: 'Nomads Hostel Asia',
    tags: ['UGC Content', 'Social Media', 'Direct Bookings', 'Community Building'],
    problemHtml: `<div class="cs-sec-title">Three hostels. A global brand. Nobody talking about them online.</div>
<p class="cs-p">Nomads is a globally recognised hostel brand — built for solo travellers, backpackers, and adventure seekers who live for connecting with strangers and turning them into travel companions. When they launched three hostels across Thailand, the brand recognition was there. The local social presence wasn't.</p>
<p class="cs-p">After 4–5 months of operation, bookings were almost entirely OTA-driven. People knew the Nomads name but didn't know what made these Thailand properties different — the pub crawls, the activities, the community nights, the experiences that don't show up in a booking engine listing.</p>`,
    strategyHtml: `<div class="cs-sec-title">Let the guests tell the story. Make the world jealous.</div>
<p class="cs-p">The most credible voice for a hostel isn't the brand — it's the traveller. We built a UGC strategy that put real guests at the centre of every piece of content. Real faces. Real friendships. Real experiences — pub crawls, night markets, rooftop parties, sunrise beach runs, and everything in between.</p>
<p class="cs-p">We captured and edited content featuring guests in their most authentic moments, then distributed it across all social platforms in a format that made the Nomads Thailand experience unmissable. For solo travellers scrolling Instagram at 2am wondering where to go next — Nomads became the answer.</p>
<p class="cs-p">The content generated organic leads directly on social — travellers DMing for booking information, asking how to join activities, enquiring about availability. We directed them to the direct booking website, growing Nomads' owned revenue channel alongside its community.</p>`,
    sidebar: [
      { title: 'The Brand', text: "Nomads Hostel Asia — global hostel brand operating 3 properties across Thailand, catering to solo travellers, backpackers, and adventure tourism." },
      { title: 'The Challenge', text: "No social presence communicating the Nomads experience. 100% OTA reliance. Travellers didn't know what made Nomads Thailand different from any other hostel." },
      { title: 'Services Delivered', text: "UGC content strategy and production · Full social media management · Community building · Direct booking lead generation · Activity and event content marketing" },
      { title: 'Recognition', text: "During our partnership, Nomads Thailand was awarded Best Hostel in Thailand and Best Hostel in Asia by Hostelworld — the industry's most prestigious recognition." }
    ],
    results: [
      { num: '#1 Asia', lbl: 'Best Hostel in Asia — awarded by Hostelworld during our partnership' },
      { num: 'Best TH', lbl: 'Best Hostel in Thailand — Hostelworld recognition across all 3 properties' },
      { num: 'Direct', lbl: 'Organic social-to-booking leads — travellers reaching out via Instagram and Facebook DMs' },
      { num: 'Real', lbl: 'UGC content strategy capturing authentic experiences that no stock photo could replicate' }
    ]
  },
  bamboo: {
    eye: 'Beach Club · Krabi · Social Media Revamp',
    title: 'Bamboo Beach Club',
    tags: ['Social Revamp', 'Event Content', 'AI Graphics', 'Daily Posting', 'Experience Marketing'],
    problemHtml: `<div class="cs-sec-title">An incredible venue with an invisible social presence.</div>
<p class="cs-p">Bamboo Beach Club in Krabi is one of the island's most vibrant venues — packed with events, parties, themed nights, and the kind of tropical energy that makes for exceptional content. People visiting Krabi already knew about Bamboo. Word of mouth was working. But social media? It was a complete afterthought.</p>
<p class="cs-p">The account had a basic presence but wasn't capturing what actually happened inside. No event promotion. No night coverage. No stories showing the atmosphere. No content that made someone in Bangkok say "we need to be there this weekend." The experience existed — the social proof didn't.</p>`,
    strategyHtml: `<div class="cs-sec-title">Show Krabi what it's been missing. Then show the world.</div>
<p class="cs-p">We took over Bamboo's social from the ground up. High-energy party reels edited to match the music, the mood, and the crowd. Every major event got its own content series: fire shows, foam nights, live DJ sets, themed pool parties. The kind of footage that makes your phone screen feel like a portal.</p>
<p class="cs-p">We introduced conceptual AI-generated graphics that gave Bamboo a visual identity beyond photography — cosmic beach-party aesthetics, event announcement designs, and branded content that stood out in feeds dominated by generic tropical imagery.</p>
<p class="cs-p">A daily posting rhythm combined with live Stories coverage on every event night gave followers a real-time window into Bamboo's world. The narrative became undeniable: if you are in Krabi and you haven't visited Bamboo Beach Club, your trip is not complete.</p>`,
    sidebar: [
      { title: 'The Brand', text: "Bamboo Beach Club Krabi — one of Krabi's most energetic beach venues, known for themed events, parties, and an electric tropical atmosphere." },
      { title: 'The Challenge', text: "Great venue with a weak social presence. Events happening nightly with zero documentation. No content strategy communicating the Bamboo experience." },
      { title: 'Services Delivered', text: "Full social media revamp · Party and event reel production · AI-generated conceptual graphics · Daily posting strategy · Live Stories event coverage · Ongoing social media management" },
      { title: 'The Narrative', text: "\"If you're in Krabi and haven't been to Bamboo Beach Club — your trip isn't finished.\" A positioning line that became the brand's social identity." }
    ],
    results: [
      { num: 'Krabi #1', lbl: "Bamboo positioned as Krabi's must-visit beach club — the destination, not just an option" },
      { num: 'Daily', lbl: 'Consistent posting with live Stories coverage on every major event night' },
      { num: 'AI + Real', lbl: 'AI conceptual graphics combined with real event footage — a premium, distinctive aesthetic' },
      { num: 'Ongoing', lbl: 'Full social media management — continuous content, community growth, event marketing' }
    ]
  },
  gps: {
    eye: 'Luxury Gemstones · Thailand · Organic Social Growth',
    title: 'GPS Gems',
    tags: ['AI Content Strategy', 'Social from Scratch', 'Organic Lead Gen', 'Education Marketing'],
    problemHtml: `<div class="cs-sec-title">Extraordinary gems. Zero digital presence to show for it.</div>
<p class="cs-p">GPS Gems came to us at the very beginning — no social media, no content library, no digital footprint. Just an exceptional product: exclusive, rare gemstones crafted into bespoke jewellery for discerning collectors and buyers. The kind of inventory that commands attention when people know it exists. The challenge was making sure they did.</p>
<p class="cs-p">Starting from scratch in the luxury goods market requires more than product posts. Buyers need education. They need provenance. They need to understand why a particular stone is extraordinary before they can justify the investment. Without content, GPS Gems was completely invisible.</p>`,
    strategyHtml: `<div class="cs-sec-title">Educate. Elevate. Let the stones do the selling.</div>
<p class="cs-p">With no existing content to work with, we built GPS Gems' entire social identity using AI-generated visuals. High-end, editorial-quality imagery of gemstones — rubies, sapphires, rare coloured stones — in environments that communicated luxury, rarity, and craftsmanship. No photography budget required. Just creative vision and the power of AI production.</p>
<p class="cs-p">We built an education-first content strategy around four core pillars: the origin stories of where each gem is sourced, the craftsmanship journey from raw stone to finished jewellery, gem knowledge posts teaching followers how to identify quality, and exclusive collection reveals that created genuine anticipation and desire.</p>
<p class="cs-p">The approach worked not because we advertised — but because we informed. Followers came for the knowledge and stayed for the gems. Without running a single paid lead ad, enquiries began arriving organically through Instagram — collectors, buyers, and gifters reaching out directly.</p>`,
    sidebar: [
      { title: 'The Brand', text: "GPS Gems — Thailand-based luxury gemstone brand dealing in exclusive, rare stones and bespoke jewellery crafted for collectors and high-value buyers." },
      { title: 'The Challenge', text: "Zero content. Zero social presence. Zero digital history. Built entirely from the ground up — content strategy and brand identity created simultaneously from scratch." },
      { title: 'Services Delivered', text: "Full social media strategy from scratch · AI-generated luxury content production · Education-first content pillars · Gem origin and craftsmanship storytelling · Collection reveal campaigns · Organic lead generation" },
      { title: 'The Proof', text: "Organic Instagram leads with zero paid advertising. Buyers already educated, already trusting the brand. The most efficient lead generation possible — no ad spend required." }
    ],
    results: [
      { num: 'Zero Ads', lbl: 'No paid lead generation — every enquiry came through organic social content' },
      { num: 'Organic', lbl: 'Instagram leads from collectors who discovered GPS Gems through educational content' },
      { num: 'AI-Built', lbl: 'Full luxury content library created from AI visuals — world-class output, zero photography budget' },
      { num: 'From Zero', lbl: 'Complete brand social identity built from scratch — strategy, content, and community by Unsocials' }
    ]
  }
};

function openCase(id) {
  const data = caseData[id];
  if (!data) return;

  // Background map (fallback if not defined in object, but we matched the file)
  const bgMap = {
    elysium: 'linear-gradient(180deg,#0e0120 0%,#220840 60%,#080808 100%)',
    alexa: 'linear-gradient(180deg,#0d0820 0%,#1a0a50 60%,#080808 100%)',
    skyview: 'linear-gradient(180deg,#020810 0%,#0a2840 60%,#080808 100%)',
    nomads: 'linear-gradient(180deg,#020c18 0%,#062840 60%,#080808 100%)',
    bamboo: 'linear-gradient(180deg,#041204 0%,#0e2c0e 60%,#080808 100%)',
    gps: 'linear-gradient(180deg,#160e02 0%,#362408 60%,#080808 100%)'
  };
  const bg = bgMap[id] || bgMap.elysium;
  
  let tagsHtml = data.tags.map(t => `<span class="cs-tag">\${t}</span>`).join('');
  
  let infoHtml = data.sidebar.map(s => `
    <div class="sidebar-card">
      <div class="sc-title">\${s.title}</div>
      <div class="sc-text">\${s.text}</div>
    </div>
  `).join('');
  
  let resultsHtml = data.results.map(r => `
    <div class="res-card">
      <div class="res-num">\${r.num}</div>
      <div class="res-label">\${r.lbl}</div>
    </div>
  `).join('');

  const html = `
    <div class="cs-hero" style="background:\${bg};">
      <button class="cs-back" onclick="closeCase()">← Back to All Cases</button>
      <div class="cs-eye">\${data.eye}</div>
      <div class="cs-title">\${data.title.replace(' ', '<br>')}</div>
      <div class="cs-tags">\${tagsHtml}</div>
    </div>
    <div class="cs-body">
      <div class="cs-cols">
        <div>
          \${data.problemHtml}
          \${data.strategyHtml}
        </div>
        <div>
          \${infoHtml}
        </div>
      </div>
      <div class="results">
        \${resultsHtml}
      </div>
    </div>
  `;
  document.getElementById('case-content').innerHTML = html;
  document.getElementById('case-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCase() {
  document.getElementById('case-overlay').classList.remove('open');
  document.body.style.overflow = '';
}