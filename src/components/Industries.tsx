import React from 'react';

interface IndustryData {
  name?: string;
  image: string;
  description?: string;
  link?: string;
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
      className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

const Industries: React.FC = () => {
  const industries: IndustryData[] = [
    {
      image: "src/images/innerSpace.png",
      link: "https://theinnerspace.netlify.app"
    },
    {
      image: "src/images/savory.png",
      link: "https://thesavory.netlify.app"
    },
    {
      image: "src/images/lumina.png",
      link: "https://thelumina.netlify.app"
    },
    {
      image: "src/images/aperture.png",
      link: "https://theaperture.netlify.app"
    },
    {
      image: "src/images/eduCoach.png",
      link: "https://theeducoach.netlify.app"
    },
    {
      image: "src/images/brightHope.png",
      link: "https://thebrighthope.netlify.app"
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;