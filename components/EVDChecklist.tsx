'use client'

import { useState } from 'react'

interface ChecklistItem {
  id: string
  title: string
  checked: boolean
  description?: string
}

export default function EVDChecklist() {
  const [activeSection, setActiveSection] = useState<'or' | 'anesthesia' | 'notes'>('or')
  
  const [orChecklist, setOrChecklist] = useState<ChecklistItem[]>([
    { id: 'setup-transducer', title: 'Prepare ICP transducer and leveling device', checked: false },
    { id: 'setup-chamber', title: 'Ensure drainage chamber is on IV pole that stays with patient', checked: false },
    { id: 'label-evd', title: 'Label EVD tubing distinctly with "EVD - Do Not Infuse"', checked: false },
    { id: 'relevel-after-positioning', title: 'After positioning, re-level EVD at tragus and secure', checked: false },
    { id: 'monitor-icp', title: 'Monitor ICP throughout procedure if possible', checked: false },
    { id: 'document-hourly', title: 'Document EVD drainage setting and output hourly', checked: false },
    { id: 'communicate-drainage-cessation', title: 'Report sudden cessation of CSF drainage to surgeon', checked: false },
    { id: 'communicate-absent-csf', title: 'Report absence of CSF when expected to surgeon', checked: false },
    { id: 'communicate-large-output', title: 'Report >20 mL drained in one hour to surgeon', checked: false },
    { id: 'communicate-bloody-csf', title: 'Report any acute change in CSF appearance to surgeon', checked: false },
    { id: 'communicate-waveform-changes', title: 'Report dampened/disappeared ICP waveform immediately', checked: false },
    { id: 'handoff-details', title: 'Provide complete EVD handoff details (status, output, ICP, issues)', checked: false },
  ])

  const [anesthesiaChecklist, setAnesthesiaChecklist] = useState<ChecklistItem[]>([
    { id: 'pre-eval-status', title: 'Evaluate EVD status and ICP trend before induction', checked: false },
    { id: 'baseline-neuro-exam', title: 'Ensure proper baseline neuro exam completed', checked: false },
    { id: 'review-evd-data', title: 'Review recent EVD outputs, ICP values, CSF appearance', checked: false },
    { id: 'plan-induction', title: 'Coordinate EVD management plan with neurosurgery for induction', checked: false },
    { id: 'smooth-induction', title: 'Perform smooth, deep induction to prevent coughing/bucking', checked: false },
    { id: 'manage-blood-pressure', title: 'Treat blood pressure spikes promptly during intubation', checked: false },
    { id: 'ventilation-strategy', title: 'Maintain PaCO₂ in low-normal range (30-35 mmHg) if ICP concern', checked: false },
    { id: 'head-positioning', title: 'Keep head neutral and elevated ~30° if possible', checked: false },
    { id: 'monitor-peep', title: 'Use lowest PEEP necessary for oxygenation', checked: false },
    { id: 'continuous-vs-intermittent', title: 'Decide on continuous vs intermittent EVD management', checked: false },
    { id: 'document-changes', title: 'Document all EVD changes (time clamped/unclamped)', checked: false },
    { id: 'anticoagulation-status', title: 'Verify coagulation parameters acceptable', checked: false },
    { id: 'sah-aneurysm-awareness', title: 'If SAH with unsecured aneurysm: avoid excessive drainage', checked: false },
    { id: 'emergence-planning', title: 'Plan smooth emergence (consider deep extubation)', checked: false },
    { id: 'transfer-arrangements', title: 'Ensure EVD correctly managed during ICU transfer', checked: false },
    { id: 'dvt-prophylaxis', title: 'Hold DVT prophylaxis around EVD removal (4hr before/after)', checked: false },
  ])

  const [notes, setNotes] = useState('')

  const toggleItem = (section: 'or' | 'anesthesia', id: string) => {
    if (section === 'or') {
      setOrChecklist(items => items.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ))
    } else {
      setAnesthesiaChecklist(items => items.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ))
    }
  }

  const clearAll = () => {
    setOrChecklist(items => items.map(item => ({ ...item, checked: false })))
    setAnesthesiaChecklist(items => items.map(item => ({ ...item, checked: false })))
    setNotes('')
  }

  const getCompletionPercentage = (items: ChecklistItem[]) => {
    const checked = items.filter(item => item.checked).length
    return Math.round((checked / items.length) * 100)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold text-medical-blue dark:text-blue-400 mb-6">
        EVD Management Checklist
      </h2>

      <div className="mb-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveSection('or')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeSection === 'or'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          OR Management Protocol
        </button>
        <button
          onClick={() => setActiveSection('anesthesia')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeSection === 'anesthesia'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Anesthesia Considerations
        </button>
        <button
          onClick={() => setActiveSection('notes')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeSection === 'notes'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Notes
        </button>
      </div>

      {activeSection === 'or' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">OR EVD Management Protocol</h3>
            <div className="bg-blue-50 dark:bg-blue-900 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-medical-blue dark:text-blue-400">
                {getCompletionPercentage(orChecklist)}% Complete
              </span>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {orChecklist.map((item) => (
              <label
                key={item.id}
                className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  item.checked
                    ? 'bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem('or', item.id)}
                  className="mt-1 mr-3 w-5 h-5 cursor-pointer"
                />
                <span className={`flex-1 ${item.checked ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                  {item.title}
                </span>
              </label>
            ))}
          </div>

          <QuickReference section="or" />
        </div>
      )}

      {activeSection === 'anesthesia' && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Anesthesia Considerations</h3>
            <div className="bg-blue-50 dark:bg-blue-900 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-medical-blue dark:text-blue-400">
                {getCompletionPercentage(anesthesiaChecklist)}% Complete
              </span>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {anesthesiaChecklist.map((item) => (
              <label
                key={item.id}
                className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  item.checked
                    ? 'bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem('anesthesia', item.id)}
                  className="mt-1 mr-3 w-5 h-5 cursor-pointer"
                />
                <span className={`flex-1 ${item.checked ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                  {item.title}
                </span>
              </label>
            ))}
          </div>

          <QuickReference section="anesthesia" />
        </div>
      )}

      {activeSection === 'notes' && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Clinical Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Document EVD-related observations, ICP trends, drain outputs, complications, handoff information..."
            className="w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={clearAll}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Clear All
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-medical-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Print Checklist
        </button>
      </div>
    </div>
  )
}

function QuickReference({ section }: { section: 'or' | 'anesthesia' }) {
  const orTips = [
    '• Level EVD at external auditory meatus (tragus)',
    '• ICP readings only valid when drain is briefly closed',
    '• Clamp EVD for 1 minute hourly to obtain ICP reading',
    '• Document: "EVD at X cmH₂O, drained Y mL this hour, ICP = Z mmHg"',
    '• Communicate immediately if: cessation of drainage, absent CSF, >20 mL/hour, bloody CSF, waveform changes',
  ]

  const anesthesiaTips = [
    '• Smooth induction to prevent ICP spikes from coughing/bucking',
    '• Use lidocaine IV or intratracheal to blunt pressor response',
    '• Maintain low-normal PaCO₂ (30-35 mmHg) if ICP concern',
    '• Avoid high PEEP; keep head elevated ~30° if possible',
    '• For SAH with unsecured aneurysm: maintain higher EVD threshold (15-20 cmH₂O)',
    '• Hold DVT prophylaxis 4 hours before/after EVD removal',
  ]

  return (
    <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <h4 className="font-semibold text-medical-blue dark:text-blue-400 mb-2">Quick Reference Tips:</h4>
      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {(section === 'or' ? orTips : anesthesiaTips).map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}

