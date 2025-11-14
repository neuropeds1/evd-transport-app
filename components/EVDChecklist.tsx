'use client'

import { useState } from 'react'

interface ChecklistItem {
  id: string
  title: string
  checked: boolean
  description?: string
}

interface ChecklistSection {
  title: string
  items: ChecklistItem[]
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

  const [anesthesiaSections, setAnesthesiaSections] = useState<ChecklistSection[]>([
    {
      title: 'Preoperative Assessment',
      items: [
        { id: 'baseline-neuro-exam', title: 'Obtain baseline neurological examination', checked: false },
        { id: 'review-evd-setting', title: 'Review EVD (cm H₂O) setting', checked: false },
        { id: 'review-csf-output', title: 'Review hourly CSF output to obtain baseline', checked: false },
        { id: 'review-icp-trends', title: 'Review baseline ICP mm Hg, ICP trends, and available multimodal monitoring data', checked: false },
        { id: 'review-csf-appearance', title: 'Review baseline CSF color and consistency', checked: false },
        { id: 'review-clamp-trials', title: 'Review EVD clamp trials data if available', checked: false },
        { id: 'review-coagulation', title: 'Review the coagulation profile', checked: false },
        { id: 'review-antibiotic-plan', title: 'Review the antibiotic plan if anticipating a new EVD/LD insertion in the operating room', checked: false },
        { id: 'preop-handoff', title: 'Provide EVD and LD details during preoperative handoff between intensive care/ward providers and the anesthesia providers', checked: false },
      ]
    },
    {
      title: 'Transporting Patients with EVD',
      items: [
        { id: 'transport-clamp-decision', title: 'Confirm decision to travel with EVD clamp vs. open', checked: false },
        { id: 'transport-clamp-location', title: 'If traveling with an EVD clamp, ensure clamping at the distal port on the CSF collecting system', checked: false },
        { id: 'transport-hob', title: 'Maintain head of bed status as in the ICU', checked: false },
        { id: 'transport-iv-pole', title: 'Confirm availability of a dedicated intravenous pole for EVD mount', checked: false },
        { id: 'transport-leveling', title: 'Confirm leveling EVD at the external auditory meatus', checked: false },
        { id: 'transport-icp-monitoring', title: 'Enable ICP monitoring during transport', checked: false },
        { id: 'transport-medications', title: 'Confirm availability of medications needed to treat intracranial hypertension during transport', checked: false },
      ]
    },
    {
      title: 'Intraoperative Management of Indwelling Drains',
      items: [
        { id: 'intraop-transducer', title: 'Prepare the transducer cable', checked: false },
        { id: 'intraop-label', title: 'Identify EVD tubing by appropriate unique labeling', checked: false },
        { id: 'intraop-hob', title: 'Confirm HOB status during the surgical procedure', checked: false },
        { id: 'intraop-leveling', title: 'Confirm the leveling of EVD at the external auditory meatus', checked: false },
        { id: 'intraop-icp-baseline', title: 'Obtain the ICP waveform and baseline ICP value', checked: false },
        { id: 'intraop-record-setting', title: 'Record q 1-h EVD setting', checked: false },
        { id: 'intraop-record-icp', title: 'Record at least q 1-h ICP values (recorded with EVD closed to drain)', checked: false },
        { id: 'intraop-record-output', title: 'Record at least q 1-h EVD drain output (expressed in mL)', checked: false },
        { id: 'intraop-handoff', title: 'Provide EVD details during intraoperative handoffs between anesthesia providers', checked: false },
      ]
    },
    {
      title: 'Inform the Surgeon if Any of the Following',
      items: [
        { id: 'inform-drainage-decline', title: 'Sudden decline in CSF drainage or no drainage from EVD, or occlusion of EVD', checked: false },
        { id: 'inform-high-output', title: 'If the drain output is >15-20 mL at any time or in any given hour', checked: false },
        { id: 'inform-csf-color-change', title: 'Sudden change in CSF color (e.g., bright red color may indicate bleeding from a ruptured aneurysm)', checked: false },
        { id: 'inform-waveform-loss', title: 'Dampening or loss of the ICP waveform', checked: false },
      ]
    }
  ])

  const [notes, setNotes] = useState('')

  const toggleItem = (section: 'or' | 'anesthesia', id: string) => {
    if (section === 'or') {
      setOrChecklist(items => items.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      ))
    } else {
      setAnesthesiaSections(sections => sections.map(sec => ({
        ...sec,
        items: sec.items.map(item => 
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      })))
    }
  }

  const clearAll = () => {
    setOrChecklist(items => items.map(item => ({ ...item, checked: false })))
    setAnesthesiaSections(sections => sections.map(sec => ({
      ...sec,
      items: sec.items.map(item => ({ ...item, checked: false }))
    })))
    setNotes('')
  }

  const getCompletionPercentage = (items: ChecklistItem[]) => {
    const checked = items.filter(item => item.checked).length
    return Math.round((checked / items.length) * 100)
  }

  const getSectionsCompletionPercentage = (sections: ChecklistSection[]) => {
    const allItems = sections.flatMap(sec => sec.items)
    const checked = allItems.filter(item => item.checked).length
    return Math.round((checked / allItems.length) * 100)
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
                <span className="flex-1 text-gray-800 dark:text-gray-200">
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
                {getSectionsCompletionPercentage(anesthesiaSections)}% Complete
              </span>
            </div>
          </div>
          
          <div className="space-y-6 mb-6">
            {anesthesiaSections.map((section, sectionIdx) => {
              const isInformSurgeonSection = section.title.includes('Inform the Surgeon')
              return (
                <div 
                  key={sectionIdx}
                  className={`rounded-lg p-4 ${
                    isInformSurgeonSection 
                      ? 'bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700' 
                      : 'bg-blue-50/30 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                  }`}
                >
                  <h4 className={`text-lg font-bold mb-3 pb-2 border-b-2 ${
                    isInformSurgeonSection
                      ? 'text-red-700 dark:text-red-400 border-red-300 dark:border-red-600'
                      : 'text-medical-blue dark:text-blue-400 border-blue-300 dark:border-blue-600'
                  }`}>
                    {isInformSurgeonSection && '⚠️ '}{section.title}
                  </h4>
                  <div className="space-y-3 mt-4">
                    {section.items.map((item) => (
                      <label
                        key={item.id}
                        className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          item.checked
                            ? 'bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700'
                            : isInformSurgeonSection
                            ? 'bg-white dark:bg-gray-800 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggleItem('anesthesia', item.id)}
                          className="mt-1 mr-3 w-5 h-5 cursor-pointer"
                        />
                        <span className="flex-1 text-gray-800 dark:text-gray-200">
                          {item.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            })}
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
    '• Complete preoperative assessment: baseline neuro exam, EVD setting, ICP trends, CSF output/appearance',
    '• Transport: Confirm clamp vs. open decision, maintain HOB status, level at external auditory meatus',
    '• Intraoperative: Record q 1-h EVD setting, ICP values (with EVD closed), and drain output (mL)',
    '• Immediately inform surgeon if: sudden drainage decline, >15-20 mL/hr output, CSF color change, or ICP waveform loss',
    '• Smooth induction with lidocaine IV (1.5 mg/kg) 90 sec before laryngoscopy to prevent ICP spikes',
    '• Maintain PaCO₂ 30-35 mmHg if ICP concern; avoid high PEEP; keep head neutral and elevated ~30°',
    '• SAH with unsecured aneurysm: maintain higher EVD threshold (15-20 cmH₂O) to reduce rebleed risk',
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

