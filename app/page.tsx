'use client'

import { useState } from 'react'
import ICPRiskCalculator from '@/components/ICPRiskCalculator'
import EVDChecklist from '@/components/EVDChecklist'
import Navigation from '@/components/Navigation'
import DocumentationLink from '@/components/DocumentationLink'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'checklist'>('calculator')

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-medical-blue mb-2">
            Quality & Safety During Intra-Hospital Transport (IHT) of Patients With a Clamped External Ventricular Drain
          </h1>
          <p className="text-gray-600 text-lg">
            Medical Decision Support Tool for Neurocritical Care
          </p>
        </div>

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'calculator' && <ICPRiskCalculator />}
          {activeTab === 'checklist' && <EVDChecklist />}
        </div>

        <DocumentationSection />
        <Footer />
      </div>
    </main>
  )
}

function DocumentationSection() {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-medical-blue mb-4">Documentation</h2>
      <p className="text-gray-600 mb-6">
        Explore detailed medical documentation on EVD management, anesthesia considerations, and anatomy & physiology.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <DocumentationLink
          href="/docs/OR_EVD_Management_Protocol.md"
          title="OR EVD Management Protocol"
          description="Complete checklist and guidelines for managing EVDs in the operating room"
        />
        <DocumentationLink
          href="/docs/Anesthesia_Considerations.md"
          title="Anesthesia Considerations"
          description="Pre-operative, intra-operative, and post-operative anesthesia considerations"
        />
        <DocumentationLink
          href="/docs/EVD_Anatomy_and_Physiology.md"
          title="Anatomy & Physiology"
          description="Educational module on CSF dynamics, ICP, and EVD mechanics"
        />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="mt-12 border-t border-gray-200 pt-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-yellow-800 font-semibold">
          ⚠️ Calculator has NOT been prospectively evaluated. Please use it at your discretion.
        </p>
      </div>
      
      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <strong>Reference:</strong> Chaikittisilpa N, Lele AV, Lyons VH, Nair BG, Newman SF, Blissitt PA, Vavilala MS. 
          Risks of Routinely Clamping External Ventricular Drains for Intrahospital Transport in Neurocritically Ill Cerebrovascular Patients. 
          Neurocrit Care. 2017 Apr;26(2):196-204. doi: 10.1007/s12028-016-0308-0. PMID: 27757914.
        </p>
        <p><strong>App Developers:</strong> Aria Lele, Abhijit Lele</p>
        <p className="text-xs text-gray-500">All RIGHTS RESERVED</p>
        <p className="text-xs text-gray-500">Last Updated: 01/20/2025</p>
      </div>
    </div>
  )
}

