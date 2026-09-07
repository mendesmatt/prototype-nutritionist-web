const ICON = {
  fork:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v8a2 2 0 002 2h0a2 2 0 002-2V2M6 2v20M6 12v10M18 2c-1.5 1-2.5 3-2.5 5.5S16.5 12 18 13v9"/></svg>`,
  basket:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16l-1.5 11.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 9z"/><path d="M8 9V6a4 4 0 018 0v3"/><path d="M9 13v4M15 13v4"/></svg>`,
  camera:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 012-2h2l1.5-2h5L16 6h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  chart:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>`,
  chat:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
  doc:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>`,
  gift:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M12 8c-1.5 0-3-1-3-2.5S10 3 12 5c0-2 1.5-3 3-2.5S13.5 8 12 8z"/></svg>`,
  help:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.5 2-2.5 3.5"/><circle cx="12" cy="17" r="0.6" fill="currentColor"/></svg>`,
  bell:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1F2A24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 004 0"/></svg>`,
  home:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"/></svg>`,
  user:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  back:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F2A24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  calendar:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F2A24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  plus:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  x:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F2A24" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  camPlus:`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 012-2h2l1.5-2h5L16 6h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/><circle cx="12" cy="13" r="3"/></svg>`,
  heart:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>`,
  chevron:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7A72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
};

// injeta ícones nos placeholders ${ICON.x}
document.body.innerHTML = document.body.innerHTML.replace(/\$\{ICON\.(\w+)\}/g, (_,k)=>ICON[k]||'');

/* ---------------- estado ---------------- */
const meals = [
  {id:'cafe', name:'Café da manhã', time:'—', filled:false, note:''},
  {id:'lancheM', name:'Lanche da manhã', time:'—', filled:false, note:''},
  {id:'almoco', name:'Almoço', time:'—', filled:false, note:''},
  {id:'lancheT', name:'Lanche da tarde', time:'—', filled:false, note:''},
  {id:'jantar', name:'Jantar', time:'—', filled:false, note:''},
];
let activeMealId = null;
let photoTaken = false;
const motivations = ['Vamos começar? 🌱','Bom ritmo, continue assim 🌿','Você está no caminho certo 🌱','Quase lá, faltam só algumas 🌿','Dia completo! Parabéns 🎉'];

/* ---------------- navegação por tela ---------------- */
function goTo(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[data-target="${id}"]`);
  if(nav) nav.classList.add('active');
}
function navClick(el,id){ goTo(id); }
function navToast(el,msg){ toast(msg); }

/* ---------------- toast ---------------- */
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ---------------- sheets ---------------- */
function openSheet(id){ document.getElementById(id).classList.add('active'); }
function closeSheet(id){ document.getElementById(id).classList.remove('active'); }

/* ---------------- dias da semana ---------------- */
const days = ['DOM','SEG','TER','QUA','QUI','SEX','SAB'];
function renderDays(){
  const wrap = document.getElementById('day-scroll');
  wrap.innerHTML='';
  const today = new Date();
  for(let i=-3;i<=3;i++){
    const d = new Date(today); d.setDate(today.getDate()+i);
    const pill = document.createElement('div');
    pill.className = 'day-pill'+(i===0?' active':'');
    pill.innerHTML = `<div class="dname">${days[d.getDay()]}</div><div class="dnum">${d.getDate()}</div>`;
    pill.onclick = ()=>{
      document.querySelectorAll('.day-pill').forEach(p=>p.classList.remove('active'));
      pill.classList.add('active');
      if(i!==0) toast('Visualizando outro dia (demonstração)');
    };
    wrap.appendChild(pill);
  }
}

/* ---------------- render refeições ---------------- */
function renderMeals(){
  const list = document.getElementById('meal-list');
  list.innerHTML='';
  meals.forEach(m=>{
    const card = document.createElement('div');
    card.className='meal-card';
    card.onclick = ()=>openMealSheet(m.id);
    card.innerHTML = `
      <div class="meal-thumb ${m.filled?'filled':''}">${m.filled?'🥗':ICON.fork}</div>
      <div class="meal-body">
        <div class="mname">${m.name}</div>
        <div class="mdesc">${m.filled? (m.note||'Registrado com foto') : 'Ainda não registrado'}</div>
        <div class="mtime">${m.filled? m.time : 'Toque para registrar'}</div>
        ${m.filled && m.id==='almoco' ? '<div class="comment-badge">💬 Comentário do nutri</div>' : ''}
      </div>
      ${m.filled ? '' : `<div class="meal-add">${ICON.plus.replace('#fff','#6B7A72')}</div>`}
    `;
    list.appendChild(card);
  });
  updateProgress();
}

function updateProgress(){
  const done = meals.filter(m=>m.filled).length;
  const pct = Math.round(done/meals.length*100);
  document.getElementById('diary-progress-label').textContent = `${done}/${meals.length} refeições registradas`;
  document.getElementById('diary-progress-fill').style.width = pct+'%';
  document.getElementById('diary-motivational').textContent = motivations[done];
  document.getElementById('home-diary-preview').textContent = `${done} refeições hoje`;

  // growth ring na home
  const circumference = 169.6;
  const offset = circumference - (pct/100)*circumference;
  document.getElementById('home-ring').style.strokeDashoffset = offset;
  document.getElementById('home-ring-pct').textContent = pct+'%';
  document.getElementById('home-ring-label').textContent = `${done} de ${meals.length} refeições`;
}

/* ---------------- sheet de registro ---------------- */
function openMealSheet(mealId){
  const wrap = document.getElementById('meal-choice');
  wrap.innerHTML='';
  meals.forEach(m=>{
    const chip = document.createElement('div');
    chip.className = 'chip'+(m.id===(mealId||meals.find(x=>!x.filled)?.id||meals[0].id)?' sel':'');
    chip.textContent = m.name;
    chip.onclick = ()=>{
      document.querySelectorAll('#meal-choice .chip').forEach(c=>c.classList.remove('sel'));
      chip.classList.add('sel');
      activeMealId = m.id;
    };
    wrap.appendChild(chip);
  });
  activeMealId = mealId || (meals.find(x=>!x.filled)?.id) || meals[0].id;
  photoTaken = false;
  document.getElementById('photo-slot').classList.remove('has-photo');
  document.getElementById('photo-slot-icon').innerHTML = ICON.camPlus;
  document.getElementById('photo-slot-text').textContent = 'Toque para tirar uma foto';
  document.getElementById('meal-note').value='';
  document.getElementById('save-meal-btn').disabled = false;
  openSheet('sheet-meal');
}

function togglePhoto(){
  photoTaken = !photoTaken;
  const slot = document.getElementById('photo-slot');
  const icon = document.getElementById('photo-slot-icon');
  const text = document.getElementById('photo-slot-text');
  if(photoTaken){
    slot.classList.add('has-photo');
    icon.textContent = '🍽️';
    text.textContent = '';
  } else {
    slot.classList.remove('has-photo');
    icon.innerHTML = ICON.camPlus;
    text.textContent = 'Toque para tirar uma foto';
  }
}

function saveMeal(){
  const m = meals.find(x=>x.id===activeMealId);
  if(!m) return;
  m.filled = true;
  m.note = document.getElementById('meal-note').value.trim() || 'Registrado com foto';
  const now = new Date();
  m.time = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  closeSheet('sheet-meal');
  renderMeals();
  toast('Refeição registrada com sucesso 🌿');
}

/* ---------------- perfil: cores ---------------- */
const palette = [
  {name:'Verde suave', primary:'#5FA97A', dark:'#2C5F46', tint:'#E7F3EC'},
  {name:'Terra', primary:'#C98A5E', dark:'#7A5136', tint:'#F5E9DE'},
  {name:'Azul sereno', primary:'#5C93B8', dark:'#2E5470', tint:'#E4EEF3'},
  {name:'Lavanda', primary:'#8C7FC4', dark:'#4F4479', tint:'#EDEAF8'},
  {name:'Coral suave', primary:'#D9836F', dark:'#7D4335', tint:'#F7E7E2'},
];
function renderColors(){
  const row = document.getElementById('color-row');
  row.innerHTML='';
  palette.forEach((p,i)=>{
    const sw = document.createElement('div');
    sw.className='swatch'+(i===0?' sel':'');
    sw.style.background = p.primary;
    sw.onclick = ()=>{
      document.querySelectorAll('.swatch').forEach(s=>s.classList.remove('sel'));
      sw.classList.add('sel');
      document.documentElement.style.setProperty('--primary', p.primary);
      document.documentElement.style.setProperty('--primary-dark', p.dark);
      document.documentElement.style.setProperty('--primary-tint', p.tint);
      toast('Cor do app atualizada: '+p.name);
    };
    row.appendChild(sw);
  });
}

function toggleSwitch(el){
  el.classList.toggle('on');
  toast(el.classList.contains('on') ? 'Sincronização de saúde ativada' : 'Sincronização desativada');
}

/* ---------------- init ---------------- */
renderDays();
renderMeals();
renderColors();