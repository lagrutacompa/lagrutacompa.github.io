const strips=[...document.querySelectorAll('.strip')];
function selectPhoto(item){strips.forEach(s=>{s.classList.toggle('active',s===item);s.setAttribute('aria-pressed',s===item)});}
strips.forEach(s=>{s.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&(e.movementX||e.movementY))selectPhoto(s)});s.addEventListener('focus',()=>selectPhoto(s));s.addEventListener('click',()=>selectPhoto(s));});
const tabs=[...document.querySelectorAll('[data-chapter]')];
function selectChapter(tab){const i=Number(tab.dataset.chapter);tabs.forEach(t=>{t.setAttribute('aria-selected',t===tab);t.tabIndex=t===tab?0:-1});const p=document.querySelector('#chapter-panel');p.setAttribute('aria-labelledby',tab.id);p.querySelector('h3').textContent=stories[i][0];p.querySelector('p').textContent=stories[i][1];}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectChapter(t));t.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')selectChapter(t)});t.addEventListener('keydown',e=>{let j;if(e.key==='ArrowRight')j=(i+1)%tabs.length;if(e.key==='ArrowLeft')j=(i+tabs.length-1)%tabs.length;if(e.key==='Home')j=0;if(e.key==='End')j=tabs.length-1;if(j!==undefined){e.preventDefault();selectChapter(tabs[j]);tabs[j].focus()}})});
const modal=document.querySelector('dialog');
document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>{
 const ally=button.dataset.dialog==='aliado';
 document.querySelector('#dialog-title').textContent=ally?'Hay muchas formas de sumarse.':'Gracias por querer aportar.';
 document.querySelector('#dialog-copy').innerHTML=ally
  ? '<p>Puedes colaborar con materiales, servicios, contactos o difusión. Cuéntanos cómo te gustaría participar.</p><p>Si tienes cualquier duda, escríbenos.</p>'
  : '<dl class="contribution-methods"><div><dt>Llave<br>Bre-B</dt><dd>1018514938</dd></div><div><dt>Nequi</dt><dd>310 785 1242</dd></div><div><dt>Otro</dt><dd>Contáctanos para acordar otra forma de aportar.</dd></div></dl><p class="contribution-owner">Bre-B y Nequi a nombre de <strong>Daniel Francisco Villamizar Díaz.</strong></p><p>Si tienes cualquier duda, escríbenos.</p>';
 const link=document.querySelector('#dialog-link');
 link.href='https://wa.me/573107851242';
 link.textContent='WhatsApp: +57 310 785 1242';
 modal.showModal();
}));
document.querySelector('.close').addEventListener('click',()=>modal.close());
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.animate(e.target.classList.contains('fund')?[{opacity:.92},{opacity:1}]:[{opacity:.65,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:900,easing:'ease-out'});observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.community,.story,.discover,.gallery,.hug,.fund').forEach(s=>observer.observe(s));}


// Subject coordinates measured on each original photograph (normalised x/y).
const gallerySubjects={DSC07331:[.50,.28],DSC07448:[.40,.24],DSC07771:[.55,.27],DSC07432:[.53,.28],DSC07778:[.58,.24],DSC07987:[.50,.37],DSC08055:[.64,.38],DSC07994:[.55,.23],DSC07966:[.50,.24],DSC08026:[.60,.50]};
function frameGalleryPortrait(img){
 if(!img.naturalWidth||!img.naturalHeight)return;
 const subject=gallerySubjects[img.src.split('/').pop().split('.')[0]]||[.5,.3];
 const w=img.clientWidth,h=img.clientHeight;
 const scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);
 const paintedW=img.naturalWidth*scale,paintedH=img.naturalHeight*scale;
 const x=Math.max(w-paintedW,Math.min(0,w*.5-subject[0]*paintedW));
 const y=Math.max(h-paintedH,Math.min(0,h*.50-subject[1]*paintedH));
 img.style.setProperty('--portrait-position',`${x}px ${y}px`);
}
const galleryCropObserver=new ResizeObserver(entries=>entries.forEach(e=>frameGalleryPortrait(e.target)));
strips.forEach(strip=>{const img=strip.querySelector('img');galleryCropObserver.observe(img);img.addEventListener('load',()=>frameGalleryPortrait(img));frameGalleryPortrait(img)});

