// Animate measured heights, preserving keyboard and touch activation.
document.querySelectorAll('.reveal').forEach(d=>{
 let pinned=false,animation=null,timer=null,target=d.open;
 const summary=d.querySelector('summary');
 const setOpen=open=>{
  if(target===open)return;target=open;
  const from=d.getBoundingClientRect().height;
  if(animation){animation.cancel();animation=null}
  d.style.height='';d.open=true;
  const to=open?d.getBoundingClientRect().height:summary.getBoundingClientRect().height;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){d.open=open;return}
  d.style.overflow='hidden';
  animation=d.animate([{height:from+'px'},{height:to+'px'}],{duration:380,easing:'cubic-bezier(.25,.1,.25,1)'});
  animation.onfinish=()=>{d.open=open;d.style.overflow='';animation=null};
 };
 const close=()=>{clearTimeout(timer);timer=setTimeout(()=>{if(!pinned&&!d.matches(':hover')&&!d.contains(document.activeElement))setOpen(false)},180)};
 d.addEventListener('pointerenter',e=>{clearTimeout(timer);if(e.pointerType==='mouse')setOpen(true)});
 d.addEventListener('pointerleave',close);
 summary.addEventListener('focus',()=>setOpen(true));
 d.addEventListener('focusout',close);
 summary.addEventListener('click',e=>{e.preventDefault();pinned=!pinned;setOpen(pinned)});
});
