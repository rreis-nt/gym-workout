import React from 'react'
import WeekCards from './WeekCards'
import ExerciseEditor from './ExerciseEditor'
import ProgressChart from './ProgressChart'
import { exportJSON, importJSONFile } from '../utils/exportImport'

export default function Dashboard({state, setState, updateState}){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="card-glass p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-accent-600 mb-2">📅 Semana Atual</h2>
            <p className="text-muted-400">Marque os exercícios que você completou</p>
          </div>
          <WeekCards state={state} setState={setState} />
        </div>

        <div className="card-glass p-8 rounded-2xl shadow-2xl">
          <ExerciseEditor state={state} setState={setState} />
        </div>
      </div>

      <aside className="space-y-8">
        <div className="card-glass p-6 rounded-2xl shadow-2xl">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-accent-600">📊 Progresso</h3>
            <p className="text-muted-400 text-sm">Evolução das cargas</p>
          </div>
          <ProgressChart cargas={state.cargas} />
        </div>

        <div className="card-glass p-6 rounded-2xl shadow-2xl">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-accent-600">💾 Backup</h3>
            <p className="text-muted-400 text-sm">Salve seus dados</p>
          </div>
          <div className="space-y-4">
            <button
              className="w-full py-3 bg-gradient-to-r from-accent-600 to-accent-700 rounded-lg hover:from-accent-700 hover:to-accent-800 transform hover:scale-105 transition-all duration-200 font-semibold text-white shadow-lg"
              onClick={()=> exportJSON(state)}
            >
              📤 Exportar Dados
            </button>
            <div className="relative">
              <input
                type="file"
                accept="application/json"
                onChange={async e=>{
                  const f = e.target.files[0]; if(!f) return
                  try{
                    const parsed = await importJSONFile(f)
                    setState(parsed)
                    alert('Dados importados com sucesso!')
                  }catch(err){ alert('Arquivo inválido') }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button className="w-full py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 font-semibold text-white shadow-lg">
                📥 Importar Dados
              </button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
