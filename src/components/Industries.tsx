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
        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110 bg-[#F2E8D9]"
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
    { name: "Denkyem Denizens", image: "/images/DenkyemDenizens.png", link: "https://portfolio.denkyemcoop.com/", oneLiner: "A portfolio of our community with capital that moves with your business, not against it." },
    { name: "Foreign Freedom", image: "/images/foreignfreedom.png", link: "https://foreignfreedom.com", oneLiner: "Life coaching and motivational speaking." },
    { name: "Bubblegum Bytes", image: "/images/bubblegum-bytes.png", link: "https://bubblegum-bytes.netlify.app", oneLiner: "Digital diary." },
    { name: "EduCoach", image: "/images/eduCoach.png", link: "https://theeducoach.netlify.app", oneLiner: "Online education platform for lifelong learners." },
    { name: "BrightHope", image: "/images/brightHope.png", link: "https://thebrighthope.netlify.app", oneLiner: "Bringing hope through nonprofit design." }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
           {/* Heading with blob */}
           <div className="relative">
          <svg
            className="absolute top-[-100%] left-[-40%] w-[180%] h-[400%] opacity-20 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fbbf24"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6">
            Websites Built
          </h2>
          <p className="text-lg text-amber-800">
          Every site tells a story. Here are some of the brands we've had the honor of bringing to life.</p>
        </div>
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
