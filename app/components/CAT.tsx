'use client';

import { useState } from 'react';

export default function CAT() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'programs', label: 'Programs' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'process', label: 'Process' }
  ];

  const programs = [
    {
      title: 'Corporate Analytics Training',
      description: 'Advanced analytics skills for corporate teams',
      duration: '12 weeks',
      level: 'Intermediate to Advanced'
    },
    {
      title: 'Data Science Excellence',
      description: 'Comprehensive data science program',
      duration: '16 weeks',
      level: 'Beginner to Advanced'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI and ML techniques',
      duration: '20 weeks',
      level: 'Intermediate to Expert'
    }
  ];

  const benefits = [
    'Industry-recognized certification',
    'Hands-on project experience',
    'Expert instructor guidance',
    'Flexible learning schedule',
    'Corporate team pricing',
    'Post-training support'
  ];

  return (
    <section id="cat" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Corporate Analytics Training (CAT)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your organization's data-driven decision making with our comprehensive analytics training program
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Transform Your Team with Data Excellence
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Corporate Analytics Training program is designed to equip your team with the essential 
                  analytical skills needed to drive business growth and innovation. From basic data analysis 
                  to advanced machine learning, we cover the complete spectrum of analytics competencies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Customized curriculum for your industry</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Real-world business case studies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Expert-led interactive sessions</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Industry-Leading Analytics Training
                  </h4>
                  <p className="text-gray-600">
                    Join 500+ companies that have transformed their teams with CAT
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'programs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-900">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium text-gray-900">{program.level}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose CAT?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Corporate Success Stories
                </h4>
                <p className="text-gray-600 mb-4">
                  "The CAT program transformed our analytics capabilities. Our team now makes 
                  data-driven decisions with confidence and speed."
                </p>
                <p className="text-sm text-gray-500">
                  - Analytics Director, Fortune 500 Company
                </p>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Getting Started with CAT
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Consultation</h4>
                      <p className="text-gray-600">Assess your team's current skills and training needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Customization</h4>
                      <p className="text-gray-600">Tailor the program to your specific industry requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
                      <p className="text-gray-600">Execute training through flexible online or onsite sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                      <p className="text-gray-600">Ongoing guidance and post-training support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Team?
                </h4>
                <p className="mb-6">
                  Join leading companies that have enhanced their analytics capabilities with CAT.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Get Started Today
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
