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
      <div className="space-y-8 text-gray-800 dark:text-gray-200">
        
        {/* Ventricular System Overview */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">Ventricular System Overview</h3>
          <p className="mb-5">
            The ventricular system is an interconnected series of cavities within the brain filled with cerebrospinal fluid (CSF). 
            This system consists of four main ventricles that communicate with each other and with the subarachnoid space.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-600 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Lateral Ventricles</h4>
              <p className="text-sm mb-2">C-shaped cavities within each cerebral hemisphere</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Capacity:</strong> 7-10 mL each<br/>
                <strong>Location:</strong> Right and left hemispheres
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-600 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Third Ventricle</h4>
              <p className="text-sm mb-2">Midline structure in the diencephalon</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> Between the thalami<br/>
                <strong>Shape:</strong> Slit-like configuration
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500 dark:border-purple-600 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Fourth Ventricle</h4>
              <p className="text-sm mb-2">Located in the hindbrain</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Location:</strong> Between brainstem and cerebellum<br/>
                <strong>Exits:</strong> Foramina of Luschka and Magendie
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900 border-l-4 border-orange-500 dark:border-orange-600 rounded-lg p-4">
              <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Central Canal</h4>
              <p className="text-sm mb-2">Extends through the spinal cord</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Connection:</strong> Continuous with fourth ventricle<br/>
                <strong>Function:</strong> CSF circulation to spinal cord
              </p>
            </div>
          </div>
        </section>

        {/* CSF Flow Pathway */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">CSF Flow Pathway</h3>
          <p className="mb-5">
            CSF circulates through a specific pathway from production to reabsorption. Understanding this flow is essential 
            for comprehending EVD function and placement.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900 rounded-lg p-5 mb-5">
            <h4 className="font-semibold text-medical-blue dark:text-blue-300 mb-4">Complete Circulation Route:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Production in Choroid Plexus</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    CSF is produced by specialized ependymal cells in the <strong>choroid plexus</strong> within the ventricles 
                    (~20 mL/hour, ~500 mL/day)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Lateral Ventricles → Third Ventricle</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    CSF flows through <strong>interventricular foramina (foramina of Monro)</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Third Ventricle → Fourth Ventricle</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    CSF passes via <strong>cerebral aqueduct (aqueduct of Sylvius)</strong>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Fourth Ventricle → Subarachnoid Space</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    CSF exits via lateral apertures (<strong>foramina of Luschka</strong>) and median aperture (<strong>foramen of Magendie</strong>)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-600 dark:bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Reabsorption into Venous System</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    CSF is reabsorbed via <strong>arachnoid granulations</strong> near the apex of the skull into the superior sagittal sinus
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 text-sm">
            <p className="font-semibold mb-2">Key Facts:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Total CSF volume: <strong>~150 mL</strong></li>
              <li>Production rate: <strong>~20 mL/hour</strong></li>
              <li>Entire volume replaced <strong>3-4 times daily</strong></li>
            </ul>
          </div>
        </section>

        {/* EVD Placement */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">EVD Placement: Anatomical Considerations</h3>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg p-5 mb-5">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-4">Typical EVD Catheter Position</h4>
            <div className="space-y-3 text-sm">
              <p>
                The catheter tip is typically placed in the <strong>frontal horn of the lateral ventricle</strong>, 
                near the <strong>foramen of Monro</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded p-3">
                <p className="font-semibold mb-2">Why This Location?</p>
                <ul className="space-y-1 list-disc list-inside text-xs">
                  <li>Provides optimal drainage and ICP monitoring</li>
                  <li>Strategic point connecting lateral and third ventricles</li>
                  <li>Accessible via frontal approach</li>
                  <li>Minimizes risk of injury to critical structures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-5">
            <h4 className="font-semibold text-medical-blue dark:text-blue-300 mb-4">Leveling Reference Point</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded p-4">
                <p className="font-semibold mb-2 text-medical-blue dark:text-blue-400">External Landmark</p>
                <p className="text-2xl font-bold text-medical-blue dark:text-blue-400 mb-1">Tragus</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">(External Auditory Meatus)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-4">
                <p className="font-semibold mb-2 text-medical-blue dark:text-blue-400">Internal Landmark</p>
                <p className="text-2xl font-bold text-medical-blue dark:text-blue-400 mb-1">Foramen of Monro</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">(Ventricular System Height)</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-900 rounded p-4 text-sm">
              <p className="font-semibold mb-2">💡 Clinical Pearl:</p>
              <p className="mb-3">
                The external auditory meatus lies at approximately the same horizontal plane as the foramen of Monro 
                when the patient is supine with the head in neutral position.
              </p>
              <div className="border-t border-yellow-300 dark:border-yellow-700 pt-3 mt-3">
                <p className="font-semibold mb-1">Leveling Consequences:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold">Below level:</span> Excessive drainage
                  </div>
                  <div>
                    <span className="font-semibold">Above level:</span> Inadequate drainage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

function PhysiologyContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-8 text-gray-800 dark:text-gray-200">
        
        {/* Monro-Kellie Doctrine */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">Monro-Kellie Doctrine</h3>
          <p className="mb-4">
            The skull is a rigid, fixed-volume container. The Monro-Kellie doctrine states that the total volume within 
            the skull must remain constant, representing the fundamental principle of <strong>conservation of volume</strong>.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-5 mb-4">
            <p className="font-semibold mb-3 text-medical-blue dark:text-blue-300">Intracranial Volume Components:</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-blue dark:text-blue-400">~80%</p>
                <p className="text-sm font-semibold">Brain Tissue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-blue dark:text-blue-400">~10%</p>
                <p className="text-sm font-semibold">Blood Volume</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-medical-blue dark:text-blue-400">~10%</p>
                <p className="text-sm font-semibold">CSF</p>
              </div>
            </div>
            <p className="text-sm italic border-t border-blue-300 dark:border-blue-600 pt-3">
              Any increase in one component must be offset by a decrease in another, or intracranial pressure will rise.
            </p>
          </div>
          <p className="text-sm">
            Initial compensation occurs through displacement of blood from venous sinuses and CSF out of the skull. 
            An EVD exploits this principle by removing CSF to reduce pressure when brain tissue swelling or blood volume increases.
          </p>
        </section>

        {/* Brain Compliance Curve */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">Brain Compliance Curve</h3>
          <p className="mb-4">
            The relationship between intracranial volume and pressure is <strong>non-linear</strong>, following a compliance curve 
            with two distinct phases:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-600 p-4 rounded">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Compensatory Phase</h4>
              <p className="text-sm">
                Initially, volume changes cause relatively little pressure increase due to displacement of venous blood and CSF. 
                The brain can accommodate moderate increases in volume.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-600 p-4 rounded">
              <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Decompensated Phase</h4>
              <p className="text-sm">
                Beyond a critical point, compensatory mechanisms are exhausted. Small volume increases cause 
                <strong> large, rapid pressure rises</strong>. This is the danger zone.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
            <p className="text-sm">
              <strong>Clinical Significance:</strong> Relatively small shifts in intracranial volume may cause large differences 
              in ICP, especially in younger patients with no cerebral atrophy (steeper compliance curve with less room to accommodate swelling).
            </p>
          </div>
        </section>

        {/* CSF Production & Circulation */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">CSF Production & Circulation</h3>
          <p className="mb-4">
            CSF is synthesized by the <strong>choroid plexus</strong> within the cerebral ventricles at a surprisingly high rate. 
            It circulates through the ventricular system, wraps around through the subarachnoid space, and is reabsorbed by 
            <strong> arachnoid granulations</strong> near the apex of the skull.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Production Rate</p>
              <p className="text-3xl font-bold text-medical-blue dark:text-blue-400">~20 mL/hr</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">≈ 500 mL/day</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Total CSF Volume</p>
              <p className="text-3xl font-bold text-medical-green dark:text-green-400">~150 mL</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">in the system</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Turnover Rate</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3-4×</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">per day</p>
            </div>
          </div>
          <p className="text-sm">
            This continual high-volume turnover means an EVD can significantly alter intracranial dynamics by removing 
            CSF faster than it's produced, which is why drainage settings and monitoring are critical.
          </p>
        </section>

        {/* ICP Norms & Cerebral Perfusion Pressure */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">ICP Norms & Cerebral Perfusion Pressure</h3>
          
          <div className="mb-5">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Intracranial Pressure (ICP) Values:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Normal ICP</p>
                    <p className="text-2xl font-bold text-medical-green dark:text-green-400">5-15 mmHg</p>
                  </div>
                  <span className="text-3xl">✓</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Typical range in healthy adults</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Treatment Threshold</p>
                    <p className="text-2xl font-bold text-medical-red dark:text-red-400">&gt;20-22 mmHg</p>
                  </div>
                  <span className="text-3xl">⚠️</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Sustained elevation requiring intervention</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg p-5">
            <h4 className="font-semibold text-medical-blue dark:text-blue-300 mb-3">Cerebral Perfusion Pressure (CPP):</h4>
            <div className="bg-white dark:bg-gray-800 rounded p-4 mb-3 text-center">
              <p className="text-2xl font-bold text-medical-blue dark:text-blue-400">CPP = MAP - ICP</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mean Arterial Pressure minus Intracranial Pressure</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold mb-1">Target CPP:</p>
                <p><strong className="text-medical-blue dark:text-blue-400">60-70 mmHg</strong> (minimum 50-60 mmHg)</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Why CPP Matters:</p>
                <p>Ensures adequate cerebral blood flow and oxygen delivery to brain tissue</p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="font-semibold mb-2">Cerebral Autoregulation:</p>
            <p>
              In healthy individuals, the brain maintains constant blood flow across a MAP range of 50-150 mmHg. 
              However, <strong>autoregulation may be impaired</strong> in brain injury, making CPP management critical.
            </p>
          </div>
        </section>

        {/* Clinical Manifestations of Elevated ICP */}
        <section>
          <h3 className="text-xl font-semibold text-medical-blue dark:text-blue-400 mb-4">Clinical Manifestations of Elevated ICP</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Common Signs & Symptoms:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Early/Chronic Signs:</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Headache (worse in morning, with Valsalva)</li>
                  <li>Nausea and vomiting</li>
                  <li>Papilledema (chronic elevation)</li>
                  <li>Visual changes</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Progressive Signs:</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Altered mental status</li>
                  <li>Pupillary changes (dilation, asymmetry)</li>
                  <li>Motor deficits</li>
                  <li>Seizures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900 border-2 border-red-400 dark:border-red-700 rounded-lg p-5">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">🚨</span>
              Cushing's Triad (Late Sign of Herniation)
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded p-3 text-center">
                <p className="font-bold text-red-600 dark:text-red-400 text-lg">Hypertension</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Widened pulse pressure</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 text-center">
                <p className="font-bold text-red-600 dark:text-red-400 text-lg">Bradycardia</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Reflex response to HTN</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 text-center">
                <p className="font-bold text-red-600 dark:text-red-400 text-lg">Irregular Respirations</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Brainstem compression</p>
              </div>
            </div>
            <p className="text-sm mt-4 font-semibold text-red-800 dark:text-red-300">
              ⚠️ Warning: These are LATE findings indicating imminent herniation. Do not wait for Cushing's triad to treat elevated ICP.
            </p>
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

