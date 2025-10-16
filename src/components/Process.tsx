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
            : 'border-amber-200 bg-white hover:border-amber-300'
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
          <h3 className="text-xl font-maharlika text-amber-950">{title}</h3>
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
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
            ✨The Process✨
          </h2>
          <p className="text-lg text-amber-800">
            Our streamlined approach ensures a smooth, collaborative experience from concept to launch.
          </p>
        </div>
        
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