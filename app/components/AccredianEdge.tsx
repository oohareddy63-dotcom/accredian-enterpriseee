export default function AccredianEdge() {
  const topRowAspects = [
    {
      title: "Tailored Solutions",
      description: "Programs customized to your organization's goals and challenges.",
      icon: "💡"
    },
    {
      title: "Innovative Framework", 
      description: "Proprietary methods for impactful, application-driven results.",
      icon: "⚙️"
    },
    {
      title: "Diverse Offerings",
      description: "Courses across industries, skill levels, and emerging fields.",
      icon: "🔄"
    },
    {
      title: "Flexible Delivery",
      description: "Online and offline options tailored to your needs.",
      icon: "📦"
    }
  ];

  const bottomRowAspects = [
    {
      title: "Expert Guidance",
      description: "Learn from industry leaders with real-world success.",
      icon: "👤"
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art LMS for seamless learning experiences.",
      icon: "🌐"
    },
    {
      title: "Proven Impact",
      description: "Trusted by leading organizations for measurable ROI.",
      icon: "🎯"
    }
  ];

  return (
    <section id="accredian-edge" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          The Accredian Edge
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Key Aspects of Our Strategic Training
        </p>
        
        {/* Top Row */}
        <div className="flex flex-wrap justify-center items-center mb-8">
          {topRowAspects.map((aspect, index) => (
            <div key={index} className="flex flex-col items-center mx-4 mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-3 shadow-lg">
                {aspect.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                {aspect.title}
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-xs leading-relaxed">
                {aspect.description}
              </p>
              {index < topRowAspects.length - 1 && (
                <div className="hidden md:block absolute ml-24 mt-10">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center items-center">
          {bottomRowAspects.map((aspect, index) => (
            <div key={index} className="flex flex-col items-center mx-4 mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-3 shadow-lg">
                {aspect.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                {aspect.title}
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-xs leading-relaxed">
                {aspect.description}
              </p>
              {index < bottomRowAspects.length - 1 && (
                <div className="hidden md:block absolute ml-24 mt-10">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
