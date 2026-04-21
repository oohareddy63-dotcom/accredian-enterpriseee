'use client';

import { useState } from 'react';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the duration of the training programs?",
      answer: "Our training programs typically range from 8 to 20 weeks, depending on the complexity and depth of the curriculum. We offer both intensive bootcamps and extended learning paths to accommodate different schedules and learning preferences."
    },
    {
      question: "Are the programs customized for specific industries?",
      answer: "Yes, we specialize in industry-specific training programs. Our curriculum is tailored to address the unique challenges and requirements of different sectors including healthcare, finance, retail, manufacturing, and technology."
    },
    {
      question: "What certification do participants receive?",
      answer: "Upon successful completion, participants receive industry-recognized certifications that are valued by leading employers. We also provide detailed performance reports and skill assessments to validate learning outcomes."
    },
    {
      question: "How are the training programs delivered?",
      answer: "We offer flexible delivery options including live virtual sessions, self-paced online learning, and onsite corporate training. Programs can be customized to blend different delivery methods based on your organization's needs."
    },
    {
      question: "What is the instructor-to-participant ratio?",
      answer: "We maintain an optimal instructor-to-participant ratio of 1:15 for interactive sessions and 1:25 for lectures, ensuring personalized attention and effective learning outcomes."
    },
    {
      question: "Is post-training support provided?",
      answer: "Yes, we provide comprehensive post-training support including access to learning materials, community forums, and optional mentoring sessions for up to 6 months after program completion."
    },
    {
      question: "How do you measure training effectiveness?",
      answer: "We use multiple metrics including pre and post-assessments, project evaluations, participant feedback, and business impact measurements to ensure training effectiveness and ROI."
    },
    {
      question: "Can training be scheduled around work hours?",
      answer: "Absolutely! We offer flexible scheduling options including weekend sessions, evening classes, and self-paced learning modules to minimize disruption to your business operations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            About Course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our team is here to help you find the perfect training solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
