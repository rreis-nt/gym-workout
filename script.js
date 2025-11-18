// ---------- Dados iniciais (pré-popular) ----------
const defaultState = {
  project: "rreisnt workout",
  athlete: "RYAN ANTONIO DOS REIS DE OLIVEIRA",
  start: "Imediato (Novembro 2025)",
  main_goal: "PPL Completo com Progressão (4 Semanas)",
  secondary_goal: "Explosão Muscular + Definição + Futsal",
  status: "Futsal em Retorno, foco em técnica e progressão controlada.",
  deadline: "4 Semanas",
  schedule: [
    {day:"SEG",time:"15:30",focus:"PUSH (PEITO + TRÍCEPS)",exercises:[{name:"Supino Reto",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Supino Inclinado Halter",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Crossover / Peck Deck",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]},{name:"Tríceps Testa",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Tríceps Corda",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]}],sets_reps:"4 séries por exercício",notes:"Progressão: S1: Supino 40kg, Inclinado 14kg cada, Crossover 35%, Testa 15kg, Corda 20kg. S2: +5kg/5%/2kg. S3: +5kg/5%/3kg. S4: +5kg/5%/3kg. Técnica perfeita na S1."},
    {day:"TER",time:"15:30",focus:"PULL (COSTAS + BÍCEPS)",exercises:[{name:"Puxada Frontal",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Remada Baixa",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Remada 1 braço (serrote)",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Rosca Direta",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Rosca Alternada",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]}],sets_reps:"4 séries por exercício",notes:"Progressão: S1: Puxada 35kg, Remada Baixa 35kg, Serrote 18kg, Rosca Direta 20kg total, Alternada 8kg. S2: +5kg. S3: +5kg. S4: +5kg. Foco em costas largas."},
    {day:"QUA",time:"15:30",focus:"LEGS (PERNAS)",exercises:[{name:"Agachamento Livre/Smith",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Leg Press 45º",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]},{name:"Extensora",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]},{name:"Mesa Flexora",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]},{name:"Panturrilha",type:"strength",sets:4,reps:"12-15",done:[false,false,false,false]}],sets_reps:"4 séries por exercício",notes:"Progressão: S1: Agachamento 40kg total, Leg Press 100kg, Extensora 25kg, Flexora 25kg, Panturrilha 30kg. S2: +10kg/+20kg/+5kg. S3: +10kg/+20kg/+5kg. S4: +10kg/+20kg/+5kg. Movimento explosivo."},
    {day:"QUI",time:"15:30",focus:"PUSH 2 (OMBRO + PEITO LEVE + TRÍCEPS)",exercises:[{name:"Desenvolvimento Militar",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Elevação Lateral",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]},{name:"Paralelas / Supino Declinado",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Tríceps Francês",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Coice Halter",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]}],sets_reps:"4 séries por exercício",notes:"Progressão: S1: Militar 20kg total, Lateral 6kg, Paralelas corpo, Francês 12kg, Coice 6kg. S2: +5kg/+1kg. S3: +5kg/+1kg. S4: +2kg/+2kg. Ombros largos."},
    {day:"SEX",time:"15:30",focus:"PULL 2 (COSTAS + BÍCEPS)",exercises:[{name:"Puxada Neutra",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Remada Curvada (barra)",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Pullover",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Rosca Scott",type:"strength",sets:4,reps:"8-12",done:[false,false,false,false]},{name:"Rosca Invertida",type:"strength",sets:4,reps:"10-15",done:[false,false,false,false]}],sets_reps:"4 séries por exercício",notes:"Progressão: S1: Puxada Neutra 35kg, Curvada 30kg, Pullover 15kg, Scott 15kg, Invertida 10kg. S2: +5kg/+5kg/+3kg/+2kg/+2kg. S3: +5kg/+5kg/+2kg/+3kg/+2kg. S4: +5kg/+5kg/+2kg/+3kg/+2kg. Costas completas."},
    {day:"SÁB",time:"Livre",focus:"Futsal Extras (Agilidade)",exercises:[{name:"Sprint de 20m",type:"cardio",sets:6,reps:"-",done:[false,false,false,false,false,false]},{name:"Deslocamento Lateral Rápido",type:"cardio",sets:3,reps:"20s",done:[false,false,false]},{name:"Troca de Direção (Z/V)",type:"cardio",sets:3,reps:"10m",done:[false,false,false]}],sets_reps:"Sprint: 6x; Deslocamento: 3x20s; Troca: 3x10m",notes:"Duas vezes na semana. Fica fino, ágil e explosivo. 4 min total."},
    {day:"DOM",time:"Livre",focus:"Descanso Total",exercises:[],sets_reps:"-",notes:"Comer bem e hidratar. Recuperação."}
  ],
  daily_items:[
    {item:"Água",goal:"3.5 a 4 Litros",why:"Melhora o raciocínio, evita cãibra e inchaço.", done: false},
    {item:"Creatina",goal:"5g (Todo dia)",why:"Aumenta explosão muscular e volume aparente (músculo mais cheio).", done: false},
    {item:"Proteína",goal:"Prioridade em todas as refeições",why:"Essencial para construir o shape e queimar gordura.", done: false},
    {item:"Pré-Treino",goal:"Carboidrato Limpo (1h antes)",why:"Fornecer energia para o treino das 15:30 sem pesar.", done: false},
    {item:"Gorduras",goal:"Redução drástica de açúcar e álcool",why:"Principal fator para definição até Janeiro.", done: false}
  ],
  last_modified: new Date().toISOString()
};

const STORAGE_KEY = 'janeiro_no_shape_state';
let state = null;
let autoSaveTimer = null;

// Timer variables
let timerInterval = null;
let timerSeconds = 60;
let isPaused = false;

// ---------- Utils ----------
function showToast(msg, time=3000){
  const t = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  msgEl.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(()=> t.classList.add('hidden'), time);
}

function nowISO(){ return new Date().toISOString(); }

function formatLocal(iso){
  try {
    return new Date(iso).toLocaleString();
  } catch(e){ return iso }
}

// ---------- State management ----------
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed = JSON.parse(raw);
      state = parsed;
      return;
    }catch(e){
      console.error('Erro parse localStorage', e);
    }
  }
  // se não existir, usa default
  state = structuredClone(defaultState);
}

function saveLocal(){
  state.last_modified = nowISO();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateUI();
  showToast('Salvo localmente');
}

function autoSave(){
  if(autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(()=>{
    saveLocal();
  }, 800);
}

function resetToDefaults(){
  if(!confirm('Resetar para os valores iniciais? Isso irá sobrescrever o estado atual.')) return;
  state = structuredClone(defaultState);
  saveLocal();
  showToast('Resetado para valores iniciais');
}

// ---------- Export / Import ----------
function exportJSON(){
  const ts = new Date();
  const name = `janeiro_no_shape_${String(ts.getDate()).padStart(2,'0')}-${String(ts.getMonth()+1).padStart(2,'0')}-${ts.getFullYear()}_${String(ts.getHours()).padStart(2,'0')}-${String(ts.getMinutes()).padStart(2,'0')}-${String(ts.getSeconds()).padStart(2,'0')}.json`;
  const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast('Arquivo exportado');
}

function validateImported(obj){
  if(!obj || typeof obj !== 'object') return false;
  if(!obj.project || !obj.athlete) return false;
  if(!Array.isArray(obj.schedule)) return false;
  return true;
}

function importFromFile(file){
  const reader = new FileReader();
  reader.onload = function(e){
    try{
      const parsed = JSON.parse(e.target.result);
      if(!validateImported(parsed)){
        showToast('Arquivo inválido: estrutura diferente do esperado');
        return;
      }
      state = parsed;
      state.last_modified = nowISO();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      updateUI();
      showToast('Importado com sucesso');
    }catch(err){
      console.error(err);
      showToast('Erro ao ler o arquivo');
    }
  }
  reader.readAsText(file);
}

// ---------- UI rendering ----------
let selectedDayIndex = null;

function renderDaySelector(){
  const container = document.getElementById('daySelector');
  container.innerHTML = '';
  const today = new Date().getDay(); // 0=Dom, 1=Seg, etc.
  const dayMap = {0:6, 1:0, 2:1, 3:2, 4:3, 5:4, 6:5}; // Map JS day to schedule index
  const todayIndex = dayMap[today];

  state.schedule.forEach((d, idx)=>{
    const isToday = idx === todayIndex;
    const btn = document.createElement('button');
    btn.className = `day-btn px-6 py-3 rounded-lg font-bold text-lg ${selectedDayIndex === idx ? 'active' : 'bg-white/10 text-white hover:bg-white/20'}`;
    btn.textContent = d.day;
    if(isToday) btn.innerHTML += ' <span class="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">HOJE</span>';
    btn.addEventListener('click', ()=> selectDay(idx));
    container.appendChild(btn);
  });

  // Auto-select today if none selected
  if(selectedDayIndex === null) selectDay(todayIndex);
}

function selectDay(index){
  selectedDayIndex = index;
  renderDaySelector();
  renderTodayWorkout();
}

function renderTodayWorkout(){
  const container = document.getElementById('todayWorkout');
  if(selectedDayIndex === null) return;
  const d = state.schedule[selectedDayIndex];

  // Separate strength and cardio exercises
  const strengthExercises = d.exercises.filter(e => e.type === 'strength');
  const cardioExercises = d.exercises.filter(e => e.type === 'cardio');

  let exercisesHTML = '';

  // Strength exercises first
  if(strengthExercises.length > 0){
    exercisesHTML += `
      <div class="workout-card p-6 rounded-xl">
        <h3 class="text-xl font-bold text-white mb-4"><i class="fas fa-dumbbell mr-2 text-cyan-400"></i>Exercícios de Força</h3>
        <ul class="space-y-4">
          ${strengthExercises.map((e, i)=>`
            <li class="exercise-item p-4 rounded-lg bg-white/5 border border-white/10">
              <div class="text-white font-medium mb-2">${e.name} - ${e.sets}x${e.reps}</div>
              <div class="flex flex-wrap gap-2">
                ${e.done.map((done, setIdx)=>`
                  <label class="flex items-center cursor-pointer">
                    <input type="checkbox" data-ex="${d.exercises.indexOf(e)}" data-set="${setIdx}" ${done ? 'checked' : ''} class="mr-2 w-4 h-4 text-cyan-400 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2">
                    <span class="text-sm text-gray-300">Série ${setIdx + 1}</span>
                  </label>
                `).join('')}
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Cardio exercises at the end (optional)
  if(cardioExercises.length > 0){
    exercisesHTML += `
      <div class="workout-card p-6 rounded-xl bg-orange-900/20 border-orange-500/30">
        <h3 class="text-xl font-bold text-orange-400 mb-4"><i class="fas fa-running mr-2"></i>Cardio (Opcional)</h3>
        <ul class="space-y-3">
          ${cardioExercises.map((e, i)=>`
            <li class="exercise-item p-4 rounded-lg bg-orange-900/10 border border-orange-500/20">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" data-ex="${d.exercises.indexOf(e)}" data-set="0" ${e.done[0] ? 'checked' : ''} class="mr-4 w-5 h-5 text-orange-400 bg-gray-800 border-gray-600 rounded focus:ring-orange-400 focus:ring-2">
                <span class="text-white font-medium">${e.name}</span>
              </label>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold text-white mb-2">${d.day} - ${d.focus}</h2>
      <p class="text-cyan-400 text-lg"><i class="fas fa-clock mr-2"></i>${d.time}</p>
    </div>
    <div class="space-y-4">
      ${exercisesHTML}
      <div class="workout-card p-6 rounded-xl">
        <h3 class="text-xl font-bold text-white mb-4"><i class="fas fa-sticky-note mr-2 text-cyan-400"></i>Notas</h3>
        <p class="text-gray-300">${d.notes}</p>
      </div>
    </div>
    <div class="mt-6 text-center">
      <button data-idx="${selectedDayIndex}" class="editBtn px-6 py-3 btn-gradient text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg font-bold">
        <i class="fas fa-edit mr-2"></i>Editar Treino
      </button>
    </div>
  `;

  // attach edit handlers
  document.querySelectorAll('.editBtn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const i = Number(e.currentTarget.dataset.idx);
      openEditModal(i);
    });
  });

  // attach checkbox handlers
  document.querySelectorAll('input[type="checkbox"]').forEach(chk=>{
    chk.addEventListener('change', (e)=>{
      const exIdx = Number(e.target.dataset.ex);
      const setIdx = Number(e.target.dataset.set);
      state.schedule[selectedDayIndex].exercises[exIdx].done[setIdx] = e.target.checked;
      autoSave();
      renderTodayWorkout();
      renderWeeklyCards(); // Update progress bars
    });
  });
}

function renderWeeklyCards(){
  const container = document.getElementById('weeklyCards');
  container.innerHTML = '';
  const today = new Date().getDay();
  const dayMap = {0:6, 1:0, 2:1, 3:2, 4:3, 5:4, 6:5};
  const todayIndex = dayMap[today];

  state.schedule.forEach((d, idx)=>{
    const isToday = idx === todayIndex;
    const card = document.createElement('article');
    card.className = `workout-card p-4 rounded-xl ${isToday ? 'ring-2 ring-cyan-400' : ''}`;

    // Calculate completion based on individual sets
    let totalSets = 0;
    let completedSets = 0;
    d.exercises.forEach(ex => {
      totalSets += ex.done.length;
      completedSets += ex.done.filter(Boolean).length;
    });

    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-bold text-white">${d.day} ${isToday ? '<span class="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">HOJE</span>' : ''}</h4>
        <span class="text-sm text-cyan-400">${completedSets}/${totalSets} séries</span>
      </div>
      <p class="text-sm text-gray-300 mb-2">${d.focus}</p>
      <div class="w-full bg-gray-700 rounded-full h-2">
        <div class="bg-cyan-400 h-2 rounded-full" style="width: ${totalSets > 0 ? (completedSets / totalSets) * 100 : 0}%"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderDailyItems(){
  const cont = document.getElementById('dailyItems');
  cont.innerHTML = '';
  state.daily_items.forEach((it, idx)=>{
    const el = document.createElement('div');
    el.className = `p-4 border rounded-lg transition-colors duration-200 ${it.done ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:bg-gray-50'}`;
    el.innerHTML = `
      <div class="flex items-start">
        <input type="checkbox" data-daily="${idx}" ${it.done ? 'checked' : ''} class="mr-4 w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1">
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <div>
              <strong class="text-gray-800 ${it.done ? 'line-through text-gray-600' : ''}">${it.item}</strong>
              <div class="text-xs text-gray-600 mt-1">${it.goal}</div>
            </div>
            <div class="text-xs text-gray-500 ml-4 flex-1">${it.why}</div>
          </div>
        </div>
      </div>
    `;
    cont.appendChild(el);
  });

  // attach checkbox handlers
  document.querySelectorAll('#dailyItems input[type="checkbox"]').forEach(chk=>{
    chk.addEventListener('change', (e)=>{
      const idx = Number(e.target.dataset.daily);
      state.daily_items[idx].done = e.target.checked;
      autoSave();
      renderDailyItems();
    });
  });
}

function updateUI(){
  renderDaySelector();
  renderTodayWorkout();
  renderWeeklyCards();
  renderDailyItems();
  document.getElementById('lastModified').textContent = formatLocal(state.last_modified || state.lastModified || nowISO());
}

// ---------- Edit modal logic ----------
function openEditModal(index){
  const day = state.schedule[index];
  document.getElementById('editIndex').value = index;
  document.getElementById('editDay').value = day.day || '';
  document.getElementById('editTime').value = day.time || '';
  document.getElementById('editFocus').value = day.focus || '';
  document.getElementById('editExercises').value = (day.exercises||[]).join(' ; ');
  document.getElementById('editSets').value = day.sets_reps || '';
  document.getElementById('editNotes').value = day.notes || '';
  document.getElementById('editModal').classList.remove('hidden');
}

function closeEditModal(){ document.getElementById('editModal').classList.add('hidden'); }

document.getElementById('editForm').addEventListener('submit', function(e){
  e.preventDefault();
  const idx = Number(document.getElementById('editIndex').value);
  const dayObj = {
    day: document.getElementById('editDay').value,
    time: document.getElementById('editTime').value,
    focus: document.getElementById('editFocus').value,
    exercises: document.getElementById('editExercises').value.split(';').map(s=>s.trim()).filter(Boolean),
    sets_reps: document.getElementById('editSets').value,
    notes: document.getElementById('editNotes').value,
    done: state.schedule[idx].done || []
  };
  state.schedule[idx] = dayObj;
  autoSave();
  closeEditModal();
  showToast('Dia atualizado');
});

document.getElementById('closeEdit').addEventListener('click', closeEditModal);

// ---------- Buttons wiring ----------
document.getElementById('exportBtn').addEventListener('click', ()=>{
  exportJSON();
});

document.getElementById('importFile').addEventListener('change', (e)=>{
  const f = e.target.files[0];
  if(!f) return;
  importFromFile(f);
  e.target.value = '';
});

document.getElementById('saveLocalBtn').addEventListener('click', ()=> saveLocal());
document.getElementById('restoreBtn').addEventListener('click', ()=>{
  loadState(); updateUI(); showToast('Último auto-save restaurado');
});
document.getElementById('resetBtn').addEventListener('click', resetToDefaults);

// Edit mode toggle: adiciona listeners para editar clicando no card
document.getElementById('editModeBtn').addEventListener('click', function(){
  const on = this.dataset.on === '1';
  if(!on){
    // ativa modo edição rápido: clicar no card abre modal
    document.querySelectorAll('#cardsContainer article').forEach((a, idx)=>{
      a.style.cursor = 'pointer';
      a.addEventListener('click', a._editClick = ()=> openEditModal(idx));
    });
    this.textContent = 'Editar (modo ativo)';
    this.dataset.on = '1';
    showToast('Modo edição ativado — clique no card para editar');
  }else{
    document.querySelectorAll('#cardsContainer article').forEach(a=>{
      a.style.cursor = 'default';
      if(a._editClick) a.removeEventListener('click', a._editClick);
    });
    this.textContent = 'Editar';
    this.dataset.on = '0';
    showToast('Modo edição desativado');
  }
});

// ---------- Make state reactive-ish: observe changes to inputs in modal ----------
['editDay','editTime','editFocus','editExercises','editSets','editNotes'].forEach(id=>{
  document.getElementById(id).addEventListener('input', ()=> autoSave());
});

// ---------- Timer functions ----------
function updateTimerDisplay(){
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  document.getElementById('timerDisplay').textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function startTimer(){
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    if(!isPaused){
      timerSeconds--;
      updateTimerDisplay();
      if(timerSeconds <= 0){
        clearInterval(timerInterval);
        timerSeconds = 60;
        updateTimerDisplay();
        document.getElementById('timerDisplay').classList.add('timer-beep');
        setTimeout(()=> document.getElementById('timerDisplay').classList.remove('timer-beep'), 500);
        showToast('Tempo esgotado!');
      }
    }
  }, 1000);
  document.getElementById('startTimer').classList.add('hidden');
  document.getElementById('pauseTimer').classList.remove('hidden');
}

function pauseTimer(){
  isPaused = !isPaused;
  document.getElementById('pauseTimer').textContent = isPaused ? 'Continuar' : 'Pausar';
}

function resetTimer(){
  clearInterval(timerInterval);
  timerSeconds = 60;
  isPaused = false;
  updateTimerDisplay();
  document.getElementById('startTimer').classList.remove('hidden');
  document.getElementById('pauseTimer').classList.add('hidden');
  document.getElementById('pauseTimer').textContent = 'Pausar';
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

// ---------- Initialize ----------
loadState();
updateUI();

// Expose some functions for console/debug
window._app = {state, saveLocal, exportJSON, importFromFile, resetToDefaults};

// Accessibility: keyboard ESC to close modal
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeEditModal(); });

// Comentário: funções principais implementadas: auto-save (localStorage), export (Blob + download), import (FileReader + validação), reset, checkboxes para exercícios, cronômetro de descanso.
