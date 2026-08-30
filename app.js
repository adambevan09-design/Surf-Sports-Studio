const navButtons=[...document.querySelectorAll('.nav-btn')];
const views={tactics:document.getElementById('tacticsView'),conditions:document.getElementById('conditionsView'),training:document.getElementById('trainingView'),athletes:document.getElementById('athletesView'),analysis:document.getElementById('analysisView')};
const titles={tactics:['Board Race Tactics','Prototype course planning, conditions and race-line visualisation'],conditions:['Race Conditions','Forecast data + local coach observations'],training:['Training','Weekly schedules, drills and illustrated/animated instructions'],athletes:['Athletes','Reusable squad profiles for tactics and training'],analysis:['Analysis','Compare planned and actual race lines']};
navButtons.forEach(btn=>btn.addEventListener('click',()=>{navButtons.forEach(b=>b.classList.toggle('active',b===btn));Object.values(views).forEach(v=>v.classList.remove('active'));views[btn.dataset.view].classList.add('active');document.getElementById('viewTitle').textContent=titles[btn.dataset.view][0];document.getElementById('viewSubtitle').textContent=titles[btn.dataset.view][1];}));

const eventSelect=document.getElementById('eventSelect');
eventSelect.addEventListener('change',()=>{document.getElementById('courseName').textContent=eventSelect.value;document.getElementById('viewTitle').textContent=eventSelect.value+' Tactics';});

const layers={rips:'ripLayer',paths:'pathsLayer',sweep:'sweepLayer',waves:'waveLayer'};
document.querySelectorAll('[data-layer]').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('active');const el=document.getElementById(layers[btn.dataset.layer]);el.style.display=btn.classList.contains('active')?'':'none';}));

document.querySelectorAll('.dot').forEach(dot=>dot.addEventListener('click',()=>{document.querySelectorAll('.dot').forEach(d=>d.classList.remove('active'));dot.classList.add('active');const path=document.querySelector('.race-path-primary');path.setAttribute('stroke',dot.dataset.colour);const markers={'#ffd84d':'url(#arrowYellow)','#25b5ff':'url(#arrowBlue)','#7ee26d':'url(#arrowGreen)','#ff5151':'url(#arrowYellow)'};path.setAttribute('marker-end',markers[dot.dataset.colour]||'url(#arrowYellow)');}));

const buoyGroup=document.getElementById('buoys');
const buoyColors=['#ffcb2f','#090909','#ffffff','#f0463c','#ffffff','#ffd64a','#ffffff','#f98531','#ffd64a'];
const accentColors=['#ee3559',null,'#66d577',null,'#58bfff',null,'#111',null,'#66d577'];
for(let i=0;i<9;i++){
  const x=410+i*23.5;
  const g=document.createElementNS('http://www.w3.org/2000/svg','g');
  const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',x);c.setAttribute('cy',205);c.setAttribute('r',10);c.setAttribute('fill',buoyColors[i]);c.setAttribute('stroke','#07202d');c.setAttribute('stroke-width','2');g.appendChild(c);
  if(accentColors[i]){const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',`M ${x} 195 A 10 10 0 0 1 ${x} 215 L ${x} 215 Z`);p.setAttribute('fill',accentColors[i]);g.appendChild(p);}buoyGroup.appendChild(g);
}
for(let i=0;i<4;i++){const x=455+i*30;const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',x);c.setAttribute('cy',108);c.setAttribute('r',10);c.setAttribute('fill','#fff');c.setAttribute('stroke','#071423');c.setAttribute('stroke-width','2');const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',`M ${x} 98 A 10 10 0 0 0 ${x} 118 L ${x} 98 Z`);p.setAttribute('fill','#0d0d0d');buoyGroup.append(c,p);}

const animateBtn=document.getElementById('animateBtn');
animateBtn.addEventListener('click',()=>{const paths=[...document.querySelectorAll('.race-path')];paths.forEach(p=>{p.style.strokeDasharray='18 12';p.style.animation='dash 1s linear infinite'});animateBtn.textContent='Playing…';setTimeout(()=>{paths.forEach(p=>{p.style.animation='';});animateBtn.textContent='▶ Preview animation'},3500)});
const style=document.createElement('style');style.textContent='@keyframes dash{to{stroke-dashoffset:-60}}';document.head.appendChild(style);

document.getElementById('saveNoteBtn').addEventListener('click',e=>{e.currentTarget.textContent='Saved ✓';setTimeout(()=>e.currentTarget.textContent='Save note',1200)});
const dialog=document.getElementById('feedbackDialog');document.getElementById('feedbackBtn').addEventListener('click',()=>dialog.showModal());
document.getElementById('resetBtn').addEventListener('click',()=>location.reload());
