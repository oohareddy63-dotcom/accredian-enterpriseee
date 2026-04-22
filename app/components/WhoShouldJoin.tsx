export default function WhoShouldJoin() {
  const categories = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: "✅"
    },
    
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: "❌"
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: "🎓"
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: "💼"
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex justify-center items-center space-x-6">
                <div className="text-center">
                  <div className="w-32 h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">👩‍💻</div>
                  </div>
                  <div className="text-white text-sm">Working Professional</div>
                </div>
                <div className="text-center">
                  <div className="w-32 h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">👨‍💼</div>
                  </div>
                  <div className="text-white text-sm">Business Leader</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Who Should Join?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Strategic Skill Enhancement
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-xl">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
