const navButtons=[...document.querySelectorAll('.nav-btn')];
const views={tactics:document.getElementById('tacticsView'),locations:document.getElementById('locationsView'),conditions:document.getElementById('conditionsView'),training:document.getElementById('trainingView'),athletes:document.getElementById('athletesView'),analysis:document.getElementById('analysisView')};
const titles={tactics:['Board Race Tactics','Build the Competition Arena/Area with draggable craft, cans, poles and tactical overlays'],locations:['Locations','Choose a clean location background for training or competition planning'],conditions:['Race Conditions','Forecast data + local coach observations'],training:['Training','Weekly schedules, drills and illustrated/animated instructions'],athletes:['Athletes','Reusable squad profiles for tactics and training'],analysis:['Analysis','Compare planned and actual race lines']};
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

// --- Surf Sports Studio draggable swimmer / board / ski prototype ---
const svgNS='http://www.w3.org/2000/svg';
const courseSvg=document.getElementById('courseSvg');
const dropZone=document.getElementById('courseDropZone');
const athleteLayer=document.getElementById('athleteLayer');
let draggedCraftType=null;
let selectedCraft=null;

function svgPointFromClient(clientX,clientY){
  const pt=courseSvg.createSVGPoint();
  pt.x=clientX; pt.y=clientY;
  const ctm=courseSvg.getScreenCTM();
  return ctm ? pt.matrixTransform(ctm.inverse()) : {x:500,y:430};
}

function makeEl(name,attrs={}){
  const el=document.createElementNS(svgNS,name);
  Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));
  return el;
}

function craftGraphic(type){
  const g=makeEl('g');
  if(type==='board'){
    g.appendChild(makeEl('path',{d:'M 0 -34 C 10 -30 12 -15 11 4 C 10 21 7 32 0 36 C -7 32 -10 21 -11 4 C -12 -15 -10 -30 0 -34 Z',fill:'#ff6ca8',stroke:'#ffffff','stroke-width':2}));
    g.appendChild(makeEl('path',{d:'M -7 -22 L 7 -22 M -9 16 L 9 16',stroke:'#39cde1','stroke-width':5,'stroke-linecap':'round'}));
    g.appendChild(makeEl('rect',{x:-5,y:-2,width:10,height:18,rx:3,fill:'#10283a',opacity:.85}));
  }else if(type==='ski'){
    g.appendChild(makeEl('path',{d:'M 0 -42 C 5 -34 5 -18 4 0 C 4 20 3 34 0 44 C -3 34 -4 20 -4 0 C -5 -18 -5 -34 0 -42 Z',fill:'#39cfe0',stroke:'#ffffff','stroke-width':1.8}));
    g.appendChild(makeEl('ellipse',{cx:0,cy:2,rx:3.5,ry:10,fill:'#0a3046'}));
    g.appendChild(makeEl('line',{x1:-14,y1:-3,x2:14,y2:8,stroke:'#d9eff7','stroke-width':2.5,'stroke-linecap':'round'}));
  }else if(type==='whiteBuoy' || type==='orangeBuoy'){
    const fill=type==='whiteBuoy'?'#ffffff':'#ff7a18';
    g.appendChild(makeEl('circle',{cx:0,cy:0,r:15,fill,stroke:'#052238','stroke-width':3}));
    g.appendChild(makeEl('circle',{cx:-4,cy:-5,r:4,fill:'#ffffff',opacity:type==='whiteBuoy'?0.35:0.65}));
  }else if(type==='pole'){
    g.appendChild(makeEl('rect',{x:-4,y:-34,width:8,height:68,rx:3,fill:'#f59d18',stroke:'#ffffff','stroke-width':1.4}));
    g.appendChild(makeEl('rect',{x:-9,y:28,width:18,height:6,rx:2,fill:'#633d11',opacity:.9}));
  }else{
    // top-down swimmer: head, torso, arms and legs
    g.appendChild(makeEl('circle',{cx:0,cy:-10,r:6,fill:'#f0c39f',stroke:'#fff','stroke-width':1.5}));
    g.appendChild(makeEl('path',{d:'M 0 -4 L 0 17',stroke:'#28a9ff','stroke-width':8,'stroke-linecap':'round'}));
    g.appendChild(makeEl('path',{d:'M -2 2 L -17 12 M 2 2 L 17 -5',stroke:'#f0c39f','stroke-width':4,'stroke-linecap':'round'}));
    g.appendChild(makeEl('path',{d:'M -2 17 L -10 31 M 2 17 L 11 30',stroke:'#f0c39f','stroke-width':4,'stroke-linecap':'round'}));
  }
  return g;
}

function addCraft(type,x=500,y=430){
  const g=makeEl('g',{'class':'placed-craft','data-type':type,tabindex:0,'aria-label':type+' placed on course'});
  const ringRadius=type==='ski'?50:(type==='pole'?42:(type.includes('Buoy')?28:43));
  const ring=makeEl('circle',{'class':'selection-ring',cx:0,cy:0,r:ringRadius});
  g.appendChild(ring);
  g.appendChild(craftGraphic(type));
  g.dataset.x=String(x); g.dataset.y=String(y);
  g.setAttribute('transform',`translate(${x} ${y})`);
  athleteLayer.appendChild(g);
  enableCraftDragging(g);
  selectCraft(g);
  return g;
}

function selectCraft(g){
  if(selectedCraft) selectedCraft.classList.remove('selected');
  selectedCraft=g;
  if(g) g.classList.add('selected');
}

function enableCraftDragging(g){
  let active=false;
  g.addEventListener('pointerdown',e=>{
    active=true; selectCraft(g); g.setPointerCapture?.(e.pointerId); e.preventDefault();
  });
  g.addEventListener('pointermove',e=>{
    if(!active) return;
    const p=svgPointFromClient(e.clientX,e.clientY);
    const x=Math.max(20,Math.min(980,p.x));
    const y=Math.max(20,Math.min(660,p.y));
    g.dataset.x=String(x);g.dataset.y=String(y);
    g.setAttribute('transform',`translate(${x} ${y})`);
  });
  const stop=()=>{active=false};
  g.addEventListener('pointerup',stop);g.addEventListener('pointercancel',stop);
  g.addEventListener('click',()=>selectCraft(g));
  g.addEventListener('keydown',e=>{
    let x=Number(g.dataset.x),y=Number(g.dataset.y),handled=true;
    const step=e.shiftKey?20:6;
    if(e.key==='ArrowLeft')x-=step;else if(e.key==='ArrowRight')x+=step;else if(e.key==='ArrowUp')y-=step;else if(e.key==='ArrowDown')y+=step;else if(e.key==='Delete'||e.key==='Backspace'){g.remove();selectedCraft=null;return;}else handled=false;
    if(handled){e.preventDefault();g.dataset.x=x;g.dataset.y=y;g.setAttribute('transform',`translate(${x} ${y})`)}
  });
}

document.querySelectorAll('.craft-source').forEach(source=>{
  source.addEventListener('dragstart',e=>{
    draggedCraftType=source.dataset.craft;
    e.dataTransfer?.setData('text/plain',draggedCraftType);
    if(e.dataTransfer) e.dataTransfer.effectAllowed='copy';
  });
  source.addEventListener('dragend',()=>{draggedCraftType=null;dropZone.classList.remove('drag-over')});
  // Tap/click alternative, useful on phones and tablets.
  source.addEventListener('click',()=>{
    const existing=athleteLayer.querySelectorAll('.placed-craft').length;
    addCraft(source.dataset.craft,470+(existing%4)*45,430-Math.floor(existing/4)*55);
  });
});

dropZone.addEventListener('dragover',e=>{e.preventDefault();dropZone.classList.add('drag-over');if(e.dataTransfer)e.dataTransfer.dropEffect='copy'});
dropZone.addEventListener('dragleave',()=>dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop',e=>{
  e.preventDefault();dropZone.classList.remove('drag-over');
  const type=e.dataTransfer?.getData('text/plain')||draggedCraftType;
  if(!['swimmer','board','ski','whiteBuoy','orangeBuoy','pole'].includes(type))return;
  const p=svgPointFromClient(e.clientX,e.clientY);
  addCraft(type,p.x,p.y);
  draggedCraftType=null;
});

courseSvg.addEventListener('pointerdown',e=>{if(e.target===courseSvg||e.target.closest('#courseLayer'))selectCraft(null)});

selectCraft(null);


// --- Location backgrounds / clean Competition Arena/Area canvas ---
const locationSelect=document.getElementById('locationSelect');
const coursePhotoBg=document.getElementById('coursePhotoBg');
const schematicBackground=document.getElementById('schematicBackground');
const backgroundLabel=document.getElementById('backgroundLabel');
const templateGroups=['courseLayer','buoys','beachLabels'];
const tacticalGroups=['ripLayer','pathsLayer','sweepLayer','waveLayer'];

function setLayerButtonState(active){
  document.querySelectorAll('[data-layer]').forEach(btn=>btn.classList.toggle('active',active));
}

function showGroup(id,show){
  const el=document.getElementById(id);
  if(el) el.style.display=show?'':'none';
}

function applyBackground(value){
  if(!coursePhotoBg || !schematicBackground) return;
  coursePhotoBg.className='course-photo-bg';
  coursePhotoBg.style.backgroundImage='none';
  coursePhotoBg.style.display='none';
  schematicBackground.style.display='';

  if(value==='bar-beach-shore'){
    coursePhotoBg.style.display='block';
    coursePhotoBg.style.backgroundImage="url('assets/locations/bar-beach-shore.jpg')";
    coursePhotoBg.classList.add('bar-beach-bg');
    schematicBackground.style.display='none';
    [...templateGroups,...tacticalGroups].forEach(id=>showGroup(id,false));
    setLayerButtonState(false);
    backgroundLabel.textContent='Bar Beach • clean shore view • blank Competition Arena/Area';
  }else if(value==='ocean'){
    coursePhotoBg.style.display='block';
    coursePhotoBg.classList.add('ocean-bg');
    schematicBackground.style.display='none';
    [...templateGroups,...tacticalGroups].forEach(id=>showGroup(id,false));
    setLayerButtonState(false);
    backgroundLabel.textContent='Clean ocean canvas • blank Competition Arena/Area';
  }else{
    [...templateGroups,...tacticalGroups].forEach(id=>showGroup(id,true));
    setLayerButtonState(true);
    backgroundLabel.textContent='Competition Arena/Area template • drag objects to position';
  }
}

locationSelect?.addEventListener('change',()=>applyBackground(locationSelect.value));
document.getElementById('templateBtn')?.addEventListener('click',()=>{locationSelect.value='template';applyBackground('template')});

function navigateToTacticsWithLocation(location){
  const tacticsBtn=document.querySelector('.nav-btn[data-view="tactics"]');
  tacticsBtn?.click();
  if(locationSelect){locationSelect.value=location;applyBackground(location);}
}

document.getElementById('openBarBeachBtn')?.addEventListener('click',()=>navigateToTacticsWithLocation('bar-beach-shore'));
document.querySelectorAll('.location-use').forEach(btn=>btn.addEventListener('click',()=>navigateToTacticsWithLocation(btn.dataset.location)));

applyBackground(locationSelect?.value || 'template');
