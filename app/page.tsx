'use client'

import { useState } from 'react'
import ICPRiskCalculator from '@/components/ICPRiskCalculator'
import EVDChecklist from '@/components/EVDChecklist'
import Navigation from '@/components/Navigation'
import DocumentationLink from '@/components/DocumentationLink'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'checklist' | 'education'>('calculator')

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-colors duration-200">
          <h1 className="text-3xl font-bold text-medical-blue dark:text-blue-400 mb-2">
            Quality & Safety During Intra-Hospital Transport (IHT) of Patients With a Clamped External Ventricular Drain
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Medical Decision Support Tool for Neurocritical Care
          </p>
        </div>

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'calculator' && (
            <>
              <ICPRiskCalculator />
              <Footer />
            </>
          )}
          {activeTab === 'checklist' && <EVDChecklist />}
          {activeTab === 'education' && <EducationSection />}
        </div>
      </div>
    </main>
  )
}

function EducationSection() {
  const [activeEducationTab, setActiveEducationTab] = useState<'anatomy' | 'physiology' | 'drain'>('anatomy')

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold text-medical-blue dark:text-blue-400 mb-6">
        Anatomy & Physiology Education
      </h2>

      <div className="mb-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveEducationTab('anatomy')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeEducationTab === 'anatomy'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Ventricular Anatomy
        </button>
        <button
          onClick={() => setActiveEducationTab('physiology')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeEducationTab === 'physiology'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          CSF & ICP Physiology
        </button>
        <button
          onClick={() => setActiveEducationTab('drain')}
          className={`px-6 py-3 font-semibold transition-all border-b-2 ${
            activeEducationTab === 'drain'
              ? 'border-medical-blue dark:border-blue-400 text-medical-blue dark:text-blue-400'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Drain Dynamics
        </button>
      </div>

      {activeEducationTab === 'anatomy' && <AnatomyContent />}
      {activeEducationTab === 'physiology' && <PhysiologyContent />}
      {activeEducationTab === 'drain' && <DrainDynamicsContent />}
    </div>
  )
}

function AnatomyContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-6 text-gray-800 dark:text-gray-200">
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">Ventricular System Overview</h3>
          <p className="mb-4">
            The ventricular system is an interconnected series of cavities within the brain filled with cerebrospinal fluid (CSF). 
            This system consists of four main ventricles that communicate with each other and with the subarachnoid space.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-3 text-medical-blue dark:text-blue-400">The Four Ventricles:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lateral ventricles</strong> (right and left) - C-shaped cavities within each cerebral hemisphere (capacity: 7-10 mL each)</li>
              <li><strong>Third ventricle</strong> - Midline structure in the diencephalon, between the thalami</li>
              <li><strong>Fourth ventricle</strong> - Located in the hindbrain, between the brainstem and cerebellum</li>
              <li><strong>Central canal</strong> - Continuous with the fourth ventricle, extending through the spinal cord</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm">
              <strong>Clinical Note:</strong> Lateral ventricular asymmetry occurs in 5-12% of the population and is generally a normal variant.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">CSF Flow Pathway</h3>
          <p className="mb-4">
            CSF circulates through a specific pathway from production to reabsorption:
          </p>
          
          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-3">Production:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>CSF is produced by the <strong>choroid plexus</strong> - specialized ependymal cells with a rich capillary network</li>
              <li>Production rate: <strong>~20-25 mL/hour</strong> (approximately 500 mL/day)</li>
              <li>Total CSF volume in the system: <strong>~150 mL</strong></li>
              <li>The entire CSF volume is replaced approximately 3-4 times daily</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-3">Circulation Route:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Lateral ventricles</strong> → through <strong>interventricular foramina (foramina of Monro)</strong> → <strong>third ventricle</strong></li>
              <li><strong>Third ventricle</strong> → via <strong>cerebral aqueduct (aqueduct of Sylvius)</strong> → <strong>fourth ventricle</strong></li>
              <li><strong>Fourth ventricle</strong> → via lateral apertures (<strong>foramina of Luschka</strong>) and median aperture (<strong>foramen of Magendie</strong>) → <strong>subarachnoid space</strong></li>
              <li><strong>Subarachnoid space</strong> → reabsorbed via <strong>arachnoid granulations</strong> into the venous system (superior sagittal sinus)</li>
            </ol>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">EVD Placement: Anatomical Considerations</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-medical-blue dark:text-blue-400 mb-2">Typical EVD Catheter Position:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>The catheter tip is typically placed in the <strong>frontal horn of the lateral ventricle</strong>, near the <strong>foramen of Monro</strong></li>
              <li>This location provides optimal drainage and ICP monitoring</li>
              <li>The foramen of Monro connects the lateral ventricle to the third ventricle, making it a strategic point for CSF drainage</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2">Leveling Reference Point:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>EVDs are leveled at the <strong>external auditory meatus (tragus)</strong></li>
              <li>This anatomical landmark approximates the height of the <strong>foramen of Monro</strong> and the ventricular system</li>
              <li>Proper leveling ensures that drainage occurs only when ICP exceeds the set threshold</li>
              <li>If the drain is positioned below this level, excessive drainage may occur; if above, inadequate drainage results</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-600 p-4">
            <p className="font-semibold mb-2">💡 Why the Tragus?</p>
            <p className="text-sm">
              The external auditory meatus lies at approximately the same horizontal plane as the foramen of Monro when the patient 
              is supine with the head in a neutral position. This makes it a reliable external landmark for calibrating the drainage 
              system to the actual intraventricular pressure.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">Clinical Relevance to EVD Management</h3>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="mb-3">Understanding ventricular anatomy explains several key EVD management principles:</p>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li><strong>Obstruction Sites:</strong> Blockages can occur at narrow passages (foramina of Monro, aqueduct of Sylvius), leading to hydrocephalus</li>
              <li><strong>Drainage Dynamics:</strong> The siphon effect of an EVD works because the catheter creates a direct connection from the lateral ventricle to an external collection system</li>
              <li><strong>Position-Dependent Drainage:</strong> Changes in patient position alter the hydrostatic pressure gradient between the ventricles and the drainage chamber, which is why clamping during repositioning is critical</li>
              <li><strong>Bilateral vs Unilateral Pathology:</strong> The two lateral ventricles are separate; pathology may affect them asymmetrically</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}

function PhysiologyContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-6 text-gray-800 dark:text-gray-200">
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">CSF Production & Circulation</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Production Rate</h4>
              <p className="text-2xl font-bold text-medical-blue dark:text-blue-400">~20-25 mL/hour</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">≈ 500 mL/day</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Total CSF Volume</h4>
              <p className="text-2xl font-bold text-medical-green dark:text-green-400">~150 mL</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">in the system</p>
            </div>
          </div>
          <p>
            CSF is produced by the <strong>choroid plexus</strong> in the ventricles and reabsorbed into the bloodstream 
            via <strong>arachnoid granulations</strong> in the superior sagittal sinus. This continual turnover means 
            an EVD can significantly alter intracranial dynamics by removing CSF faster than it's produced.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">Monro-Kellie Doctrine</h3>
          <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2">Fundamental Principle:</p>
            <p className="mb-3">
              The skull is a rigid box containing three components: <strong>brain tissue</strong>, <strong>blood</strong>, 
              and <strong>CSF</strong>.
            </p>
            <p className="text-medical-blue dark:text-blue-400 font-semibold">
              An increase in any one component must be offset by a decrease in another, or else intracranial pressure will rise.
            </p>
          </div>
          <p>
            An EVD exploits this principle by removing CSF, thereby reducing pressure when other components 
            (brain tissue swelling or blood volume) increase. However, once compensatory mechanisms are exhausted, 
            small volume increases lead to large ICP rises.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">ICP Norms & Pathophysiology</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg px-4 py-2 min-w-[120px]">
                <p className="text-sm font-semibold">Normal ICP</p>
                <p className="text-lg font-bold text-medical-green dark:text-green-400">5-15 mmHg</p>
              </div>
              <p className="text-sm">Typical range in healthy adults</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg px-4 py-2 min-w-[120px]">
                <p className="text-sm font-semibold">Treatment</p>
                <p className="text-lg font-bold text-medical-red dark:text-red-400">&gt;20-22 mmHg</p>
              </div>
              <p className="text-sm">Sustained elevation typically treated in neurocritical care</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function DrainDynamicsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-6 text-gray-800 dark:text-gray-200">
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">How EVD Works</h3>
          <p className="mb-4">
            An EVD is essentially a <strong>siphon</strong> that uses the pressure gradient. When ICP exceeds 
            the set threshold (e.g., 10 cmH₂O), CSF flows down into the chamber until pressure drops to equilibrium. 
            If ICP is below the threshold, no CSF drains.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">Clinical Drainage Settings</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-medical-blue dark:text-blue-400 mb-2">Low Setting</h4>
              <p className="text-2xl font-bold mb-2">5 cmH₂O</p>
              <p className="text-sm"><strong>Purpose:</strong> Aggressive drainage</p>
              <p className="text-sm mt-2"><strong>Risk:</strong> Overdrainage, brain collapse, subdural hematoma</p>
              <p className="text-sm mt-2"><strong>Use:</strong> Acute hydrocephalus</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-medical-green dark:text-green-400 mb-2">Standard Setting</h4>
              <p className="text-2xl font-bold mb-2">10 cmH₂O</p>
              <p className="text-sm"><strong>Purpose:</strong> Standard drainage</p>
              <p className="text-sm mt-2"><strong>Risk:</strong> Balanced approach</p>
              <p className="text-sm mt-2"><strong>Use:</strong> Most common setting</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h4 className="font-semibold text-medical-orange dark:text-orange-400 mb-2">High Setting</h4>
              <p className="text-2xl font-bold mb-2">15-20 cmH₂O</p>
              <p className="text-sm"><strong>Purpose:</strong> Safety valve only</p>
              <p className="text-sm mt-2"><strong>Risk:</strong> Minimal drainage</p>
              <p className="text-sm mt-2"><strong>Use:</strong> SAH with unsecured aneurysm</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-3">Key Principles</h3>
          <div className="space-y-3">
            <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4">
              <p className="font-semibold mb-1">⚠️ Critical Safety Point</p>
              <p className="text-sm">
                Clamping the EVD when changing bed position prevents rapid drainage that could cause brain herniation. 
                Always clamp during patient repositioning or transport.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 dark:border-blue-600 p-4">
              <p className="font-semibold mb-1">💡 Clinical Pearl</p>
              <p className="text-sm">
                You cannot measure ICP continuously while the EVD is open to drain with standard systems. 
                Must briefly clamp to obtain ICP reading.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 transition-colors duration-200">
      <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3 transition-colors duration-200">
        <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <p className="text-blue-900 dark:text-blue-100">
            <strong className="text-blue-700 dark:text-blue-300">Reference:</strong> Chaikittisilpa N, Lele AV, Lyons VH, Nair BG, Newman SF, Blissitt PA, Vavilala MS. 
            Risks of Routinely Clamping External Ventricular Drains for Intrahospital Transport in Neurocritically Ill Cerebrovascular Patients. 
            Neurocrit Care. 2017 Apr;26(2):196-204. doi: 10.1007/s12028-016-0308-0. PMID: 27757914.
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4">
          <p className="text-green-900 dark:text-green-100">
            <strong className="text-green-700 dark:text-green-300">App Developers:</strong> Aria Lele, Abhijit Lele
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">All RIGHTS RESERVED</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Last Updated: 01/20/2025</p>
      </div>
    </div>
  )
}

