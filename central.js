const events=[
['2026-09-27','HSLS Development Squad','TBC',['u11-14','u15-open'],null],
['2026-10-03','Weekend of Surf — 3–4 Oct','Forster SLSC',['u8-10','u11-14','u15-open','masters'],null],
['2026-10-09','HSLS NPS Round 1 Individual Beach','Redhead',['u11-14','u15-open'],'https://liveheats.com/events/535274'],
['2026-10-18','Coolangatta Youth Challenge','Coolangatta',['u11-14','u15-open'],'https://liveheats.com/events/526067'],
['2026-10-25','HSLS NPS Round 1 Individual Water','Caves Beach',['u11-14','u15-open'],null],
['2026-10-31','HSLS Round 1 Teams Water','Stockton',['u8-10','u11-14','u15-open'],'https://liveheats.com/events/548210'],
['2026-11-01','World Ocean Series Youth','Bonny Hills',['u11-14','u15-open'],null],
['2026-11-01','SLSCC Nipper Carnival — Water & NP Iron Round 1','Terrigal',['u8-10','u11-14'],null],
['2026-11-13','HSLS NPS Round 2 Distance Runs & Flags','Swansea Belmont',['u8-10','u11-14','u15-open'],'https://liveheats.com/events/548243'],
['2026-11-14','Newcastle Permanent Series 2026 Round 2','Swansea Belmont',['u8-10','u11-14','u15-open'],'https://liveheats.com/events/548243'],
['2026-11-15','Kracka Challenge','Swansea Belmont',['u8-10','u11-14','u15-open'],null],
['2026-11-28','SLSNSW Interbranch — 28–29 Nov','Caves Beach',['u11-14','u15-open'],null],
['2026-12-05','HSLS NPS Round 3 Water','Catherine Hill Bay',['u8-10','u11-14','u15-open'],'https://liveheats.com/events/548309'],
['2026-12-06','SLSCC 1 Day Nipper Carnival & NP Iron R2','TBC',['u8-10','u11-14'],null],
['2026-12-11','HSLS NPS Round 3 Beach','Redhead',['u8-10','u11-14','u15-open'],null],
['2026-12-12','SLSCC Infront Surf Slam — U14 to Opens','Avoca',['u11-14','u15-open'],'https://liveheats.com/events/552533'],
['2027-01-10','SLSCC U12–Open & Masters Carnival','Soldiers',['u11-14','u15-open','masters'],'https://liveheats.com/events/552534'],
['2027-01-24','SLSCC U9–U11 Infront Mini Carnival','Toowoon Bay',['u8-10','u11-14'],'https://liveheats.com/events/552535'],
['2027-01-31','SLSCC Nipper Carnival Twilight Beach — 2pm start','Toowoon Bay',['u8-10','u11-14'],'https://liveheats.com/events/552536']];
const list=document.querySelector('#calendarList'); const fmt=d=>new Date(d+'T12:00:00').toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short'}); const month=d=>new Date(d+'T12:00:00').toLocaleDateString('en-AU',{month:'long',year:'numeric'});
function render(filter='all'){list.innerHTML='';let m='';events.filter(e=>filter==='all'||e[3].includes(filter)).forEach((e,i)=>{let mm=month(e[0]);if(mm!==m){m=mm;list.insertAdjacentHTML('beforeend',`<h2 class="month-title">${m}</h2>`)}let live=e[4]?`<a class="btn" target="_blank" rel="noopener" href="${e[4]}">Open LiveHeats</a>`:'';let card=document.createElement('article');card.className='event-card';card.innerHTML=`<div class="event-date">${fmt(e[0])}</div><div><h3>${e[1]}</h3><p>📍 ${e[2]} · ${e[3].map(x=>x.replace('u','U').replace('-', '–')).join(' · ')}</p></div><div class="event-actions"><button class="btn details">Event space</button>${live}</div><div class="event-detail"><div class="detail-grid"><div class="mini"><h4>Event files</h4><p>Program · athlete teams · entry information</p><button disabled>Upload / link file</button></div><div class="mini"><h4>Carnival Roles</h4><p>Carnival Manager · Head Coach · Assistant Coaches · Age Managers · Water Safety · Officials · IRB Crew · Social Media · Trailer/Equipment</p></div><div class="mini"><h4>Coaching</h4><p>Open event-specific tactics, animation and live conditions in Surf Sports Studio.</p><a href="studio.html">Open Studio →</a></div></div></div>`;card.querySelector('.details').onclick=()=>card.classList.toggle('open');list.append(card)})}
document.querySelectorAll('.filter-btn').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});render();
