export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: "📊"
    },
    {
      number: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: "📋"
    },
    {
      number: 3,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: "🖥️"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          How We Deliver Results That Matter?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          A Structured Three-Step Approach to Skill Development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border-l-4 border-r-4 border-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-2">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
