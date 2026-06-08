import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface PackageFeature {
  text: string;
}

interface PackageData {
  id: string;
  name: string;
  emoji: string;
  price: string;
  description: string;
  features: PackageFeature[];
  popular?: boolean;
}

const PackageCard: React.FC<{
  pkg: PackageData;
  isActive: boolean;
  onSelect: () => void;
}> = ({ pkg, isActive, onSelect }) => {
  return (
    <div 
      className={`relative border-2 rounded-xl p-8 transition-all duration-300 transform ${
        isActive 
          ? 'scale-105 border-amber-600 bg-[#F5EFE6] shadow-xl z-10' 
          : 'border-amber-200 bg-[#F2E8D9] hover:border-amber-300 hover:shadow-lg'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <div className="text-4xl mb-4">{pkg.emoji}</div>
      <h3 className="text-2xl font-bold text-amber-950 mb-2">{pkg.name}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-amber-600">{pkg.price}</span>
      </div>
      <p className="text-amber-800 mb-6">{pkg.description}</p>
      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
            <span className="text-amber-800">{feature.text}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className={`w-full flex items-center justify-center py-3 px-6 rounded-full transition-colors duration-300 ${
          isActive 
            ? 'bg-amber-600 text-white hover:bg-amber-700' 
            : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
        }`}
      >
        <span className="font-medium">Choose Package</span>
        <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

const Packages: React.FC = () => {
  const [activePackage, setActivePackage] = useState('flourish');
  
  const packages: PackageData[] = [
    {
      id: 'seedling',
      name: 'The Seedling',
      emoji: '🌱',
      price: 'Starting at $5,000',
      description: 'A solid foundation for your online presence',
      features: [
        { text: 'Custom 5-page website' },
        { text: 'Mobile-friendly, responsive design' },
        { text: 'Basic SEO setup' },
        { text: 'Contact form integration' },
        { text: 'Social media links' },
        { text: '1 round of revisions' },
        { text: 'Launch support & basic website training' }
      ]
    },
    {
      id: 'flourish',
      name: 'The Flourish',
      emoji: '🌿',
      price: 'Starting at $7,500',
      description: 'A more dynamic website to grow your brand',
      features: [
        { text: 'Everything in The Seedling, plus:' },
        { text: 'Up to 8 pages' },
        { text: 'Custom branding elements' },
        { text: 'Advanced contact forms' },
        { text: 'Blog setup (if needed)' },
        { text: '2 rounds of revisions' },
        { text: '2 weeks of post-launch support' }
      ],
      popular: true
    },
    {
      id: 'evergreen',
      name: 'The Evergreen',
      emoji: '🌳',
      price: 'Starting at $10,000',
      description: 'A high-performing, fully customized website',
      features: [
        { text: 'Everything in The Flourish, plus:' },
        { text: 'Up to 12 pages' },
        { text: 'eCommerce setup' },
        { text: 'Custom graphics & light animations' },
        { text: 'Email marketing integration' },
        { text: 'SEO optimization for higher rankings' },
        { text: '3 rounds of revisions' },
        { text: '1 month of post-launch support' }
      ]
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">

        {/* Heading with blob */}
        <div className="relative">
          <svg
            className="absolute top-[-60%] left-[-50%] w-[200%] h-[400%] opacity-20 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#c2844a"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6">
              Mahogany & Mango Web Design Packages
            </h2>
            <p className="text-lg text-amber-800">
              Every project starts with discovery — because clarity is the foundation of everything
              great. We guide you through a structured process tailored to your goals, your brand,
              and your budget. Pricing below reflects starting investment ranges; your final proposal
              is built around your specific scope.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id}
              pkg={pkg}
              isActive={activePackage === pkg.id}
              onSelect={() => setActivePackage(pkg.id)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-amber-800 mb-6">
            Not sure which package is right for you? Let's discuss your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-transparent hover:bg-amber-100 text-amber-600 border border-amber-600 font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            Get a Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default Packages;