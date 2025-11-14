interface NavigationProps {
  activeTab: 'calculator' | 'checklist' | 'education'
  setActiveTab: (tab: 'calculator' | 'checklist' | 'education') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-1 flex gap-2 transition-colors duration-200">
      <button
        onClick={() => setActiveTab('calculator')}
        className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all ${
          activeTab === 'calculator'
            ? 'bg-medical-blue text-white shadow-lg'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        ICP Risk Calculator
      </button>
      <button
        onClick={() => setActiveTab('checklist')}
        className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all ${
          activeTab === 'checklist'
            ? 'bg-medical-blue text-white shadow-lg'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        EVD Management Checklist
      </button>
      <button
        onClick={() => setActiveTab('education')}
        className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all ${
          activeTab === 'education'
            ? 'bg-medical-blue text-white shadow-lg'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Education
      </button>
    </div>
  )
}

