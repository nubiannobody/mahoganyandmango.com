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
    { image: "/images/thestridesociety.png", link: "https://thestridesociety.netlify.app" },
    { image: "/images/bubblegum-bytes.png", link: "https://bubblegum-bytes.netlify.app" },
    { image: "/images/foreignfreedom.png", link: "https://foreignfreedom.com" },
    { image: "/images/aperture.png", link: "https://theaperture.netlify.app" },
    { image: "/images/eduCoach.png", link: "https://theeducoach.netlify.app" },
    { image: "/images/brightHope.png", link: "https://thebrighthope.netlify.app" }
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