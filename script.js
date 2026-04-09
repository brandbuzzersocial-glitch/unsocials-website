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
      // Remove the reverse mapping to keep it highlighted once seen, or add it for replay
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

  // 3. Magnetic Hover Buttons (Owled Style)
  document.querySelectorAll('.nbook, .cta-btn, .cta-p, .cta-s, .cc').forEach(function(btn){
    if(btn.classList.contains('cc')) return; // handled in 3D tilt below
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
      var xPct = (x / rect.width - 0.5) * 2; // -1 to 1
      var yPct = (y / rect.height - 0.5) * 2; // -1 to 1
      
      gsap.to(card, {
        rotateY: xPct * 8, // max 8 degrees
        rotateX: -yPct * 8,
        transformPerspective: 1200,
        duration: 0.4,
        ease: 'power2.out'
      });
      // subtle glare effect by sliding bg or overlay
      var ov = card.querySelector('.cc-ov');
      if(ov) gsap.to(ov, { opacity: 0.85 + (yPct * 0.15), duration: 0.2 });
    });
    card.addEventListener('mouseleave', function(){
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'power2.out' });
      var ov = card.querySelector('.cc-ov');
      if(ov) gsap.to(ov, { opacity: 0, duration: 0.5 }); // Let CSS hover handle default or reset it
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

  function drawStars(t){
    ctx.clearRect(0,0,W,H);
    stars.forEach(function(s){
      var alpha = 0.2 + 0.5 * Math.abs(Math.sin(t*s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,220,150,'+alpha+')';
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
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
  var gl=canvas.getContext('webgl');
  if(!gl) return;
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;gl.viewport(0,0,canvas.width,canvas.height)}
  resize();window.addEventListener('resize',resize);

  var vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
  var fs=`
    precision highp float;
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
  function draw(){
    requestAnimationFrame(draw);
    var t=(performance.now()-start)/1000;
    gl.uniform1f(tLoc,t);
    gl.uniform2f(rLoc,canvas.width,canvas.height);
    gl.uniform2f(mLoc,mx2,my2);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  }
  draw();
})();

// ─── CASE STUDIES DATA ───
var cases = {
  elysium: {
    bg:'linear-gradient(180deg,#0e0120 0%,#220840 60%,#080808 100%)',
    eye:'5-Star Hotel · Pattaya Prathumnak Hill · End-to-End Brand Transformation',
    title:'Elysium<br>Pattaya',
    tags:['Social Revamp','Google Hotel Ads','Meta Performance','AI Content','Direct Bookings'],
    problem:{
      title:'A 5-star hotel that looked like a 2-star on social.',
      paras:[
        'Elysium Pattaya is one of the city\'s most premium properties — a 5-star boutique hotel perched on Prathumnak Hill. But when they came to us, their digital presence told a very different story.',
        'Their social media was a graveyard of basic offer graphics, stock vectors, and promotional banners that screamed discount hotel — not luxury destination. Website bookings were at zero. Every single reservation came through OTAs — Agoda, Booking.com, Expedia — with commission fees eating directly into revenue.',
        'Elysium had the product. They needed the story — and the system to monetise it.'
      ]
    },
    strategy:{
      title:'Luxury content. Performance ads. Direct revenue.',
      paras:[
        '<strong>Phase 1 — Social Transformation:</strong> We stripped the account back to zero and rebuilt from the ground up. Luxury lifestyle shoots capturing the hotel\'s rooftop pool, panoramic views, and intimate suite experiences. AI-enhanced visuals that elevated the property into something cinematic.',
        '<strong>Phase 2 — Google Hotel Search Ads:</strong> We launched Hotel Search campaigns targeting travellers actively searching for hotels in Pattaya — worldwide. Guests from Europe, the Middle East, and Asia saw Elysium at the top of Google results.',
        '<strong>Phase 3 — Meta Awareness & Direct Booking:</strong> Awareness campaigns across Meta targeting top feeder countries. We offered a complimentary mini bar and 20% off for guests who booked directly via Instagram or WhatsApp — bypassing OTAs entirely.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'Elysium Pattaya — 5-star boutique hotel on Prathumnak Hill, one of Pattaya\'s most prestigious luxury addresses.'},
      {t:'The Challenge',c:'Zero website revenue. 100% OTA dependency. Social media that didn\'t reflect the property\'s luxury positioning.'},
      {t:'Services Delivered',c:'Full social revamp · Luxury lifestyle shoots · AI-enhanced content · Google Hotel Search Ads · Meta campaigns · WhatsApp direct booking system'},
      {t:'Key Innovation',c:'A complimentary mini bar + 20% pre-booking offer positioned Elysium\'s direct channel as more attractive than any OTA.'}
    ],
    results:[
      {n:'1M THB',l:'Direct website revenue generated within 2 months of campaign launch'},
      {n:'∞%',l:'Website revenue growth — from absolute zero to 7-figure monthly revenue'},
      {n:'0% OTA',l:'Direct booking channel built — guests choosing Elysium over OTA platforms'},
      {n:'5★',l:'Social presence finally matching the luxury reality of Prathumnak Hill\'s finest hotel'}
    ]
  },
  alexa: {
    bg:'linear-gradient(180deg,#0a0420 0%,#160860 60%,#080808 100%)',
    eye:'Beach Club · Pattaya · Meta Ads & Social Media Management',
    title:'Alexa<br>Beach Club',
    tags:['Meta Ads','Social Media','Lifestyle Shoots','WhatsApp Campaigns','Brand Positioning'],
    problem:{
      title:'A beach club with no social identity.',
      paras:[
        'Alexa Beach Club had the location, the vibe, and the setup to be Pattaya\'s most talked-about venue. What it lacked was a social media presence that matched the energy inside.',
        'Without consistent content or a clear brand positioning, Alexa was invisible to the Bangkok crowd — the weekend visitors who drive the most value for any Pattaya venue. No content strategy, no reach, no reservations through social.'
      ]
    },
    strategy:{
      title:'Position as #1. Own the conversation.',
      paras:[
        'We executed full lifestyle photography and video shoots with models — content that communicated the Alexa experience before guests ever arrived. Every piece of content was crafted to trigger aspiration: sun, music, atmosphere.',
        'Meta awareness campaigns targeted Bangkok users who regularly travel to Pattaya on weekends. Combined with a WhatsApp Click-to-Chat reservation system, we turned awareness into direct bookings.',
        'The brand narrative was simple and aggressive: Alexa is Pattaya\'s #1 beach club. We said it everywhere until it became true.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'Alexa Beach Club — a premium Pattaya beach venue targeting Bangkok weekenders and international tourists.'},
      {t:'The Challenge',c:'No social identity, no content strategy, no direct booking mechanism. A great venue that was invisible online.'},
      {t:'Services Delivered',c:'Full social media management · Lifestyle shoots with models · Meta awareness campaigns · WhatsApp reservation system · Brand positioning'},
      {t:'Target Market',c:'Bangkok weekend travellers and international tourists visiting Pattaya — the highest-value guests for beach venue revenue.'}
    ],
    results:[
      {n:'2.6M',l:'Instagram reach generated through content and paid campaigns'},
      {n:'#1',l:'Positioned as Pattaya\'s number one beach club in the target audience\'s mind'},
      {n:'280+',l:'Direct reservation leads generated through WhatsApp campaigns'},
      {n:'Social',l:'From invisible to the most-talked-about beach venue in Pattaya'}
    ]
  },
  skyview: {
    bg:'linear-gradient(180deg,#020510 0%,#041430 60%,#080808 100%)',
    eye:'Hotel · Bangkok · WhatsApp Lead Generation',
    title:'Hotel<br>Skyview BKK',
    tags:['Meta Ads','WhatsApp Lead Gen','Direct Bookings','Cost Optimisation'],
    problem:{
      title:'Expensive ads. Expensive OTAs. Shrinking margins.',
      paras:[
        'Hotel Skyview Bangkok was running conversion campaigns designed to drive users to their website — the standard approach. The problem? Those campaigns were expensive, and the guests who converted still often ended up booking through OTAs anyway.',
        'The cycle was brutal: pay for the awareness, then pay OTA commission on the booking. Every reservation came with a double cost.'
      ]
    },
    strategy:{
      title:'Cut the middleman. Build the direct relationship.',
      paras:[
        'We replaced the expensive website conversion model with a WhatsApp Click-to-Chat campaign strategy. Instead of sending traffic to a booking page, we sent qualified leads directly into a WhatsApp conversation with the hotel team.',
        'The shift was immediate. Guests who reached out via WhatsApp were personally handled by the hotel — creating a warmer, more personal booking experience that converted at higher rates.',
        'With direct bookings, the hotel captured full room revenue with zero OTA commission. The personal touchpoint also meant better upselling, better reviews, and stronger guest retention.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'Hotel Skyview Bangkok — a Bangkok hotel competing in a crowded market dominated by OTA dependency.'},
      {t:'The Challenge',c:'High ad costs, high OTA commissions, low margins. No direct relationship with their own guests.'},
      {t:'Services Delivered',c:'Meta WhatsApp Click-to-Chat campaigns · Direct booking strategy · Cost-per-lead optimisation · OTA bypass framework'},
      {t:'The Result',c:'Cost per lead dropped from thousands in website traffic costs to just 50–100 THB per qualified WhatsApp conversation.'}
    ],
    results:[
      {n:'50–100',l:'THB cost per lead — dramatically lower than website conversion campaigns'},
      {n:'0%',l:'OTA commission on direct bookings — full revenue retained by the hotel'},
      {n:'Higher',l:'Conversion rates — personal WhatsApp conversations outperform booking forms'},
      {n:'Direct',l:'Guest relationships built — data owned, guests retained for future marketing'}
    ]
  },
  nomads: {
    bg:'linear-gradient(180deg,#041018 0%,#082840 60%,#080808 100%)',
    eye:'Hostel · Thailand · UGC & Social Media',
    title:'Nomads<br>Hostel Asia',
    tags:['UGC Strategy','Social Media','Organic Leads','3 Properties','Hostelworld #1'],
    problem:{
      title:'Three properties. Zero unified story.',
      paras:[
        'Nomads operates three hostel properties across Thailand — each with its own personality and guest mix. The problem was they weren\'t telling any of their stories effectively on social.',
        'The hostel market runs on social proof. Guests choose hostels based on what they see happening there: the parties, the connections, the adventures. Nomads had all of this — the content just didn\'t exist.'
      ]
    },
    strategy:{
      title:'Put the guests centre stage.',
      paras:[
        'We built a UGC-first content strategy that put real Nomads guests at the heart of every piece of content. Pub crawls filmed as chaotic, infectious adventures. Pool parties captured with the energy of being inside them. Chance encounters turned into micro-documentaries.',
        'The strategy worked because it was authentic. Real guests. Real moments. Real reasons for someone watching in Berlin or Sydney to think: "That\'s where I\'m staying next trip."',
        'Instagram became a direct lead generation channel. People reached out not because they\'d seen an ad — but because they\'d fallen in love with what they saw.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'Nomads Hostel Asia — three-property hostel group across Thailand targeting backpackers and social travellers.'},
      {t:'The Challenge',c:'No unified content strategy across three properties. Missing the authentic UGC content that drives hostel bookings.'},
      {t:'Services Delivered',c:'UGC content strategy · Social media management · Event content coverage · Organic lead generation · Community building'},
      {t:'The Proof',c:'Best Hostel in Asia award from Hostelworld during our partnership. The industry\'s most trusted rating — earned, not paid for.'}
    ],
    results:[
      {n:'#1',l:'Best Hostel in Asia — Hostelworld award won during Unsocials partnership'},
      {n:'3',l:'Properties with unified, authentic social media presence and content strategy'},
      {n:'Organic',l:'Lead generation through Instagram — guests reaching out directly from content'},
      {n:'Community',l:'Built a loyal follower community that markets Nomads to new guests continuously'}
    ]
  },
  bamboo: {
    bg:'linear-gradient(180deg,#041204 0%,#0a2c0a 60%,#080808 100%)',
    eye:'Beach Club · Krabi · Social Revamp & Event Content',
    title:'Bamboo<br>Beach Club',
    tags:['Social Revamp','AI Graphics','Event Content','Daily Posting','Krabi #1'],
    problem:{
      title:'An incredible venue with an invisible social presence.',
      paras:[
        'Bamboo Beach Club in Krabi is one of the island\'s most vibrant venues — packed with events, parties, themed nights, and tropical energy. People visiting Krabi already knew about Bamboo by word of mouth.',
        'But social media? A complete afterthought. No event promotion. No night coverage. No stories showing the atmosphere. No content that made someone in Bangkok say "we need to be there this weekend."'
      ]
    },
    strategy:{
      title:'Show Krabi what it\'s been missing. Then show the world.',
      paras:[
        'We took over Bamboo\'s social from the ground up. High-energy party reels edited to match the music, the mood, and the crowd. Every major event got its own content series: fire shows, foam nights, live DJ sets, themed pool parties.',
        'We introduced AI-generated graphics that gave Bamboo a visual identity beyond photography — cosmic beach-party aesthetics, event announcement designs, and branded content that stood out in feeds dominated by generic tropical imagery.',
        'A daily posting rhythm combined with live Stories coverage on every event night gave followers a real-time window into Bamboo\'s world. The narrative became undeniable: if you\'re in Krabi and haven\'t visited Bamboo Beach Club, your trip is not complete.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'Bamboo Beach Club Krabi — one of Krabi\'s most energetic beach venues, known for themed events, parties, and an electric tropical atmosphere.'},
      {t:'The Challenge',c:'Great venue with a weak social presence. Events happening nightly with zero documentation. No content strategy.'},
      {t:'Services Delivered',c:'Full social revamp · Party and event reel production · AI-generated graphics · Daily posting strategy · Live Stories coverage · Social media management'},
      {t:'The Narrative',c:'"If you\'re in Krabi and haven\'t been to Bamboo Beach Club — your trip isn\'t finished." A positioning line that became the brand\'s social identity.'}
    ],
    results:[
      {n:'Krabi #1',l:'Bamboo positioned as Krabi\'s must-visit beach club — the destination, not just an option'},
      {n:'Daily',l:'Consistent posting with live Stories coverage on every major event night'},
      {n:'AI + Real',l:'AI conceptual graphics combined with real event footage — a premium, distinctive aesthetic'},
      {n:'Ongoing',l:'Full social media management — continuous content, community growth, event marketing'}
    ]
  },
  gps: {
    bg:'linear-gradient(180deg,#181004 0%,#3c2808 60%,#080808 100%)',
    eye:'Luxury Gemstones · Thailand · Organic Social Growth',
    title:'GPS<br>Gems',
    tags:['AI Content Strategy','Social from Scratch','Organic Lead Gen','Education Marketing'],
    problem:{
      title:'Extraordinary gems. Zero digital presence.',
      paras:[
        'GPS Gems came to us at the very beginning — no social media, no content library, no digital footprint. Just an exceptional product: exclusive, rare gemstones crafted into bespoke jewellery for discerning collectors.',
        'Starting from scratch in the luxury goods market requires more than product posts. Buyers need education. They need provenance. They need to understand why a particular stone is extraordinary before they can justify the investment.'
      ]
    },
    strategy:{
      title:'Educate. Elevate. Let the stones do the selling.',
      paras:[
        'With no existing content to work with, we built GPS Gems\' entire social identity using AI-generated visuals. High-end, editorial-quality imagery of gemstones — rubies, sapphires, rare coloured stones — in environments that communicated luxury and rarity. No photography budget required.',
        'We built an education-first content strategy around four core pillars: origin stories of where each gem is sourced, the craftsmanship journey from raw stone to finished jewellery, gem knowledge posts, and exclusive collection reveals.',
        'The approach worked not because we advertised — but because we informed. Followers came for the knowledge and stayed for the gems. Without running a single paid lead ad, enquiries began arriving organically.'
      ]
    },
    sidebar:[
      {t:'The Brand',c:'GPS Gems — Thailand-based luxury gemstone brand dealing in exclusive, rare stones and bespoke jewellery for collectors.'},
      {t:'The Challenge',c:'Zero content. Zero social presence. Zero digital history. Built entirely from the ground up.'},
      {t:'Services Delivered',c:'Full social strategy from scratch · AI-generated luxury content · Education-first content pillars · Gem origin storytelling · Collection reveal campaigns · Organic lead generation'},
      {t:'The Proof',c:'Organic Instagram leads with zero paid advertising. Buyers already educated and trusting the brand before first contact.'}
    ],
    results:[
      {n:'Zero Ads',l:'No paid lead generation — every enquiry came through organic social content'},
      {n:'Organic',l:'Instagram leads from collectors who discovered GPS Gems through educational content'},
      {n:'AI-Built',l:'Full luxury content library created from AI visuals — world-class output, zero photography budget'},
      {n:'From Zero',l:'Complete brand social identity built from scratch — strategy, content, and community by Unsocials'}
    ]
  }
};

function openCase(name){
  var d=cases[name];
  if(!d) return;
  var html='<div class="cs-hero" style="background:'+d.bg+'">';
  html+='<div class="cs-eye">'+d.eye+'</div>';
  html+='<div class="cs-title">'+d.title+'</div>';
  html+='<div class="cs-tags">'+d.tags.map(function(t){return'<span class="cs-tag">'+t+'</span>'}).join('')+'</div>';
  html+='</div>';
  html+='<div class="cs-body"><div class="cs-cols"><div>';
  html+='<div class="cs-label">The Problem</div>';
  html+='<div class="cs-stitle">'+d.problem.title+'</div>';
  d.problem.paras.forEach(function(p){html+='<p class="cs-p">'+p+'</p>'});
  html+='<div class="cs-label">The Strategy</div>';
  html+='<div class="cs-stitle">'+d.strategy.title+'</div>';
  d.strategy.paras.forEach(function(p){html+='<p class="cs-p">'+p+'</p>'});
  html+='</div><div>';
  d.sidebar.forEach(function(s){html+='<div class="sidebar-card"><div class="sc-title">'+s.t+'</div><div class="sc-text">'+s.c+'</div></div>'});
  html+='</div></div>';
  html+='<div class="results-g">';
  d.results.forEach(function(r){html+='<div class="res-c"><div class="res-num">'+r.n+'</div><div class="res-lbl">'+r.l+'</div></div>'});
  html+='</div></div>';
  document.getElementById('case-content').innerHTML=html;
  var ov=document.getElementById('case-overlay');
  ov.classList.add('open');
  ov.scrollTop=0;
  document.body.style.overflow='hidden';
}

function closeCase(){
  document.getElementById('case-overlay').classList.remove('open');
  document.body.style.overflow='';
}


// Close on escape
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeCase()});

// ─── U SECTION COLLAGE PARALLAX ───
(function(){
  const collage = document.getElementById('u-collage');
  if(!collage) return;
  const layers = collage.querySelectorAll('.u-lay');
  let mx=0, my=0, cx=0, cy=0;
  
  document.getElementById('u-section').addEventListener('mousemove', function(e){
    let rect = collage.getBoundingClientRect();
    mx = e.clientX - (rect.left + rect.width/2);
    my = e.clientY - (rect.top + rect.height/2);
  });
  
  document.getElementById('u-section').addEventListener('mouseleave', function(){
    mx = 0; my = 0;
  });

  function anim(){
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    
    let rect = collage.getBoundingClientRect();
    // Scroll offset (distance from center of screen)
    let dy = (rect.top + rect.height/2) - (window.innerHeight/2);
    // Limit extreme parallax if user scrolls too far
    if(dy > 800) dy = 800;
    if(dy < -800) dy = -800;
    
    layers.forEach(layer => {
      let speed = parseFloat(layer.getAttribute('data-spd')) || 0;
      let yOffset = dy * speed;
      // Mouse moves opposite to cursor slightly for 3D effect
      let xHover = -cx * speed;
      let yHover = -cy * speed;
      layer.style.transform = `translate3d(${xHover}px, ${yOffset + yHover}px, 0)`;
    });
    requestAnimationFrame(anim);
  }
  anim();
})();