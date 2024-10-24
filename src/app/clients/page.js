"use client";
import AuroraBackground from '@/components/auroraBackground/AuroraBackground';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import React, { useState } from 'react';
import { HiBuildingOffice2, HiMiniBanknotes, HiCpuChip, HiChevronDown, HiChevronUp, HiCheckCircle } from "react-icons/hi2";

const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 opacity-50">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="#f3f4f6"/>
        <path d="M0 50 L25 25 L50 50 L25 75 Z" fill="#e5e7eb" opacity="0.5"/>
        <path d="M50 0 L75 25 L50 50 L25 25 Z" fill="#dbeafe" opacity="0.3"/>
        <path d="M50 50 L75 25 L100 50 L75 75 Z" fill="#e5e7eb" opacity="0.5"/>
        <path d="M50 100 L75 75 L50 50 L25 75 Z" fill="#dbeafe" opacity="0.3"/>
        <circle cx="25" cy="25" r="2" fill="#60a5fa" opacity="0.5"/>
        <circle cx="75" cy="25" r="2" fill="#60a5fa" opacity="0.5"/>
        <circle cx="25" cy="75" r="2" fill="#60a5fa" opacity="0.5"/>
        <circle cx="75" cy="75" r="2" fill="#60a5fa" opacity="0.5"/>
      </pattern>
      <rect width="100" height="100" fill="url(#grid)"/>
    </svg>
  </div>
);

const WaveDecoration = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
    <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="#dbeafe" 
        fillOpacity="0.3"
        d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const ClientsPage = () => {
  const [expandedSection, setExpandedSection] = useState('banks');

  const services = {
    banks: {
      icon: <HiMiniBanknotes className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      title: "Banks",
      url:"/images/LandingPage/bank.jpg",
      description: "Enhanced SCF offerings for financial institutions",
      items: [
        "Market Assessment: Evaluating market opportunities, size, competitive advantage, and existing offerings.",
        "Technology Platform: Assisting in the selection and optimization of technology platforms and partners.",
        "Workshops and Training: Conducting workshops and training sessions to help sales and operations teams acquire new clients and successfully implement and manage Supplier Finance programs.",
        "Co-creation and Empowerment: Working closely with your management team to ensure sustained results and success over time."
      ]
    },
    corporate: {
      icon: <HiBuildingOffice2 className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      title: "Corporate Clients",
      url:"/images/LandingPage/corperates.jpg",
      description: "Strategic SCF solutions for competitive advantage",
      items: [
        "Opportunity Assessment: Analyzing opportunities to implement or improve SCF solutions.",
        "Platform and Partner Selection: Guiding the selection of the right platform and partners.",
        "Program Design: Designing tailored SCF programs and selecting suitable suppliers.",
        "Supplier Analysis and Onboarding: Evaluating supplier profiles, onboarding processes, and training treasury and procurement teams.",
        "Expertise and Tools: Providing the necessary expertise and tools to empower your organization's SCF initiative."
      ]
    },
    fintech: {
      icon: <HiCpuChip className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      title: "Fintechs",
      url:"/images/LandingPage/fintech.jpg",
      description: "Specialized support for Fintech innovation",
      items: [
        "Market Analysis: Assessing market opportunities, competitors, and creating a business case for SCF.",
        "Internal Presentation: Providing analysis results to support management buy-in and investment decisions.",
        "Technology Audit: Reviewing and comparing your technology platform with competitors.",
        "Service Review: Evaluating services related to implementation and ongoing management of SCF programs."
      ]
    }
  };
  const items = [
    "Detailed Market Opportunity Assessment",
    "Customized SCF Program Design",
    "Critical Supplier Onboarding and Accounting Treatment",
    "Training, Workshops, and Research Data"
  ];
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <AuroraBackgroundDemo  title={"Clients"} link={"Home"}/>
      
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl" />
        
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-10">
              <circle cx="60" cy="60" r="50" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <circle cx="60" cy="60" r="40" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <circle cx="60" cy="60" r="30" stroke="#3b82f6" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">
            Supply Chain Finance Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Supporting organizations worldwide in achieving world-class results in Supply Chain Finance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:gap-8 mb-8 md:mb-16 relative z-10">
          {Object.entries(services).map(([key, service]) => (
            <div 
              key={key}
              className={`relative rounded-lg border transition-all duration-300 hover:shadow-xl backdrop-blur-sm ${
                expandedSection === key ? 'border-blue-500 bg-white bg-opacity-80' : 'border-gray-200 bg-white bg-opacity-60'
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <div
                style={{ backgroundImage: `url(${service.url})` }}
                className="bg-center relative bg-cover rounded-lg"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              
                <div 
                  className="p-4 md:p-6 cursor-pointer flex flex-col md:flex-row md:items-center md:space-x-4 relative"
                  onClick={() => setExpandedSection(expandedSection === key ? null : key)}
                >
                  <div className="p-2 bg-blue-50 rounded-lg w-fit mb-3 md:mb-0 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <div className="flex-grow text-white">
                    <h3 className="text-2xl md:text-4xl font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    {expandedSection === key ? 
                      <HiChevronUp className="w-6 h-6 text-blue-600" /> : 
                      <HiChevronDown className="w-6 h-6 text-blue-600" />
                    }
                  </div>
                </div>
              
                {expandedSection === key && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                    <div className="grid gap-3 md:gap-4">
                      {service.items.map((item, index) => (
                        <div key={index} className="flex items-start md:items-center space-x-3">
                          <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1 md:mt-0" />
                          <span className="text-white text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-6 mb-8 md:mb-16 relative z-10">
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Our Approach</h3>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          We&apos;re committed to being part of your team throughout your SCF journey
        </p>
      </div>
      <div className="grid gap-3 md:gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-3"
            style={{ marginLeft: `${index * 2}rem` }}
          >
            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-600 text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </div>

        {/* Contact CTA */}
        <div className="text-center px-4 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
            Ready to Transform Your SCF Strategy?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Contact us to discuss how we can assist your organization
          </p>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
      
      <WaveDecoration />
    </div>
  );
};

export default ClientsPage;