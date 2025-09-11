import React from 'react';

interface IndustryData {
  name?: string;
  image: string;
  description?: string;
  link?: string;
  oneLiner?: string;
}

const IndustryCard: React.FC<{ industry: IndustryData }> = ({ industry }) => {
  const handleClick = () => {
    if (industry.link) {
      window.open(industry.link, "_blank", "noopener,noreferrer");
    } else {
      const contactSection = document.querySelector("#contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer bg-white shadow-md flex flex-col"
    >
      {/* Image */}
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
      />

      {/* Title + One-liner caption */}
      {(industry.name || industry.oneLiner) && (
        <div className="px-4 py-3 bg-amber-50 flex flex-col items-center text-center">
          {industry.name && industry.link && (
            <a
              href={industry.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent double trigger
              className="text-base font-semibold text-amber-950 mb-1 hover:text-amber-700 transition-colors"
            >
              {industry.name}
            </a>
          )}
          {industry.name && !industry.link && (
            <h3 className="text-base font-semibold text-amber-950 mb-1">
              {industry.name}
            </h3>
          )}
          {industry.oneLiner && (
            <p className="text-sm text-amber-800">{industry.oneLiner}</p>
          )}
        </div>
      )}
    </div>
  );
};

const Industries: React.FC = () => {
  const industries: IndustryData[] = [
    { name: "The Stride Society", image: "/images/thestridesociety.png", link: "https://thestridesociety.netlify.app", oneLiner: "Community that moves forward together." },
    { name: "Bubblegum Bytes", image: "/images/bubblegum-bytes.png", link: "https://bubblegum-bytes.netlify.app", oneLiner: "Digital diary." },
    { name: "Foreign Freedom", image: "/images/foreignfreedom.png", link: "https://foreignfreedom.com", oneLiner: "Life coaching and motivational speaking." },
    { name: "Aperture", image: "/images/aperture.png", link: "https://theaperture.netlify.app", oneLiner: "A portfolio for photography and visuals." },
    { name: "EduCoach", image: "/images/eduCoach.png", link: "https://theeducoach.netlify.app", oneLiner: "Online education platform for lifelong learners." },
    { name: "BrightHope", image: "/images/brightHope.png", link: "https://thebrighthope.netlify.app", oneLiner: "Bringing hope through nonprofit design." }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
            Websites We've Built
          </h2>
          <p className="text-lg text-amber-800">
            We create beautiful, functional websites for businesses across various industries.
          </p>
        </div>
        
        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-16 text-center">
        <a 
          href="/all-websites" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Industries;
