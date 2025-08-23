import React from 'react';
import { ExternalLink } from 'lucide-react';

interface IndustryData {
  name: string;
  image: string;
  description: string;
  link?: string; //
}

const IndustryCard: React.FC<{ industry: IndustryData }> = ({ industry }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950 to-transparent opacity-70 z-10"></div>
      <img 
        src={industry.image} 
        alt={industry.name} 
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
        <p className="text-amber-100 mb-3">{industry.description}</p>
        <a href={industry.link || "#contact"} target={industry.link ? "_blank" : "_self"} rel={industry.link ? "noopener noreferrer" : undefined}
        className="inline-flex items-center text-white hover:text-amber-200 font-medium transition-colors duration-300">
      <span>{industry.link ? "View Website" : "View Examples"}</span>
      <ExternalLink size={16} className="ml-2" />
      </a>  
      </div>
    </div>
  );
};

const Industries: React.FC = () => {
  const industries: IndustryData[] = [
    {
      name: "Health & Wellness",
      image: "https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Websites for wellness coaches, nutritionists, and holistic practitioners.",
      link: "https://theinnerspace.netlify.app"
    },
    {
      name: "Professional Services",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Elegant websites for consultants, accountants, and legal professionals.",
      link: "https://thesavory.netlify.app"
    },
    {
      name: "Beauty & Fashion",
      image: "https://images.pexels.com/photos/12516058/pexels-photo-12516058.jpeg",
      description: "Stunning websites for beauty brands, fashion designers, and boutiques.",
      link: "https://thelumina.netlify.app"

    },
    {
      name: "Creative Entrepreneurs",
      image: "https://images.pexels.com/photos/32276090/pexels-photo-32276090.jpeg",
      description: "Portfolio websites for photographers, artists, and other creatives.",
      link: "https://theaperture.netlify.app" 
    },
    {
      name: "Education & Coaching",
      image: "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Learning platforms for coaches, course creators, and educational brands.",
      link: "https://theeducoach.netlify.app"
    },
    {
      name: "Non-Profit Organizations",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
      description: "Mission-driven websites for foundations, charities, and community groups.",
      link: "https://thebrighthope.netlify.app"
    }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
            Industries We Serve
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