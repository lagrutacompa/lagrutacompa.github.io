document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('.menu')?.removeAttribute('open')});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const root=document.documentElement,vine=document.querySelector('.growing-vine');
let frame=0,lastTime=0,shown=110,target=110;
function paintVine(time){
  const dt=lastTime?Math.min(64,time-lastTime):16;lastTime=time;
  shown=reduced.matches?target:shown+(target-shown)*(1-Math.exp(-dt/240));
  if(Math.abs(target-shown)<.1)shown=target;
  root.style.setProperty('--vine-reveal',shown+'px');
  if(shown!==target)frame=requestAnimationFrame(paintVine);else{frame=0;lastTime=0}
}
function updateJourney(){
  const distance=Math.max(1,root.scrollHeight-innerHeight),progress=Math.min(1,Math.max(0,scrollY/distance));
  root.style.setProperty('--journey',reduced.matches?0:progress);
  root.style.setProperty('--sun-rise',(-Math.min(170,scrollY*.32))+'px');
  // The phase advances only with scroll position, never with elapsed time.
  const phase=scrollY/440,offset=reduced.matches?0:6*Math.sin(phase);
  root.style.setProperty('--drop-a-y',(35+offset)+'px');
  root.style.setProperty('--drop-b-y',(35-offset)+'px');
  const shape=reduced.matches?0:.035*Math.sin(phase);
  root.style.setProperty('--drop-a-x',1-shape);root.style.setProperty('--drop-a-stretch',1+shape);
  root.style.setProperty('--drop-b-x',1+shape);root.style.setProperty('--drop-b-stretch',1-shape);
  if(vine){target=Math.max(target,110+(vine.offsetHeight-110)*progress);target=Math.min(vine.offsetHeight,target);if(!frame)frame=requestAnimationFrame(paintVine)}
}
addEventListener('scroll',updateJourney,{passive:true});addEventListener('resize',updateJourney);reduced.addEventListener('change',updateJourney);updateJourney();

document.querySelector('.map-stack')?.addEventListener('click',function(){this.setAttribute('aria-pressed',this.getAttribute('aria-pressed')!=='true')});

document.querySelector('button.article-symbol.object-profiles')?.addEventListener('click',function(){this.setAttribute('aria-pressed',this.getAttribute('aria-pressed')!=='true')});
