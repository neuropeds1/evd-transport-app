interface NavigationProps {
  activeTab: 'calculator' | 'checklist'
  setActiveTab: (tab: 'calculator' | 'checklist') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-1 flex gap-2">
      <button
        onClick={() => setActiveTab('calculator')}
        className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all ${
          activeTab === 'calculator'
            ? 'bg-medical-blue text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        ICP Risk Calculator
      </button>
      <button
        onClick={() => setActiveTab('checklist')}
        className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all ${
          activeTab === 'checklist'
            ? 'bg-medical-blue text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        EVD Management Checklist
      </button>
    </div>
  )
}

