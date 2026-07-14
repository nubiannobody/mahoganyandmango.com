import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import HowWeWorkModal from "./services/HowWeWorkModal";
import CaseStudyDrawer from "./services/CaseStudyDrawer";
import { caseStudies, type CaseStudy } from "../data/caseStudies";

interface ConsultingData {
  title: string;
  image: string;
  oneLiner?: string;
  
  bookingLink: string; // Always include booking link
  example: string; // Example service 

  process: {
    title: string;
    description: string;
  }[];

  outcome: string[];
  partnerExperience: string;

  technologies?: string[];
  caseStudyId?: string;
}

interface ConsultingCardProps {
  site: ConsultingData;
  onProcess: () => void;
  onCaseStudy: () => void;
}

const ConsultingCard: React.FC<ConsultingCardProps> = ({
  site,
  onProcess,
  onCaseStudy,
}) => {
  const handleClick = () => {
    window.open(site.bookingLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white shadow-md flex flex-col"
    >
      <img
        src={site.image}
        alt={site.title}
        className="w-full aspect-[4/3] bg-white flex items-center justify-center"
      />
      <div className="px-4 py-3 bg-amber-50 flex flex-col items-center text-center transition-colors duration-500 group-hover:bg-amber-100">
        <h3 className="text-base font-semibold text-amber-950 mb-1">{site.title}</h3>
        {site.oneLiner && <p className="text-sm text-amber-800">{site.oneLiner}</p>}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click from firing twice
            window.open(site.bookingLink, "_blank", "noopener,noreferrer");
          }}
          className="
          mt-3 
          bg-amber-600 
          text-white 
          px-5 
          py-2.5 
          rounded-full 
          font-medium 
          shadow-sm 
          hover:bg-amber-700 
          hover:shadow-md 
          hover:-translate-y-0.5 
          transition-all 
          duration-300
          "        >
          Book Consultation
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click from firing twice
            onCaseStudy();
          }}
          className="
          mt-3 
          bg-amber-400 
          text-amber-950 
          px-5 
          py-2.5 
          rounded-full 
          font-medium 
          shadow-sm 
          hover:bg-amber-500 
          hover:shadow-md 
          hover:-translate-y-0.5 
          transition-all 
          duration-300
          "        >
          View Case Study
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click from firing twice
            onProcess();
          }}
          className="
mt-3 
bg-amber-500 
text-white 
px-5 
py-2.5 
rounded-full 
font-medium 
shadow-sm 
hover:bg-amber-600 
hover:shadow-md 
hover:-translate-y-0.5 
transition-all 
duration-300
">
          How We Work
        </button>
      </div>
    </div>
  );
};

const Consulting: React.FC = () => {
  const navigate = useNavigate();

const [selectedService, setSelectedService] =
React.useState<ConsultingData | null>(null);

const [selectedCaseStudy, setSelectedCaseStudy] =
React.useState<CaseStudy | null>(null);

const [showProcess, setShowProcess] =
  React.useState(false);

const [showCaseStudy, setShowCaseStudy] =
  React.useState(false);

  const consultingServices: ConsultingData[] = [
    {
      title: "Digital Strategy & Planning",
      caseStudyId: "stride-society",
      image: "/images/digitalPlanning.png",
      oneLiner: "Tailored strategies to grow your business online.",
      example: "https://thestridesociety.netlify.app",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
      process: [
        { 
          title: "Discovery",
          description:
          "We learn about your business, goals, challenges, and vision."
        },
        {
          title: "Research & Analysis",
          description:
          "We evaluate your competitors, audience, and current digital presence."
        },
        {
          title: "Strategy Development",
          description:
          "We create a customized roadmap tailored to your business."
        },
        {
          title: "Strategy Presentation",
          description:
          "We walk you through the strategy and answer any questions."
        }
      ],
      outcome: [
        "Digital roadmap",
        "Growth opportunities",
        "Prioritized action plan",
        "Strategic recommendations"
      ],

      partnerExperience:
  "Every engagement begins with understanding. We don't believe in one-size-fits-all solutions. We take time to understand your goals, identify opportunities, and create a strategy designed specifically for your business.",

      technologies: [
        "Research",
        "Analytics",
        "SEO",
        "Business Strategy"
      ]
      },
    {
      title: "Website Optimization",
      caseStudyId: "hester-consulting",
      image: "/images/websitesOptimization.png",
      oneLiner: "Improve UX, conversions, and performance.",
      example: "https://silly-pony-43e29d.netlify.app",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
      process: [
        { 
          title: "Website Audit",

      description:

      "We evaluate your website’s structure, performance, content, and overall digital presence to identify opportunities for improvement."

    },

    {

      title: "Performance Review",

      description:

      "We analyze website speed, functionality, responsiveness, and technical performance to uncover areas impacting user experience."

    },

    {

      title: "SEO Analysis",

      description:

      "We review your search visibility, keywords, content structure, and technical SEO elements to improve discoverability."

    },

    {

      title: "UX Improvements",

      description:

      "We identify usability challenges and create recommendations to improve navigation, engagement, and customer experience."

    },

    {

      title: "Speed & Accessibility Fixes",

      description:

      "We optimize website performance and accessibility to create a faster, more inclusive experience for every visitor."

    },

    {

      title: "Final Report",

      description:

      "We provide a detailed report outlining findings, recommendations, and actionable next steps for improvement."

    }

  ],

  outcome: [

    "Website performance insights",

    "SEO improvement opportunities",

    "Enhanced user experience",

    "Optimization action plan"

  ],

  partnerExperience:

  "Your website is more than a digital presence — it is a tool for growth. We analyze every detail to uncover opportunities that improve performance, visibility, and the experience your customers have with your brand.",

  technologies: [

    "Website Audits",

    "SEO",

    "Performance Analytics",

    "Accessibility"

  ]

},
    {
      title: "UX Consulting",
      image: "/images/TheUXConsulting.png",
      caseStudyId: "pit-crew",
      oneLiner: "Premium user experience execution.",
      example: "https://pitcrew.denkyemcoop.com/",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
      process: [
        { 
          
      title: "Understand Your Users",

      description:

      "We learn about your audience, their behaviors, needs, and expectations to create a user-centered experience."

    },

    {

      title: "Review Current Experience",

      description:

      "We evaluate your existing website or application to understand what is working and where improvements are needed."

    },

    {

      title: "Identify Friction Points",

      description:

      "We uncover usability challenges that may prevent users from completing actions or engaging with your platform."

    },

    {

      title: "Wireframe Improvements",

      description:

      "We create recommendations for improved layouts, navigation, and user flows that make experiences more intuitive."

    },

    {

      title: "User Testing Recommendations",

      description:

      "We provide strategies for testing designs and gathering feedback to validate improvements before implementation."

    },

    {

      title: "Final UX Strategy",

      description:

      "We deliver a comprehensive UX roadmap with recommendations designed to improve engagement and satisfaction."

    }

  ],

  outcome: [

    "User experience insights",

    "Improved customer journeys",

    "Wireframe recommendations",

    "UX improvement roadmap"

  ],

  partnerExperience:

  "Great digital experiences start with understanding people. We combine research, strategy, and thoughtful design recommendations to create experiences that feel natural, intuitive, and aligned with your business goals.",

  technologies: [

    "User Research",

    "UX Strategy",

    "Wireframing",

    "Usability Testing"

  ]

},
      
    {
      title: "Custom Digital Solutions",
      caseStudyId: "denkyem-portfolio",
      image: "/images/customDigitalSolutions.png",
      oneLiner: "Bespoke technology solutions that drive measurable growth.",
      example: "https://portfolio.denkyemcoop.com/",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
      process: [
        { 
          title: "Consultation",

          description:
    
          "We discuss your goals, challenges, and vision to understand the solution your business needs."
    
        },
    
        {
    
          title: "Requirements Gathering",
    
          description:
    
          "We define project requirements, features, functionality, and technical needs to create a clear development plan."
    
        },
    
        {
    
          title: "Solution Architecture",
    
          description:
    
          "We design the structure, technology approach, and strategy needed to build a scalable digital solution."
    
        },
    
        {
    
          title: "Development",
    
          description:
    
          "We bring your solution to life through custom design, development, and integrations tailored to your business."
    
        },
    
        {
    
          title: "Testing & QA",
    
          description:
    
          "We thoroughly test functionality, performance, and usability to ensure your solution works seamlessly."
    
        },
    
        {
    
          title: "Launch & Support",
    
          description:
    
          "We guide your launch and provide ongoing support to help your solution continue delivering value."
    
        }
    
      ],
    
      outcome: [
    
        "Custom-built digital solution",
    
        "Scalable technology foundation",
    
        "Tested and optimized product",
    
        "Launch and support plan"
    
      ],
    
      partnerExperience:
    
      "Every business has unique challenges that require more than cookie-cutter solutions. We partner with you from idea to launch, creating technology that supports your goals and helps your business grow.",
    
      technologies: [
    
        "Custom Development",
    
        "Web Applications",
    
        "API Integrations"
    
      ]
    
    }
  ];
    
  return (
    <section id="consulting" className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-Cormorant Garamond text-amber-950 mb-6">
            Consulting & Digital Solutions
          </h2>
          <p className="text-lg font-DM Sans' text-amber-800 mb-4">
            We don’t just build websites — we create digital strategies and solutions to drive
            your business forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {consultingServices.map((site, index) => (
            <ConsultingCard key={index} site={site} onProcess={() => {
              setSelectedService(site);
              setShowProcess(true);
            }}
            onCaseStudy={() => {
              const study = caseStudies.find(
                (item) => item.id === site.caseStudyId
              );

              if (!study) return;
              
              setSelectedCaseStudy(study);
              setShowCaseStudy(true);
            }} />
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={18} className="mr-2" />
            Back
          </button>
        </div>
        {showProcess && selectedService && (
        <HowWeWorkModal
          service={selectedService}
          onClose={() => setShowProcess(false)}
        />
      )}

{showCaseStudy && selectedCaseStudy && (
  <CaseStudyDrawer
    caseStudy={selectedCaseStudy}
    onClose={() => setShowCaseStudy(false)}
  />
)}

      </div>
    </section>
  );
};

export default Consulting;
