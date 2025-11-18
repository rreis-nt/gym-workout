// util para salvar / restaurar e exportar / importar (compatível iOS)
export function loadStateFromStorage(){
  try{
    const raw = localStorage.getItem('rreisnt_state')
    if(raw) return JSON.parse(raw)
  }catch(e){ console.error(e) }
  // default skeleton
  return {
    athlete: {nome: 'RYAN ANTONIO DOS REIS DE OLIVEIRA', codinome: 'RREISNT'},
    treinos: {
      semana1: {
        'Segunda-feira': {
          'Supino reto': false,
          'Supino inclinado': false,
          'Crucifixo': false,
          'Tríceps testa': false,
          'Tríceps corda': false
        },
        'Terça-feira': {
          'Agachamento': false,
          'Leg press': false,
          'Cadeira extensora': false,
          'Cadeira flexora': false,
          'Panturrilha': false
        },
        'Quarta-feira': {
          'Puxada alta': false,
          'Remada curvada': false,
          'Remada máquina': false,
          'Bíceps rosca direta': false,
          'Bíceps martelo': false
        },
        'Quinta-feira': {
          'Supino reto': false,
          'Supino inclinado': false,
          'Crucifixo': false,
          'Tríceps testa': false,
          'Tríceps corda': false
        },
        'Sexta-feira': {
          'Agachamento': false,
          'Leg press': false,
          'Cadeira extensora': false,
          'Cadeira flexora': false,
          'Panturrilha': false
        },
        'Sábado': {
          'Puxada alta': false,
          'Remada curvada': false,
          'Remada máquina': false,
          'Bíceps rosca direta': false,
          'Bíceps martelo': false
        }
      }
    },
    cargas: {},
    notas: {},
    checklist: {},
    last_modified: new Date().toISOString()
  }
}

export function saveStateToStorage(state){
  try{ localStorage.setItem('rreisnt_state', JSON.stringify(state)) }catch(e){ console.error(e) }
}

export async function exportJSON(state){
  const blob = new Blob([JSON.stringify(state, null, 2)], {type: 'application/json'})
  const filename = `rreisnt_${(new Date()).toISOString().replace(/[:.]/g,'-')}.json`

  // iOS Safari: se suportar navigator.share e está no mobile, usar share como fallback
  if(navigator.canShare && navigator.canShare({files: [new File([blob], filename)]})){
    const file = new File([blob], filename, {type: 'application/json'})
    try{ await navigator.share({files:[file], title:'RREISNT Backup', text:'Backup do treino'}) ; return }
    catch(e){ /* fallthrough para download */ }
  }

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export async function importJSONFile(file){
  return new Promise((resolve, reject)=>{
    const fr = new FileReader()
    fr.onload = ()=>{
      try{ const parsed = JSON.parse(fr.result); resolve(parsed) }catch(e){ reject(e) }
    }
    fr.onerror = ()=> reject(fr.error)
    fr.readAsText(file)
  })
}
