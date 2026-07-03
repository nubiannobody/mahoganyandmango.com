import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface ConsultingData {
  title: string;
  image: string;
  oneLiner?: string;
  example: string; // Example service 
  bookingLink: string; // Always include booking link
}

const ConsultingCard: React.FC<{ site: ConsultingData }> = ({ site }) => {
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
          className="mt-2 bg-amber-600 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors"
        >
          Book Now
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click from firing twice
            window.open(site.example, "_blank", "noopener,noreferrer");
          }}
          className="mt-2 bg-amber-300 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors"
        >
          Example
        </button>
      </div>
    </div>
  );
};

const Consulting: React.FC = () => {
  const navigate = useNavigate();

  const consultingServices: ConsultingData[] = [
    {
      title: "Digital Strategy & Planning",
      image: "/images/digitalPlanning.png",
      oneLiner: "Tailored strategies to grow your business online.",
      example: "https://thestridesociety.netlify.app",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
      },
    {
      title: "Website Optimization",
      image: "/images/websitesOptimization.png",
      oneLiner: "Improve UX, conversions, and performance.",
      example: "https://phenomenalshe.netlify.app",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
    },
    {
      title: "UX Consulting",
      image: "/images/uxConsulting.png",
      oneLiner: "Premium user experience execution.",
      example: "https://pitcrew.denkyemcoop.com/",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
    },
    {
      title: "Custom Digital Solutions",
      image: "/images/customDigitalSolutions.png",
      oneLiner: "Bespoke technology solutions that drive measurable growth.",
      example: "https://portfolio.denkyemcoop.com/",
      bookingLink: "https://calendly.com/mahoganyandmango-dcp9/30min",
    },
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
            <ConsultingCard key={index} site={site} />
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
      </div>
    </section>
  );
};

export default Consulting;
