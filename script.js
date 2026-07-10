/* ==========================================================================
   CONFIG
   Edit everything in this block to personalize the site. No other file
   needs to change for basic personalization.
   ========================================================================== */
const CONFIG = {
  herName: "Mary",                 // shown in hero subheading
  yourName: "James",                // shown in the final signature
  startDate: "2026-07-14T00:00:00",// when you two became "together" — ISO format

  timeline: [
    { title: "How We Met", date: "The Beginning", body: "A completely ordinary day that quietly became the most important one I'd lived so far." },
    { title: "Our First Conversation", date: "Days Later", body: "I remember trying to sound casual while typing and deleting the same message four times." },
    { title: "First Date", date: "Weeks Later", body: "I was nervous the whole drive there. I stopped being nervous the second you laughed." },
    { title: "Our First Laugh Together", date: "That Same Night", body: "I don't even remember the joke. I remember deciding I wanted to hear that laugh forever." },
    { title: "Our Favorite Adventure", date: "Somewhere In Between", body: "The trip where nothing went to plan and it turned into the story we tell the most." },
    { title: "Today", date: "Right Now", body: "Still here. Still choosing you. Still the easiest decision I make every single day." }
  ],

  // 100 reasons — edit freely, order doesn't matter
  reasons: [
    "Because your smile fixes my worst days.",
    "Because your laugh is my favorite sound.",
    "Because you believe in me even when I don't.",
    "Because home is wherever you are.",
    "Because you remember the small things I mention once.",
    "Because you make ordinary Tuesdays feel like something.",
    "Because you're the first person I want to tell things.",
    "Because you're kind to people who can't do anything for you.",
    "Because you dance in the kitchen when you think no one's watching.",
    "Because you make my coffee just how I like it.",
    "Because you never let me apologize for having feelings.",
    "Because your hands fit perfectly in mine.",
    "Because you make me want to be better, not perfect.",
    "Because you still get excited about things you love.",
    "Because you fight fair, even when it's hard.",
    "Because you say what you mean.",
    "Because you never make me feel small.",
    "Because you're the calm in every storm.",
    "Because you remember how I take my tea.",
    "Because your voice is the last thing I want to hear at night.",
    "Because you make my family laugh.",
    "Because you're patient with me on my bad days.",
    "Because you never keep score.",
    "Because you love with your whole chest.",
    "Because you make plans and actually show up for them.",
    "Because you ask how I'm really doing.",
    "Because you're my favorite person to do nothing with.",
    "Because you make the hard days feel survivable.",
    "Because you never let a fight go to bed unfinished.",
    "Because you're proud of me out loud.",
    "Because you keep every little promise.",
    "Because you make me feel chosen, every day.",
    "Because you're curious about the world.",
    "Because you still ask about my day, every day.",
    "Because you know when I need quiet and when I need noise.",
    "Because you're gentle with things that are breakable.",
    "Because you're stubborn about the right things.",
    "Because you make friends with strangers.",
    "Because you remember birthdays that aren't your own.",
    "Because you look at me like I'm still new.",
    "Because you make the ordinary feel chosen.",
    "Because you never rush me through hard feelings.",
    "Because you're honest, even when it costs you something.",
    "Because you save me the last bite without being asked.",
    "Because you text me when you land safely.",
    "Because you're brave about things that scare you.",
    "Because you make the car the best place to talk.",
    "Because you notice when I'm quiet.",
    "Because you learned my love language without a book.",
    "Because you make good on your word.",
    "Because you still hold my hand in public.",
    "Because you're silly with me when no one else gets to see it.",
    "Because you cheer for people who used to compete with you.",
    "Because your hugs actually fix things.",
    "Because you make me feel safe enough to be soft.",
    "Because you never let me feel alone in a room full of people.",
    "Because you ask before you assume.",
    "Because you show up early when it matters.",
    "Because you're loyal without making it a performance.",
    "Because you remember how I like my eggs.",
    "Because you make me laugh until it's silent.",
    "Because you keep the playlists from our early days.",
    "Because you say sorry first, even when it's not fully your fault.",
    "Because you make space for my weird hobbies.",
    "Because you love my strange sense of humor.",
    "Because you never compare me to anyone.",
    "Because you plan surprises even though you're bad at keeping secrets.",
    "Because you're the reason I believe in good mornings.",
    "Because you make time feel slower in the best way.",
    "Because you never let pride win an argument.",
    "Because you still get nervous before seeing me.",
    "Because you make the hard conversations easier just by being you.",
    "Because you notice the tiny wins I forget to celebrate.",
    "Because you carry the heavy bags without making it a thing.",
    "Because you remember the exact way I like to be comforted.",
    "Because you never let me go to bed angry.",
    "Because you turned my worst year into a better one.",
    "Because you make forever sound like a reasonable plan.",
    "Because you keep choosing us on the boring days too.",
    "Because you send me songs that made you think of me.",
    "Because you're the reason 'home' stopped meaning a place.",
    "Because you still write me notes for no reason.",
    "Because you know exactly when to just listen.",
    "Because you make my anxious thoughts feel smaller.",
    "Because you never flinch at my messy moments.",
    "Because you remember how we met, in detail, without prompting.",
    "Because you're excited for a future that includes me in it.",
    "Because you make apologies feel like care instead of guilt.",
    "Because you love loudly and without apology.",
    "Because you're the softest place I know.",
    "Because you make me want to build something that lasts.",
    "Because you still choose me on your worst days.",
    "Because you say 'I love you' like you mean it every time.",
    "Because you make growing older sound like an adventure.",
    "Because your version of forever includes me in it.",
    "Because of the way you say my name.",
    "Because you make ordinary Sundays feel like enough.",
    "Because every reason above is true, and there are ninety-nine more like it.",
    "Because I would write a hundred more of these without running out."
  ],

  gallery: [
    { caption: "How we met" },
    { caption: "First date jitters" },
    { caption: "That trip we still talk about" },
    { caption: "A random Tuesday, somehow perfect" },
    { caption: "The photo you hate that I love" },
    { caption: "Late night drive" },
    { caption: "Your laugh, mid-joke" },
    { caption: "Us, most days" }
  ],

  dreams: [
    { icon: "&#9992;", title: "Travel Together", desc: "New cities, bad maps, and getting gloriously lost in them." },
    { icon: "&#127968;", title: "Build A Home", desc: "Somewhere that's ours, down to the mismatched mugs." },
    { icon: "&#127749;", title: "Watch Sunsets", desc: "Same sky, same two people, a thousand more times." },
    { icon: "&#128664;", title: "Late-Night Drives", desc: "No destination required. Just you, me, and the radio." },
    { icon: "&#128173;", title: "Grow Old Together", desc: "Wrinkles, inside jokes nobody else understands, and still choosing this." },
    { icon: "&#127837;", title: "Slow Sunday Mornings", desc: "Forever, on repeat." }
  ],

  notes: [
    { short: "I miss you", full: "Even when we spoke this morning." },
    { short: "You're beautiful", full: "In the unposed, unfiltered, everyday way." },
    { short: "My favorite notification", full: "Your name lighting up my screen." },
    { short: "I'm proud of you", full: "For more things than I say out loud." },
    { short: "I'd choose you forever", full: "In every version of this life." },
    { short: "Thank you", full: "For loving me on the hard days too." },
    { short: "You make sense to me", full: "Even the parts you think are complicated." },
    { short: "Come home soon", full: "The couch feels bigger without you." }
  ],

  // add real files to assets/music/ and list them here
  playlist: [
    { title: "Our Song", artist: "Add a real track", src: "" },
    { title: "The One From The Drive", artist: "Add a real track", src: "" },
    { title: "First Dance", artist: "Add a real track", src: "" }
  ],

  loveLetter: `My love,

If you're reading this, it means the whole website worked, and somehow you scrolled all the way here without me having to explain any of it out loud — which is good, because I'm much braver in code than I am in person.

I wanted to make something that couldn't fit in a text message. Something that took time, the way you deserve things that take time. Every section of this, the terrible jokes, the too-many hearts, the reasons I definitely undercounted, is just me trying to say one simple thing in the most complicated possible way: I love you. Completely, and on purpose, and on every ordinary day in between the big ones.

Thank you for being the easiest person to love and the hardest person to deserve.

Yours, always.`
};

/* ==========================================================================
   UTILITIES
   ========================================================================== */
const $  = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  initEditableLabels();
  initLoader();
  initCursor();
  initScrollProgress();
  initBackToTop();
  initStarfield();
  initFloatingHearts();
  initMagneticButtons();
  initReveals();
  initTimeline();
  initReasons();
  initCounter();
  initGallery();
  initLetter();
  initHeart();
  initWheel();
  initDreams();
  initNotes();
  initPlayer();
  initSurprise();
  initEasterEggs();
});

/* ==========================================================================
   EDITABLE LABELS
   ========================================================================== */
function initEditableLabels(){
  $$('[data-edit="her-name"]').forEach(el => el.textContent = CONFIG.herName);
  $$('[data-edit="your-name"]').forEach(el => el.textContent = CONFIG.yourName);
  const startLabel = $('#counterStartLabel');
  if(startLabel){
    const d = new Date(CONFIG.startDate);
    startLabel.textContent = d.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });
  }
}

/* ==========================================================================
   LOADER
   ========================================================================== */
function initLoader(){
  const loader = $('#loader');
  const textEl = $('#loaderText');
  const barFill = $('#loaderBarFill');
  const heartsWrap = $('#loaderHearts');
  const main = $('#mainContent');

  const messages = [
    "Loading memories...",
    "Collecting moments...",
    "Finding every reason I love you...",
    "Preparing something special..."
  ];

  // scatter a few floating hearts in the loader
  for(let i=0;i<16;i++){
    const h = document.createElement('span');
    h.innerHTML = '&#10084;';
    h.style.left = Math.random()*100 + '%';
    h.style.animationDuration = (4 + Math.random()*4) + 's';
    h.style.animationDelay = (Math.random()*4) + 's';
    h.style.fontSize = (10 + Math.random()*10) + 'px';
    heartsWrap.appendChild(h);
  }

  let step = 0;
  let progress = 0;
  textEl.textContent = messages[0];

  const msgInterval = setInterval(() => {
    step = (step + 1) % messages.length;
    textEl.style.opacity = 0;
    setTimeout(() => { textEl.textContent = messages[step]; textEl.style.opacity = 1; }, 350);
  }, 800);

  const progInterval = setInterval(() => {
    progress = Math.min(100, progress + Math.random()*18);
    barFill.style.width = progress + '%';
    if(progress >= 100){
      clearInterval(progInterval);
      clearInterval(msgInterval);
      setTimeout(finishLoading, 500);
    }
  }, 300);

  function finishLoading(){
    loader.classList.add('is-hidden');
    main.classList.remove('main-hidden');
    main.style.transition = 'opacity 1.2s ease';
    main.style.opacity = '1';
    setTimeout(() => loader.remove(), 1200);
  }
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function initCursor(){
  if(window.matchMedia('(hover:none), (pointer:coarse)').matches) return;
  const glow = $('#cursorGlow');
  const dot = $('#cursorDot');
  let gx=innerWidth/2, gy=innerHeight/2, dx=gx, dy=gy;

  window.addEventListener('mousemove', e => {
    dx = e.clientX; dy = e.clientY;
  });

  function loop(){
    gx += (dx-gx)*0.12; gy += (dy-gy)*0.12;
    glow.style.transform = `translate(${gx}px,${gy}px)`;
    dot.style.transform = `translate(${dx}px,${dy}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  $$('button, a, .reason-card, .gallery-item, .note').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('is-active'));
    el.addEventListener('mouseleave', () => dot.classList.remove('is-active'));
  });
}

/* ==========================================================================
   SCROLL PROGRESS + BACK TO TOP
   ========================================================================== */
function initScrollProgress(){
  const bar = $('#scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  }, { passive:true });
}

function initBackToTop(){
  const btn = $('#backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 700);
  }, { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ==========================================================================
   STARFIELD (canvas)
   ========================================================================== */
function initStarfield(){
  const canvas = $('#starCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;

  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
    const count = Math.floor((w*h)/9000);
    stars = Array.from({length: Math.min(count, 260)}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.4 + 0.2,
      phase: Math.random()*Math.PI*2,
      speed: 0.005 + Math.random()*0.015
    }));
  }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = '#f6ece2';
    stars.forEach(s => {
      const twinkle = 0.4 + Math.sin(t*s.speed*10 + s.phase)*0.35;
      ctx.globalAlpha = Math.max(0, twinkle);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    t += 1;
    if(!prefersReducedMotion) requestAnimationFrame(draw);
  }
  draw();
}

/* ==========================================================================
   FLOATING HEARTS (ambient, low frequency)
   ========================================================================== */
function initFloatingHearts(){
  const wrap = $('#floatingHearts');
  if(prefersReducedMotion) return;
  setInterval(() => {
    if(document.hidden) return;
    const h = document.createElement('span');
    h.className = 'fh';
    h.innerHTML = '&#10084;';
    h.style.left = Math.random()*100 + '%';
    h.style.setProperty('--drift', (Math.random()*80-40) + 'px');
    h.style.fontSize = (10 + Math.random()*16) + 'px';
    h.style.animationDuration = (8 + Math.random()*6) + 's';
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 15000);
  }, 2200);
}

function spawnHeartsBurst(count = 24){
  const wrap = $('#floatingHearts');
  for(let i=0;i<count;i++){
    const h = document.createElement('span');
    h.className = 'fh';
    h.innerHTML = '&#10084;';
    h.style.left = Math.random()*100 + '%';
    h.style.setProperty('--drift', (Math.random()*140-70) + 'px');
    h.style.fontSize = (12 + Math.random()*20) + 'px';
    h.style.animationDuration = (5 + Math.random()*5) + 's';
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 11000);
  }
}

/* ==========================================================================
   MAGNETIC BUTTONS
   ========================================================================== */
function initMagneticButtons(){
  if(window.matchMedia('(hover:none)').matches) return;
  $$('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });

  $('#beginBtn').addEventListener('click', () => {
    $('#story').scrollIntoView({ behavior:'smooth' });
  });
}

/* ==========================================================================
   SCROLL REVEALS (Intersection Observer)
   ========================================================================== */
function initReveals(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });

  document.addEventListener('reveal:register', e => io.observe(e.detail));
  $$('.reveal').forEach(el => io.observe(el));
}
function registerReveal(el){
  el.classList.add('reveal');
  document.dispatchEvent(new CustomEvent('reveal:register', { detail: el }));
}

/* ==========================================================================
   TIMELINE
   ========================================================================== */
function initTimeline(){
  const wrap = $('#timeline');
  CONFIG.timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item reveal';
    el.innerHTML = `
      <span class="timeline-dot"></span>
      <div class="timeline-card glass">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-body">${item.body}</p>
        <div class="timeline-media">Photo goes here</div>
      </div>`;
    wrap.appendChild(el);
    registerReveal(el);
  });
}

/* ==========================================================================
   REASONS GRID
   ========================================================================== */
function initReasons(){
  const grid = $('#reasonsGrid');
  const frag = document.createDocumentFragment();

  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <div class="reason-inner">
        <div class="reason-face reason-front glass">
          <span class="reason-num">${String(i+1).padStart(3,'0')}</span>
          <span>Reason ${i+1}</span>
        </div>
        <div class="reason-face reason-back">${reason}</div>
      </div>`;
    frag.appendChild(card);
  });
  grid.appendChild(frag);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.1 });
  $$('.reason-card', grid).forEach(c => io.observe(c));
}

/* ==========================================================================
   LOVE COUNTER
   ========================================================================== */
function initCounter(){
  const start = new Date(CONFIG.startDate).getTime();
  const els = {
    d: $('#countDays'), h: $('#countHours'), m: $('#countMinutes'), s: $('#countSeconds')
  };
  function tick(){
    const diff = Math.max(0, Date.now() - start);
    const sec = Math.floor(diff/1000);
    els.d.textContent = Math.floor(sec/86400);
    els.h.textContent = String(Math.floor((sec%86400)/3600)).padStart(2,'0');
    els.m.textContent = String(Math.floor((sec%3600)/60)).padStart(2,'0');
    els.s.textContent = String(sec%60).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   GALLERY + LIGHTBOX
   ========================================================================== */
function initGallery(){
  const grid = $('#galleryGrid');
  CONFIG.gallery.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'gallery-item reveal';
    el.style.setProperty('--ar', (i % 3 === 0) ? '1/1.3' : (i % 3 === 1 ? '1/0.9' : '1/1.1'));
    el.innerHTML = `
      <div class="gallery-media">Add photo<br>${i+1}</div>
      <div class="gallery-caption">${item.caption}</div>`;
    el.addEventListener('click', () => openLightbox(item.caption));
    grid.appendChild(el);
    registerReveal(el);
  });

  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightbox').addEventListener('click', e => { if(e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
}
function openLightbox(caption){
  const lb = $('#lightbox');
  $('#lightboxInner').textContent = caption;
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
}
function closeLightbox(){
  const lb = $('#lightbox');
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
}

/* ==========================================================================
   LOVE LETTER TYPEWRITER
   ========================================================================== */
function initLetter(){
  const target = $('#letter');
  const textEl = $('#letterText');
  let typed = false;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !typed){
        typed = true;
        typeLetter(textEl, CONFIG.loveLetter);
        io.unobserve(target);
      }
    });
  }, { threshold:0.3 });
  io.observe(target);
}
function typeLetter(el, text){
  if(prefersReducedMotion){ el.textContent = text; return; }
  let i = 0;
  const speed = 18;
  (function step(){
    if(i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  })();
}

/* ==========================================================================
   INTERACTIVE HEART
   ========================================================================== */
function initHeart(){
  const heart = $('#bigHeart');
  const caption = $('#heartCaption');
  const counterEl = $('#heartCounter');
  const messages = ["I love you", "I love you more", "Still not enough", "Infinity"];
  let count = 0;

  const particleLayer = document.createElement('div');
  particleLayer.className = 'heart-particles';
  document.body.appendChild(particleLayer);

  heart.addEventListener('click', () => {
    count++;
    heart.classList.remove('is-boom'); void heart.offsetWidth; heart.classList.add('is-boom');
    caption.style.opacity = 0;
    setTimeout(() => {
      caption.textContent = messages[Math.min(count-1, messages.length-1)];
      caption.style.opacity = 1;
    }, 150);
    counterEl.textContent = `Tapped ${count} time${count===1?'':'s'}`;

    const rect = heart.getBoundingClientRect();
    const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
    for(let i=0;i<18;i++){
      const p = document.createElement('span');
      p.className = 'hp';
      p.innerHTML = '&#10084;';
      const angle = Math.random()*Math.PI*2;
      const dist = 60 + Math.random()*160;
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.setProperty('--x', Math.cos(angle)*dist + 'px');
      p.style.setProperty('--y', Math.sin(angle)*dist + 'px');
      p.style.fontSize = (10 + Math.random()*14) + 'px';
      particleLayer.appendChild(p);
      setTimeout(() => p.remove(), 950);
    }
  });
}

/* ==========================================================================
   REASONS WHEEL
   ========================================================================== */
function initWheel(){
  const wheel = $('#wheel');
  const btn = $('#spinBtn');
  const resultEl = $('#wheelResult');
  const progressEl = $('#wheelProgress');
  let remaining = shuffle([...CONFIG.reasons]);
  let rotation = 0;
  let spinning = false;

  updateProgress();

  btn.addEventListener('click', () => {
    if(spinning) return;
    if(remaining.length === 0) remaining = shuffle([...CONFIG.reasons]);
    spinning = true;
    const reason = remaining.pop();
    rotation += 1080 + Math.random()*360;
    wheel.style.transform = `rotate(${rotation}deg)`;
    resultEl.style.opacity = 0;
    setTimeout(() => {
      resultEl.textContent = reason;
      resultEl.style.opacity = 1;
      spinning = false;
      updateProgress();
    }, 3200);
  });

  function updateProgress(){
    const seen = CONFIG.reasons.length - remaining.length;
    progressEl.textContent = `${seen} of ${CONFIG.reasons.length} reasons seen`;
  }
}
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

/* ==========================================================================
   FUTURE DREAMS
   ========================================================================== */
function initDreams(){
  const grid = $('#dreamsGrid');
  CONFIG.dreams.forEach(d => {
    const el = document.createElement('div');
    el.className = 'dream-card glass reveal';
    el.innerHTML = `
      <div class="dream-icon">${d.icon}</div>
      <h3 class="dream-title">${d.title}</h3>
      <p class="dream-desc">${d.desc}</p>`;
    grid.appendChild(el);
    registerReveal(el);
  });
}

/* ==========================================================================
   FLOATING LOVE NOTES
   ========================================================================== */
function initNotes(){
  const field = $('#notesField');
  const positions = [
    {top:'4%', left:'6%'}, {top:'2%', left:'62%'}, {top:'28%', left:'32%'},
    {top:'20%', left:'80%'}, {top:'52%', left:'10%'}, {top:'48%', left:'58%'},
    {top:'70%', left:'30%'}, {top:'66%', left:'78%'}
  ];
  CONFIG.notes.forEach((note, i) => {
    const pos = positions[i % positions.length];
    const el = document.createElement('div');
    el.className = 'note';
    el.style.top = pos.top; el.style.left = pos.left;
    el.style.setProperty('--rot', (Math.random()*16-8) + 'deg');
    el.style.animationDelay = (Math.random()*3) + 's';
    el.dataset.full = note.full;
    el.textContent = note.short;
    el.addEventListener('click', () => {
      el.classList.toggle('is-open');
    });
    field.appendChild(el);
  });
}

/* ==========================================================================
   PLAYLIST PLAYER
   ========================================================================== */
function initPlayer(){
  const audio = $('#audioEl');
  const playBtn = $('#playerPlay');
  const prevBtn = $('#playerPrev');
  const nextBtn = $('#playerNext');
  const volume = $('#playerVolume');
  const trackName = $('#playerTrackName');
  const artistName = $('#playerArtistName');
  const progressFill = $('#playerProgressFill');
  const glass = $('#playerArt').closest('.player-glass');
  let index = 0;

  function loadTrack(i){
    index = (i + CONFIG.playlist.length) % CONFIG.playlist.length;
    const track = CONFIG.playlist[index];
    trackName.textContent = track.title;
    artistName.textContent = track.artist;
    progressFill.style.width = '0%';
    if(track.src){ audio.src = track.src; }
  }
  loadTrack(0);
  audio.volume = volume.value/100;

  playBtn.addEventListener('click', () => {
    if(!CONFIG.playlist[index].src){
      artistName.textContent = 'Add an audio file in assets/music/ to enable playback';
      return;
    }
    if(audio.paused){
      audio.play(); playBtn.innerHTML = '&#10073;&#10073;'; glass.classList.add('is-playing');
    } else {
      audio.pause(); playBtn.innerHTML = '&#9658;'; glass.classList.remove('is-playing');
    }
  });
  prevBtn.addEventListener('click', () => loadTrack(index-1));
  nextBtn.addEventListener('click', () => loadTrack(index+1));
  volume.addEventListener('input', () => { audio.volume = volume.value/100; });
  audio.addEventListener('timeupdate', () => {
    if(audio.duration) progressFill.style.width = (audio.currentTime/audio.duration*100) + '%';
  });
  audio.addEventListener('ended', () => loadTrack(index+1));
}

/* ==========================================================================
   SURPRISE BUTTON
   ========================================================================== */
function initSurprise(){
  const btn = $('#surpriseBtn');
  const msg = $('#surpriseMessage');
  let opened = false;
  btn.addEventListener('click', () => {
    if(opened) return;
    opened = true;
    fireConfetti();
    spawnHeartsBurst(40);
    document.body.style.transition = 'background 1.2s ease';
    msg.textContent = `I love you more than this website could ever show, ${CONFIG.herName}. Forever yours, ${CONFIG.yourName}.`;
    msg.classList.add('is-shown');
    btn.textContent = "You're Loved. Completely.";
  });
}

/* ==========================================================================
   CONFETTI / FIREWORKS CANVAS
   ========================================================================== */
function fireConfetti(){
  const canvas = $('#confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth; canvas.height = innerHeight;
  const colors = ['#ff5fa2', '#d9a087', '#b9a3e3', '#f6ece2'];
  let particles = [];

  for(let i=0;i<160;i++){
    particles.push({
      x: innerWidth/2 + (Math.random()*200-100),
      y: innerHeight/2 + (Math.random()*100-50),
      vx: (Math.random()*2-1)*10,
      vy: (Math.random()*-1-1)*12,
      size: 4 + Math.random()*6,
      color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*360,
      vr: Math.random()*10-5,
      life: 0
    });
  }

  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.vy += 0.28;
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - p.life/140);
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*0.6);
      ctx.restore();
    });
    particles = particles.filter(p => p.life < 140);
    if(particles.length) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  frame();
}

/* ==========================================================================
   EASTER EGGS
   ========================================================================== */
function initEasterEggs(){
  // Konami code
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  let typedBuffer = '';

  document.addEventListener('keydown', e => {
    // Konami
    idx = (e.key === konami[idx]) ? idx+1 : (e.key === konami[0] ? 1 : 0);
    if(idx === konami.length){
      idx = 0;
      showKonamiToast(`Secret unlocked: from the very first day, this was always the plan — ${CONFIG.herName}, forever.`);
      spawnHeartsBurst(60);
    }

    // "I LOVE YOU" typed anywhere
    if(e.key.length === 1){
      typedBuffer = (typedBuffer + e.key).slice(-12).toUpperCase();
      if(typedBuffer.replace(/\s/g,'').endsWith('ILOVEYOU')){
        spawnHeartsBurst(50);
        typedBuffer = '';
      }
    }

    // "H" rains hearts
    if(e.key === 'h' || e.key === 'H'){
      spawnHeartsBurst(30);
    }
  });

  // Double-click background creates stars/hearts burst
  document.addEventListener('dblclick', e => {
    if(e.target.closest('button, a, input, .note')) return;
    spawnHeartsBurst(16);
  });
}
function showKonamiToast(text){
  const toast = $('#konamiToast');
  toast.textContent = text;
  toast.classList.add('is-shown');
  setTimeout(() => toast.classList.remove('is-shown'), 5000);
}
