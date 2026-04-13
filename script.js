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
})();