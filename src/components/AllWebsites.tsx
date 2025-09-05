import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"; // Using lucide-react for the arrow icon

interface WebsiteData {
  name?: string;
  image: string;
  link: string;
}

const WebsiteCard: React.FC<{ site: WebsiteData }> = ({ site }) => {
  const handleClick = () => {
    window.open(site.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src={site.image}
        alt={site.name}
        className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

const AllWebsites: React.FC = () => {
  const navigate = useNavigate();

  const allSites: WebsiteData[] = [
    { image: "/images/innerSpace.png", link: "https://theinnerspace.netlify.app" },
    { image: "/images/savory.png", link: "https://thesavory.netlify.app" },
    { image: "/images/lumina.png", link: "https://thelumina.netlify.app" },
    { image: "/images/aperture.png", link: "https://theaperture.netlify.app" },
    { image: "/images/eduCoach.png", link: "https://theeducoach.netlify.app" },
    { image: "/images/brightHope.png", link: "https://thebrighthope.netlify.app" },
    { image: "/images/thestridesociety.png", link: "https://thestridesociety.netlify.app" },
    { image: "/images/bubblegum-bytes.png", link: "https://bubblegum-bytes.netlify.app" },
    { image: "/images/foreignfreedom.png", link: "https://foreignfreedom.com" },
    { image: "/images/thewalkclb.png", link: "https://thewalkclb.com"},
    { image: "/images/thelamblounge.png", link: "https://lamblounge.netlify.app"},
    { image: "/images/thecodelearn.png", link: "https://thecodelearn.netlify.app"}
  ];

  return (
    <section id="all-websites" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
            All Websites
          </h2>
          <p className="text-lg text-amber-800">
            Explore the full collection of websites we've designed and developed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSites.map((site, index) => (
            <WebsiteCard key={index} site={site} />
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

export default AllWebsites;
