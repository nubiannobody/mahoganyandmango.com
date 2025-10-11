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
          ? 'scale-105 border-amber-600 bg-white shadow-xl z-10' 
          : 'border-amber-200 bg-white hover:border-amber-300 hover:shadow-lg'
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
  
  // =========================
  // Tiered Packages
  // =========================
  const tieredPackages: PackageData[] = [
    {
      id: 'seedling',
      name: 'The Seedling',
      emoji: '🌱',
      price: '$5,000',
      description: 'Build your brand’s foundation online',
      features: [
        { text: 'Custom 5-page website' },
        { text: 'Built via WordPress, Webflow, Shopify, Squarespace, or Wix' },
        { text: 'Mobile-friendly, responsive design' },
        { text: 'Basic SEO setup' },
        { text: 'Contact form integration' }
      ]
    },
    {
      id: 'flourish',
      name: 'The Flourish',
      emoji: '🌿',
      price: '$7,500',
      description: 'Grow your brand with a dynamic, engaging website',
      features: [
        { text: 'Everything in The Seedling, plus:' },
        { text: 'Up to 8 pages' },
        { text: 'Advanced contact forms' },
        { text: 'Blog setup (if needed)' }
      ],
      popular: true
    },
    {
      id: 'evergreen',
      name: 'The Evergreen',
      emoji: '🌳',
      price: '$10,000',
      description: 'A high-performing website built to scale',
      features: [
        { text: 'Everything in The Flourish, plus:' },
        { text: 'Up to 12 pages' },
        { text: 'eCommerce setup (Shopify or other platforms)' },
        { text: 'Custom graphics & light animations' },
        { text: 'Email marketing integration' }
      ]
    },
    {
      id: 'mango',
      name: 'The Mango Magic',
      emoji: '🥭',
      price: '$15,000',
      description: 'VIP experience with premium, fully custom features',
      features: [
        { text: 'Everything in The Evergreen, plus:' },
        { text: 'Fully custom design from scratch' },
        { text: 'Membership portal or course integration' },
        { text: 'Custom copywriting for up to 5 pages' }
      ]
    }
  ];

  // =========================
  // Custom / À La Carte Services
  // =========================
  const customServices: PackageData[] = [
    {
      id: 'full-web-dev',
      name: 'Full Web Development & CMS Implementation',
      emoji: '💻',
      price: '$40K+',
      description: 'Launch a website that works seamlessly across any platform',
      features: [
        { text: 'Responsive design for all devices' },
        { text: 'Hosting & domain setup included' },
        { text: 'CMS configuration (WordPress, Webflow, Shopify, Squarespace, Wix, or custom)' },
        { text: 'Comprehensive testing & full launch' }
      ],
    },
    {
      id: 'ux-ui-design',
      name: 'UX/UI Design & Interactive Prototypes',
      emoji: '🎨',
      price: '$30K+',
      description: 'Craft experiences your users will love, from wireframes to prototypes',
      features: [
        { text: 'User research & personas' },
        { text: 'Wireframes & site architecture' },
        { text: 'High-fidelity UI design' },
        { text: 'Interactive prototypes' },
        { text: 'Iterative design testing & refinement' }
      ],
    },
    {
      id: 'project-management',
      name: 'Project Management',
      emoji: '📋',
      price: '$20K+',
      description: 'Comprehensive project oversight to ensure your website projects are delivered on time, on budget, and exceeds expectations',
      features: [
        { text: 'Full project coordination and timeline management' },
        { text: 'Stakeholder communication and reporting' },
        { text: 'Resource allocation and task tracking' },
        { text: 'Quality assurance and risk management' }
      ],
    },
    {
      id: 'custom-integrations',
      name: 'Custom Integrations & Performance Optimization',
      emoji: '⚙️',
      price: '$15K+',
      description: 'Boost your site’s functionality, speed, and reliability',
      features: [
        { text: 'API & third-party integrations' },
        { text: 'Custom code snippets for unique features' },
        { text: 'Speed, SEO, accessibility, & security optimization' },
        { text: 'Functionality testing for reliability' }
      ],
    },
    {
      id: 'website-audits',
      name: 'Website Audits & Digital Strategy',
      emoji: '📝',
      price: '$10K+',
      description: 'Identify growth opportunities and actionable improvements',
      features: [
        { text: 'UX, design, and performance review' },
        { text: 'Analytics & competitor benchmarking' },
        { text: 'Actionable recommendations' },
        { text: 'Strategic roadmap for growth' }
      ],
    },
    {
      id: 'add-on-services',
      name: 'Optional / Add-On Services',
      emoji: '✨',
      price: '$5K+',
      description: 'Extra touches to elevate your website and make it work harder',
      features: [
        { text: 'E-commerce setup & optimization' },
        { text: 'Custom landing pages or microsites' },
        { text: 'Custom content & copywriting guidance' },
        { text: 'Brand-aligned design refinements' }
      ],
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-4">
            Mahogany 'n' Mango Web Design Packages
          </h2>
          <p className="text-lg text-amber-800 mb-2">
            Choose the perfect package for your business needs and budget.
          </p>
          <p className="text-sm text-amber-600 italic mb-6">
            Prices below reflect starting price point. Actual cost depends on scope, features, and complexity.
          </p>
        </div>

        {/* ========================= */}
        {/* Tiered Packages */}
        {/* ========================= */}
        <h3 className="text-2xl font-bold text-amber-950 mb-6 text-center">Curated Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {tieredPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id}
              pkg={pkg}
              isActive={activePackage === pkg.id}
              onSelect={() => setActivePackage(pkg.id)}
            />
          ))}
        </div>

        {/* ========================= */}
        {/* Custom / À La Carte Services */}
        {/* ========================= */}
        <h3 className="text-2xl font-bold text-amber-950 mb-6 text-center">Custom Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {customServices.map((pkg) => (
            <PackageCard 
              key={pkg.id}
              pkg={pkg}
              isActive={activePackage === pkg.id}
              onSelect={() => setActivePackage(pkg.id)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-amber-800 mb-6">
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
