export default function DomainExpertise() {
  const programs = [
    {
      title: "Product & Innovation Hub",
      description: "Drive product excellence and innovation mindset",
      icon: "🚀"
    },
    
    {
      title: "Gen-AI Mastery",
      description: "Master generative AI technologies and applications",
      icon: "🤖"
    },
    {
      title: "Leadership Elevation",
      description: "Develop next-generation leadership capabilities",
      icon: "👥"
    },
    {
      title: "Tech & Data Insights",
      description: "Harness technology and data for business growth",
      icon: "📊"
    },
    {
      title: "Operations Excellence",
      description: "Optimize operations for maximum efficiency",
      icon: "⚙️"
    },
    {
      title: "Digital Enterprise",
      description: "Transform your organization for digital success",
      icon: "💻"
    },
    {
      title: "Fintech Innovation Lab",
      description: "Explore cutting-edge financial technologies",
      icon: "💰"
    }
  ];

  return (
    <section id="domain-expertise" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Domain Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-4xl">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
