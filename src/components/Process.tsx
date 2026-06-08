import React, { useState } from 'react';
import { Check, Calendar, FileEdit, Send, Rocket } from 'lucide-react';

const ProcessStep: React.FC<{
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ step, title, description, icon, isActive, onClick }) => {
  return (
    <div 
      className={`relative cursor-pointer transform transition-all duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onClick}
    >
      <div 
        className={`border-2 rounded-xl p-6 h-full ${
          isActive 
            ? 'border-amber-600 bg-amber-50 shadow-md' 
            : 'border-amber-200 bg-[#F2E8D9] hover:border-amber-300'
        }`}
      >
        <div className="flex items-center mb-4">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              isActive ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-600'
            }`}
          >
            <span className="font-bold">{step}</span>
          </div>
          <h3 className="text-xl font-bold text-amber-950">{title}</h3>
        </div>
        <p className="text-amber-800 mb-4">{description}</p>
        <div className={`text-amber-600 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      step: 1,
      title: "Submit Project Inquiry",
      description: "Fill out both the Client Intake Form and the Project Inquiry Form so we can fully understand your goals, needs, and creative vision.",
      icon: <FileEdit size={24} />,
    },
    {
      step: 2,
      title: "Book Discovery Call",
      description: "Schedule a free 30-minute call via Calendly to discuss your project, clarify expectations, and see if we're a good fit.",
      icon: <Calendar size={24} />,
    },
    {
      step: 3,
      title: "Receive Proposal",
      description: "Based on our call, we'll send a custom proposal outlining scope, pricing, and timelines.",
      icon: <Send size={24} />,
    },
    {
      step: 4,
      title: "Secure Your Spot",
      description: "Once you approve the proposal, a deposit is required to begin work. We'll kick off your project with a structured timeline.",
      icon: <Check size={24} />,
    },
    {
      step: 5,
      title: "Launch & Celebrate!",
      description: "After revisions and final approval, your website goes live and we celebrate your new online presence!",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">

        {/* Heading with blob */}
        <div className="relative">
          <svg
            className="absolute top-[-100%] left-[-40%] w-[180%] h-[400%] opacity-30 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#b45309"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6">
              ✨The Process✨
            </h2>
            <p className="text-lg text-amber-800">
              From your first inquiry to your launch day celebration — here's how we make it happen together.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step) => (
            <ProcessStep 
              key={step.step}
              {...step}
              isActive={activeStep === step.step}
              onClick={() => setActiveStep(step.step)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            <FileEdit size={18} className="mr-2" />
            Submit Your Project Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;