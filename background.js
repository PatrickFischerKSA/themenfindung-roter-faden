const video=document.querySelector('#ambient-video');
const toggle=document.querySelector('#ambient-toggle');
const key='roter-faden-background-paused';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let preference=null;
try{preference=localStorage.getItem(key);}catch{}
let paused=preference===null?reduced.matches:preference==='true';
function update(){toggle.textContent=video.paused?'▶ Animation starten':'Ⅱ Animation stoppen';toggle.setAttribute('aria-label',video.paused?'Hintergrundanimation starten':'Hintergrundanimation stoppen');toggle.setAttribute('aria-pressed',String(!video.paused));}
async function apply(){if(paused){video.pause();update();}else{try{await video.play();}catch{update();}}}
video.muted=true;
video.addEventListener('play',update);
video.addEventListener('pause',update);
video.addEventListener('error',()=>{toggle.textContent='Animation nicht verfügbar';toggle.disabled=true;});
toggle.addEventListener('click',()=>{paused=!video.paused;preference=String(paused);try{localStorage.setItem(key,preference);}catch{}apply();});
reduced.addEventListener('change',()=>{if(preference===null){paused=reduced.matches;apply();}});
update();apply();
