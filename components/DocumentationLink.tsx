interface DocumentationLinkProps {
  href: string
  title: string
  description: string
}

export default function DocumentationLink({ href, title, description }: DocumentationLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-medical-blue dark:hover:border-blue-400 hover:shadow-md transition-all bg-white dark:bg-gray-700"
    >
      <h3 className="font-semibold text-medical-blue dark:text-blue-400 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  )
}

