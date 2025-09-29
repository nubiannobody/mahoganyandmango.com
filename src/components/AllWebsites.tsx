import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"; // Using lucide-react for the arrow icon

interface WebsiteData {
  name?: string;
  image: string;
  link: string;
  oneLiner?: string;
}

const WebsiteCard: React.FC<{ site: WebsiteData }> = ({ site }) => {
  const handleClick = () => {
    window.open(site.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white shadow-md flex flex-col"
    >
      {/* Image */}
      <img
        src={site.image}
        alt={site.name}
        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
      />

      {/* Title + One-liner caption */}
      {(site.name || site.oneLiner) && (
        <div className="px-4 py-3 bg-amber-50 flex flex-col items-center text-center">
          {site.name && (
            <a
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent double trigger
              className="text-base font-semibold text-amber-950 mb-1 hover:text-amber-700 transition-colors"
            >
              {site.name}
            </a>
          )}
          {site.oneLiner && (
            <p className="text-sm text-amber-800">{site.oneLiner}</p>
          )}
        </div>
      )}
    </div>
  );
};

const AllWebsites: React.FC = () => {
  const navigate = useNavigate();

  const allSites: WebsiteData[] = [
    { name: "InnerSpace", image: "/images/innerSpace.png", link: "https://theinnerspace.netlify.app", oneLiner: "Meditation and mindfulness tools for inner peace." },
    { name: "Savory", image: "/images/savory.png", link: "https://thesavory.netlify.app", oneLiner: "Fine dining for food lovers." },
    { name: "Lumina", image: "/images/lumina.png", link: "https://thelumina.netlify.app", oneLiner: "Beauty for all." },
    { name: "Aperture", image: "/images/aperture.png", link: "https://theaperture.netlify.app", oneLiner: "A portfolio for photography and visuals." },
    { name: "EduCoach", image: "/images/eduCoach.png", link: "https://theeducoach.netlify.app", oneLiner: "Online education platform for lifelong learners." },
    { name: "BrightHope", image: "/images/brightHope.png", link: "https://thebrighthope.netlify.app", oneLiner: "Bringing hope through nonprofit design." },
    { name: "The Stride Society", image: "/images/thestridesociety.png", link: "https://thestridesociety.netlify.app", oneLiner: "Community that moves forward together." },
    { name: "Bubblegum Bytes", image: "/images/bubblegum-bytes.png", link: "https://bubblegum-bytes.netlify.app", oneLiner: "Digital diary." },
    { name: "Foreign Freedom", image: "/images/foreignfreedom.png", link: "https://foreignfreedom.com", oneLiner: "Life coaching and motivational speaking." },
    { name: "The Walk Club", image: "/images/thewalkclb.png", link: "https://thewalkclb.com", oneLiner: "Walk club for locals." },
    { name: "The Lamb Lounge", image: "/images/thelamblounge.png", link: "https://lamblounge.netlify.app", oneLiner: "A cozy lounge for faith and fellowship." },
    { name: "The Code Learn", image: "/images/thecodelearn.png", link: "https://thecodelearn.netlify.app", oneLiner: "Learn to code the fun and easy way." },
    { name: "The Smart Start Studio", image: "/images/smartstartstudio.png", link: "https://smartstartstudio.netlify.app", oneLiner: "Smart Start Studio makes web surfing fun, enjoyable, and safe for all."},
    { name: "PhenomenalShe", image: "/images/phenomenalshe.png", link: "https://phenomenalshe.netlify.app", oneLiner: "PhenomenalShe is a community-based nonprofit organization focused on empowering young women of color through mentorship, education, and personal development."}  
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

        {/* Website Grid */}
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
