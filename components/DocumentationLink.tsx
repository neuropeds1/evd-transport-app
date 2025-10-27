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
      className="block p-4 border border-gray-300 rounded-lg hover:border-medical-blue hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-medical-blue mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  )
}

