const fs = require('fs');
const cheerio = require('cheerio');

const content = [
  {
    num: "01  ·  DIGITAL REAL ESTATE",
    title: "Performance Marketing",
    intro: "We don't run ads. We build revenue systems.",
    p1: "Whether you're a restaurant filling tables every night, a beach club selling out events, a product brand scaling past its ceiling, or a service business generating qualified leads — we build the paid infrastructure that turns your marketing budget into trackable, scalable revenue.",
    p2: "Google, Meta, TikTok. WhatsApp click-to-chat funnels built to outperform a standard landing page. Direct booking and lead generation systems that eliminate middlemen entirely. Every baht tracked. Every campaign built to scale.",
    bullets: [
      "Google Search & Shopping Ads",
      "Meta & TikTok Conversion Campaigns",
      "WhatsApp Click-to-Chat Lead Generation",
      "Direct Funnel Strategy — Zero Middlemen",
      "Retargeting & Lookalike Audiences"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Any brand spending money on ads that isn't seeing a clear, trackable return."
    },
    stats: [
      { val: "3x", lbl: "Average ROAS across active campaigns" },
      { val: "฿0", lbl: "Wasted spend — every baht tracked" },
      { val: "Direct", lbl: "Bookings & leads. No middlemen." },
      { val: "Scale", lbl: "When the math works, we push harder" }
    ]
  },
  {
    num: "02  ·  DIGITAL IDENTITY",
    title: "Social Media Management",
    intro: "Your feed is your most valuable storefront. Most brands leave it unmanned.",
    p1: "We take complete ownership of your social presence — strategy, content calendar, daily execution, community management, growth. From lifestyle brands and beach clubs to luxury goods, F&B concepts and e-commerce businesses, we turn dormant channels into the most powerful sales and brand-building tool your business has.",
    p2: "We don't post for the sake of posting. Every piece of content has a purpose. Every week builds on the last. Every month the numbers go up.",
    bullets: [
      "Brand Voice & Grid Strategy",
      "Daily Content Execution",
      "Community Growth & Engagement",
      "Algorithm-Optimised Posting Schedules",
      "Monthly Analytics & Strategy Reviews"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Brands that know their social media should be working harder — and want someone to own it completely."
    },
    stats: [
      { val: "Daily", lbl: "Consistent high-end brand-aligned posts" },
      { val: "3x", lbl: "Average increase in organic engagement" },
      { val: "24/7", lbl: "Community management & lead nurturing" },
      { val: "Owned", lbl: "An audience you own, not renting from ads" }
    ]
  },
  {
    num: "03  ·  VISUAL DOMINATION",
    title: "Content Production",
    intro: "Shoot to convert. Every frame reverse-engineered to drive action.",
    p1: "We produce the visual content your brand needs to dominate feeds — high-energy reels, hook-led short form, lifestyle and editorial photography, UGC, event coverage, AI-enhanced visuals. For restaurants, clubs, product brands, events, lifestyle businesses and everything in between.",
    p2: "Content is not decoration. It is your most scalable salesperson — working 24 hours a day, finding your next customer while you sleep.",
    bullets: [
      "High-Energy & Hook-Led Reels",
      "Short-Form Video — Instagram, TikTok, YouTube Shorts",
      "Lifestyle & Editorial Photography",
      "UGC & Authentic Creator Content",
      "Event & Live Coverage",
      "Trial Reels & Format Testing"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Brands that need a constant stream of high-quality content without building an in-house team."
    },
    stats: [
      { val: "4K", lbl: "Cinema-grade quality for all assets" },
      { val: "Consistent", lbl: "Format-engineered for the algorithm" },
      { val: "Fast", lbl: "Rapid turnaround, culturally relevant" },
      { val: "Scale", lbl: "Vast content libraries from single shoots" }
    ]
  },
  {
    num: "04  ·  THE FUTURE IS HERE",
    title: "AI Creative Automation",
    intro: "While competitors wait weeks for a shoot day — we generate at pace, in hours.",
    p1: "We use advanced AI to produce luxury visual assets, brand representatives, campaign graphics and social content at scale — for any industry, any brand, any brief. Product brands. Lifestyle. Gems. Fashion. Events. F&B. If it needs to look incredible, AI creative does it faster and with more variation than traditional production workflows.",
    p2: "Advanced generative AI models tailored specifically for your brand style, delivering high-end visual assets at scale.",
    bullets: [
      "Generative Product & Lifestyle Photography",
      "AI-Enhanced Social Content at Scale",
      "Conceptual & Editorial AI Graphics",
      "Event Promotion Graphics — Zero Design Bottleneck",
      "Custom AI Model Development"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Any brand that needs luxury-level visuals without luxury-level production budgets or timelines."
    },
    stats: [
      { val: "Zero", lbl: "Need for crews, sets or traditional talent" },
      { val: "Full", lbl: "Ownership and control over every detail" },
      { val: "Days", lbl: "Not weeks. Campaigns delivered fast." },
      { val: "Wide", lbl: "A wide range of variations, angles and concepts" }
    ]
  },
  {
    num: "05  ·  YOUR DIGITAL HEADQUARTERS",
    title: "Website Development",
    intro: "Your website is the one place on the internet you fully own. Make it count.",
    p1: "Every ad you run, every post you make, every piece of content you produce — it all eventually leads here. If what they find doesn't convert, everything before it was wasted.",
    p2: "We build websites that work. Fast, sharp, visually premium and engineered to turn visitors into customers. No generic templates. No bloated agency processes. Just clean, purposeful digital experiences that look as good as your brand deserves and perform as hard as your business demands.",
    bullets: [
      "Brand-Led Website Design & Development",
      "Landing Pages Built to Convert",
      "E-Commerce & Booking System Integration",
      "Mobile-First, Speed-Optimised Builds",
      "SEO Foundation & Technical Setup",
      "Ongoing Maintenance & Updates"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Brands launching for the first time, brands whose current site doesn't reflect who they've become, and brands whose website traffic converts at a rate that embarrasses them."
    },
    stats: [
      { val: "Fast", lbl: "Optimised for fast load times" },
      { val: "Sharp", lbl: "Design that matches your brand ambition" },
      { val: "Built", lbl: "To convert, not just to look good" },
      { val: "Yours", lbl: "Full ownership. No platform dependency." }
    ]
  },
  {
    num: "06  ·  THE BLUEPRINT",
    title: "Brand Strategy",
    intro: "Tactics without strategy is just noise. Most brands are making a lot of noise.",
    p1: "We build the foundational DNA of your brand — positioning, narrative, visual identity — so that every ad you run, every post you make, every piece of content you produce and every page of your website lands with force and consistency.",
    p2: "We work across hospitality, F&B, lifestyle, luxury goods, e-commerce and service businesses. Because a beach club in Krabi needs a completely different strategy than a gem brand in Bangkok — and we know the difference.",
    bullets: [
      "Brand Positioning & Category Design",
      "Voice, Narrative & Messaging Framework",
      "Visual Identity Systems",
      "Competitor Analysis & Market Gap Identification",
      "Go-to-Market Strategy"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "New brands that need to launch right the first time. Existing brands that have outgrown their identity."
    },
    stats: [
      { val: "One", lbl: "Unified voice across every touchpoint" },
      { val: "Moat", lbl: "Positioning barriers competitors struggle to cross" },
      { val: "Price", lbl: "Positioning that supports stronger pricing" },
      { val: "Clarity", lbl: "Absolute alignment on who you are" }
    ]
  },
  {
    num: "07  ·  THE OUTSIDE EYE",
    title: "Brand Consultancy",
    intro: "Sometimes you don't need an agency to run everything. You need someone who tells you exactly what to do next.",
    p1: "Our Brand Consultancy service gives you direct access to our senior strategists — for businesses that want expert guidance without a full retainer. One session can save months of wasted budget. A monthly advisory relationship can reshape the entire trajectory of your brand.",
    p2: "Honest. Direct. No agenda except your growth. No account managers in the middle. No politics. Just the people who built the strategies that generated results — telling you exactly what they see and exactly what to change.",
    bullets: [
      "One-Off Brand & Marketing Audits",
      "Ongoing Monthly Strategy Advisory",
      "Social Media & Content Direction",
      "Campaign Review & Optimisation Guidance",
      "Team Training & Internal Upskilling",
      "Investor & Pitch Deck Narrative Support"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Founders and business owners who want expert eyes on their brand without a full-service retainer. Also ideal for in-house marketing teams that need senior strategic direction."
    },
    stats: [
      { val: "Honest", lbl: "Straight answers, no sugar-coating" },
      { val: "Senior", lbl: "Direct access to senior strategists, not junior staff" },
      { val: "Flexible", lbl: "Sessions or ongoing — your call" },
      { val: "Fast", lbl: "Insights and next steps, not a 6-week onboarding" }
    ]
  },
  {
    num: "08  ·  THE THIRD DIMENSION",
    title: "CGI & 3D Production",
    intro: "When reality is not enough — we build worlds.",
    p1: "Some products cannot be photographed. Some spaces do not exist yet. Some ideas are too big for a camera. CGI and 3D production gives your brand the ability to show the impossible — with high-precision detail, at any scale, for any medium.",
    p2: "From luxury real estate renders that sell properties before they are built, to product visualisations that help e-commerce convert more effectively, to 3D brand assets that live across digital, social and broadcast — we create the visuals that no camera can capture.",
    bullets: [
      "Photorealistic Product Visualisation & Rendering",
      "Architectural & Real Estate 3D Renders",
      "3D Brand Assets & Motion Graphics",
      "CGI Social Media Content",
      "Virtual Tours & Immersive 3D Environments",
      "3D Animation for Digital & Broadcast"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Real estate developers, product brands, luxury goods, architecture firms, and any brand that needs to show something that does not exist yet — or cannot be captured on a standard shoot."
    },
    stats: [
      { val: "Real", lbl: "High-precision quality, close to real photography" },
      { val: "Any", lbl: "Scale — from hero product to full environment" },
      { val: "Fast", lbl: "Renders typically faster than traditional shoot days" },
      { val: "Flexible", lbl: "Revisions and new angles without reshooting" }
    ]
  },
  {
    num: "09  ·  THE FUTURE OF FILM",
    title: "AI Film Production",
    intro: "Cinema-style storytelling. No crew. No location. Fewer limits.",
    p1: "AI film production is one of the most significant shifts in content creation since the smartphone. We use advanced AI video generation tools to produce cinematic brand films, product films and campaign videos — at a fraction of traditional production cost and time.",
    p2: "This is not low-quality AI content. This is strategically crafted film storytelling — written, directed and produced by our team, powered by AI. Visual storytelling that used to require a full film crew, delivered in days at a price that makes sense for more budgets.",
    bullets: [
      "AI Brand Films & Campaign Videos",
      "AI Product & Launch Films",
      "Short-Form AI Cinematic Content — Instagram, TikTok, YouTube",
      "AI-Generated Lifestyle & Narrative Films",
      "Concept-to-Screen in Days — Not Months",
      "AI Voice, Score & Sound Design Integration"
    ],
    target: {
      title: "WHO THIS IS FOR",
      desc: "Brands that want the impact of a film production without the cost or timeline. Startups launching products. Established brands refreshing campaign content. Any business with a story worth telling cinematically."
    },
    stats: [
      { val: "Days", lbl: "From brief to finished film" },
      { val: "Lower Cost", lbl: "Meaningful savings vs. traditional production" },
      { val: "Cinema-Style", lbl: "Strong visual quality, AI-produced" },
      { val: "Flexible", lbl: "Multiple creative directions to choose from" }
    ]
  }
];

const htmlFile = 'C:\\UNSOCIALS\\services.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

$('.svc-card').each((index, el) => {
  if (index >= content.length) return;
  const data = content[index];
  
  const left = $(el).find('.svc-left');
  
  let targetHtml = `
    <div class="svc-target" style="display:block !important; margin-top:24px; opacity:1; transform:none;">
      <span class="svc-target-lbl">${data.target.title}</span>
      <span class="svc-target-txt" style="color:rgba(255,255,255,0.7); font-family:'Space Grotesk',sans-serif; font-size:14px;">${data.target.desc}</span>
    </div>
  `;
  
  // Kept as a 1x4 grid for stats.
  let statsHtml = `
    <div class="svc-outcomes-grid" style="display:grid !important; grid-template-columns:repeat(4, 1fr); gap:12px; margin-top:16px; margin-bottom:24px; opacity:1; transform:none;">
      ${data.stats.map(s => `
        <div style="background:rgba(232, 255, 0, 0.05); border:1px solid var(--ac); border-radius:8px; padding:12px;">
          <div style="font-family:'Syne', sans-serif; font-size:18px; font-weight:800; color:var(--ac); line-height:1; margin-bottom:4px;">${s.val}</div>
          <div style="font-family:'Space Grotesk', sans-serif; font-size:11px; color:rgba(255,255,255,0.8);">${s.lbl}</div>
        </div>
      `).join('')}
    </div>
  `;

  let bulletsHtml = `
    <ul class="svc-deliverables" style="display:block !important; margin-top:16px; margin-bottom:16px; padding-left:20px; color:rgba(255,255,255,0.6); font-family:'Space Grotesk',sans-serif; font-size:14px; line-height:1.6; opacity:1; transform:none;">
      ${data.bullets.map(b => `<li style="margin-bottom:4px;">${b}</li>`).join('')}
    </ul>
  `;

  // We wrap ONLY p2 and bullets in the read-more content.
  let moreContentHtml = `
    <div class="svc-more-content" style="display:none; margin-top:12px;">
      <p class="svc-desc" style="max-width:600px;">${data.p2}</p>
      ${bulletsHtml}
    </div>
  `;

  const newHtml = `
    <div class="svc-num">${data.num}</div>
    <h2 class="svc-title reveal-up">${data.title}</h2>
    <div class="svc-desc-container" style="max-width:100%;">
      <p class="svc-desc reveal-up" style="font-weight:600; color:#fff; margin-bottom:12px; max-width:600px;">${data.intro}</p>
      <p class="svc-desc reveal-up" style="max-width:600px; margin-bottom:12px;">${data.p1}</p>
      
      ${moreContentHtml}
      
      <button class="read-more-btn" style="margin-bottom:24px;" onclick="const p=this.previousElementSibling; if(p.style.display==='none'){p.style.display='block';this.innerText='Read Less -';}else{p.style.display='none';this.innerText='Read More +';}">Read More +</button>
      
      ${targetHtml}
      ${statsHtml}
    </div>
  `;
  
  left.html(newHtml);
  
  // Make the svc-left wider so the 1x4 grid fits beautifully
  left.css('width', '100%');
  left.css('max-width', '800px');
});

// For .svc-card-inner, we might want to increase the grid size slightly
$('.svc-card-inner').each((index, el) => {
   $(el).css('grid-template-columns', 'minmax(0, 1fr) 280px');
   $(el).css('gap', '30px');
});

fs.writeFileSync(htmlFile, $.html());
console.log('Successfully updated services.html');
