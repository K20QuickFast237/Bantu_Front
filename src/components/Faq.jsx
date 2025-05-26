import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [expandedQuestion, setExpandedQuestion] = useState(-1);

  const tabs = ['General', 'Billing', 'Support', 'Privacy', 'Legal'];

  const faqData = {
    General: [
      {
        question: "What services do you offer?",
        answer: "We offer a wide range of digital marketing services including SEO, social media management, content creation, and web design to help grow your business online."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule a consultation to discuss your needs and create a customized plan for your business."
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes, we work with businesses of all sizes, from small startups to large enterprises. Our solutions are scalable and can be tailored to meet your specific needs and budget."
      }
    ],
    Billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. We also offer flexible payment plans for larger projects to accommodate your budget needs."
      },
      {
        question: "How does your pricing work?",
        answer: "Our pricing is transparent and based on the specific services you need. We offer both project-based and monthly retainer options to fit different business models and budgets."
      }
    ],
    Support: [
      {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including email, phone, and live chat during business hours. Our team is dedicated to ensuring your success with quick response times."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "We typically respond to support requests within 2-4 hours during business hours and within 24 hours on weekends. Urgent issues are prioritized and handled immediately."
      }
    ],
    Privacy: [
      {
        question: "How do you protect my data?",
        answer: "We take data protection seriously and use industry-standard encryption and security measures. All client data is stored securely and we never share your information with third parties."
      },
      {
        question: "What information do you collect?",
        answer: "We only collect information necessary to provide our services effectively, such as contact details and project requirements. Full details are available in our privacy policy."
      }
    ],
    Legal: [
      {
        question: "What are your terms of service?",
        answer: "Our terms of service outline the legal agreement between you and our company. They cover service delivery, payment terms, intellectual property rights, and dispute resolution procedures."
      },
      {
        question: "Do you offer contracts?",
        answer: "Yes, we provide detailed contracts for all our services that clearly outline deliverables, timelines, and terms. This ensures transparency and protects both parties."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
            FAQ
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(tab);
                setExpandedQuestion(-1);
              }}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData[activeTab]?.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedQuestion(expandedQuestion === index ? -1 : index)}
                className="w-full p-5 md:p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <h3 className="text-gray-700 font-medium text-base md:text-lg">
                  {item.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {expandedQuestion === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              {expandedQuestion === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 border-l-4 border-blue-500 ml-4 md:ml-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
