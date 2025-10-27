'use client'

import { useState } from 'react'

export default function ICPRiskCalculator() {
  const [formData, setFormData] = useState({
    icp: '<15 mmHg',
    intubated: 'No',
    duration: 30,
    days: 5,
    csf: 5.0,
    iht: 'IHT for Diagnostic Procedure',
    unscheduled: 'No',
  })

  const [result, setResult] = useState<number | null>(null)
  const [riskCategory, setRiskCategory] = useState<'LOW' | 'MODERATE' | 'HIGH' | null>(null)

  const calculateRisk = () => {
    let risk = 1

    // ICP Category
    if (formData.icp === '<15 mmHg') risk *= 1
    if (formData.icp === '15–19 mmHg') risk *= 3.4
    if (formData.icp === '≥20 mmHg') risk *= 12.94

    // Intubation
    if (formData.intubated === 'Yes') risk *= 0.58
    if (formData.intubated === 'No') risk *= 1

    // Duration
    risk *= (formData.duration / 10) * 0.95

    // Days since ICU admission
    risk *= formData.days * 0.97

    // CSF drainage
    risk *= formData.csf * 1.11

    // IHT Type
    if (formData.iht === 'IHT for Therapeutic Procedure') risk *= 5.82
    if (formData.iht === 'IHT for Diagnostic Procedure') risk *= 1

    // Unscheduled
    if (formData.unscheduled === 'Yes') risk *= 1.2
    if (formData.unscheduled === 'No') risk *= 1

    // Base risk
    risk *= 0.118

    const finalRisk = Math.min(risk, 100.0)
    const roundedResult = Math.round(finalRisk * 100) / 100

    setResult(roundedResult)

    if (roundedResult <= 20) {
      setRiskCategory('LOW')
    } else if (roundedResult <= 50) {
      setRiskCategory('MODERATE')
    } else {
      setRiskCategory('HIGH')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-medical-blue mb-6">
        Calculating the Risk of Intracranial Pressure (ICP) Elevation During Intra-Hospital Transport
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Pre-IHT ICP category:
          </label>
          <div className="flex gap-4">
            {['<15 mmHg', '15–19 mmHg', '≥20 mmHg'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="icp"
                  value={option}
                  checked={formData.icp === option}
                  onChange={(e) => setFormData({ ...formData, icp: e.target.value })}
                  className="mr-2"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Is the patient intubated?
          </label>
          <div className="flex gap-4">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="intubated"
                  value={option}
                  checked={formData.intubated === option}
                  onChange={(e) => setFormData({ ...formData, intubated: e.target.value })}
                  className="mr-2"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Duration of IHT (minutes): {formData.duration}
          </label>
          <input
            type="range"
            min="0"
            max="120"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Days since ICU admission: {formData.days}
          </label>
          <input
            type="range"
            min="0"
            max="30"
            value={formData.days}
            onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Hourly CSF drained (mL/h):
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={formData.csf}
            onChange={(e) => setFormData({ ...formData, csf: parseFloat(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-blue focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            IHT Type:
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['IHT for Therapeutic Procedure', 'IHT for Diagnostic Procedure'].map((option) => (
              <label key={option} className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="iht"
                  value={option}
                  checked={formData.iht === option}
                  onChange={(e) => setFormData({ ...formData, iht: e.target.value })}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            (Therapeutic procedures include procedures in the operating room or the angiography suite. 
            Diagnostic procedures are defined as transports to CT or MRI suites).
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Is the IHT Unscheduled? (Ex. Emergency Transport)
          </label>
          <div className="flex gap-4">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="unscheduled"
                  value={option}
                  checked={formData.unscheduled === option}
                  onChange={(e) => setFormData({ ...formData, unscheduled: e.target.value })}
                  className="mr-2"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={calculateRisk}
          className="w-full bg-medical-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Calculate Risk
        </button>

        {result !== null && (
          <div className={`mt-6 p-6 rounded-lg text-white font-bold text-xl ${
            riskCategory === 'LOW' ? 'bg-medical-green' :
            riskCategory === 'MODERATE' ? 'bg-medical-orange' :
            'bg-medical-red'
          }`}>
            <p className="mb-2">
              The absolute risk of ICP ≥ 20 mmHg during the IHT is {result}%.
            </p>
            <p>
              Risk Category: {riskCategory === 'LOW' ? '✅ LOW' : riskCategory === 'MODERATE' ? '⚠️ MODERATE' : '🟥 HIGH'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

