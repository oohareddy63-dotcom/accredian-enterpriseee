export default function Testimonials() {
  const testimonials = [
    {
      company: "ADP",
      logo: "ADP",
      quote: "Accredian's training programs have significantly enhanced our team's technical capabilities. The customized approach and expert instructors made a real difference in our digital transformation journey.",
      author: "HR Director",
      position: "Leading HR Solutions Company"
    },
    {
      company: "BAYER",
      logo: "Bayer",
      quote: "The partnership with Accredian has been instrumental in upskilling our workforce. Their industry-specific programs and flexible delivery options perfectly aligned with our organizational needs.",
      author: "Learning & Development Head",
      position: "Global Pharmaceutical Leader"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Testimonials from Our Partners
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          What Our Clients Are Saying
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-blue-600">
                    {testimonial.logo}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.company}
                  </h3>
                </div>
              </div>
              <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center space-x-2">
          <button className="w-3 h-3 bg-blue-600 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-600 transition-colors"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-600 transition-colors"></button>
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="text-4xl mr-4">
                🎧
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Want to Learn More About Our Training Solutions?
                </h3>
                <p className="text-blue-100">
                  Get Expert Guidance for Your Team's Success!
                </p>
              </div>
            </div>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
