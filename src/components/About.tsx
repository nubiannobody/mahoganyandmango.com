import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5EFE6]">
      <div className="container mx-auto px-4">
        <div className="relative">

          {/* Blob behind heading */}
          <svg
            className="absolute top-[-20%] left-[-50%] w-[200%] h-[180%] opacity-30 pointer-events-none z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFBF00"
              d="M100,20 C115,5 135,10 140,30 C158,25 170,40 160,55 C178,60 180,78 165,85 C175,100 168,118 152,118 C155,138 140,150 125,142 C120,160 103,165 95,150 C80,162 63,155 62,138 C45,145 30,132 35,115 C18,108 15,90 30,82 C18,68 22,50 38,47 C30,30 45,18 60,25 C68,8 88,8 100,20Z"
            />
          </svg>

          {/* Heading block */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-6">
              About Mahogany & Mango
            </h2>
            <p className="text-lg text-amber-800">
              We don't just build websites. We build your future. Mahogany & Mango crafts elegant,
              purpose-driven websites for businesses ready to show up online with confidence — built
              with passion, precision, and a deep respect for your brand's story.
            </p>
          </div>

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤵🏾‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-4">Bold Creators</h3>
              <p className="text-amber-800">
                We bring a perspective you won't find anywhere else — rooted in culture, sharpened
                by craft, and poured into every pixel of your project.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💛</span>
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-4">Purposeful Design</h3>
              <p className="text-amber-800">
                Every design decision has a reason. We build sites that don't just look good — they
                work, connecting you to the people who need you most.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🥭</span>
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-4">Client-Centered Approach</h3>
              <p className="text-amber-800">
                Your vision leads. We listen first, build second, and don't stop until the final
                product feels unmistakably you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;