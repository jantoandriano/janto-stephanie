const slides = document.querySelectorAll('.slide');
const progressEl = document.getElementById('progress');
let current = 0;
let playing = true;
let timer = null;

slides.forEach((s,i)=>{
  const seg = document.createElement('div');
  seg.className='seg';
  seg.onclick=(e)=>{e.stopPropagation();jumpTo(i);};
  const fill = document.createElement('div');
  fill.className='seg-fill';
  fill.dataset.idx=i;
  seg.appendChild(fill);
  progressEl.appendChild(seg);
});
const fills = document.querySelectorAll('.seg-fill');

// ---- rAF-driven progress: fills each segment smoothly and advances ----
let elapsed = 0;      // ms spent on the current slide
let lastTs  = null;   // timestamp of previous frame

function slideDur(){ return parseInt(slides[current].dataset.duration || 4000, 10); }

function showSlide(){
  slides.forEach((s,i)=>s.classList.toggle('active', i===current));
  // past segments full, current + future empty (current fills via frame())
  fills.forEach((f,i)=>{ f.style.width = i < current ? '100%' : '0%'; });
  elapsed = 0;
  lastTs  = null;
}

function frame(ts){
  if(playing){
    if(lastTs != null) elapsed += ts - lastTs;
    lastTs = ts;
    const dur = slideDur();
    let frac = elapsed / dur;
    if(frac > 1) frac = 1;
    fills[current].style.width = (frac * 100) + '%';
    if(elapsed >= dur){
      current = (current + 1) % slides.length;
      showSlide();
    }
  } else {
    lastTs = null; // don't accumulate time while paused
  }
  requestAnimationFrame(frame);
}

function go(dir){
  current = (current + dir + slides.length) % slides.length;
  showSlide();
}

function jumpTo(i){
  current = i;
  showSlide();
}

function togglePlay(){
  playing = !playing;
  document.getElementById('playBtn').textContent = playing ? 'Pause' : 'Play';
  lastTs = null;
}

// ---- background music: independent of the slideshow, so it never restarts ----
const bgm = document.getElementById('bgm');
const hasMusic = bgm && bgm.querySelector('source');
function startMusic(){ if(hasMusic) bgm.play().catch(()=>{}); }
// browsers block audio autoplay until a user gesture — start on first tap
if(hasMusic){
  window.addEventListener('pointerdown', function once(){
    startMusic();
    window.removeEventListener('pointerdown', once);
  });
  document.getElementById('musicToggle').addEventListener('click', function(e){
    e.stopPropagation();
    if(bgm.paused) bgm.play().catch(()=>{}); else bgm.pause();
  });
}

if(!invalidInvite){
  showSlide();
  requestAnimationFrame(frame);
}
