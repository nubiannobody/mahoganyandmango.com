import React from "react";

interface CaseStudyDrawerProps {
  caseStudy: {
    title: string;
    client: string;
    challenge: string;
    approach: string;
    solution: string;
    outcome: string[];
    website: string;
    image?: string;
  };

  onClose: () => void;
}

const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  caseStudy,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="relative h-full w-full max-w-5xl overflow-y-auto bg-gradient-to-b from-[#F8F4ED] to-[#F2E9DD] px-10 py-12 shadow-2xl md:px-16">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-3xl text-amber-900 transition hover:rotate-90"
        >
          ✕
        </button>

        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600">
            Case Study
          </p>

          <h1 className="mt-4 font-['Cormorant_Garamond'] text-6xl font-semibold leading-none text-amber-950">
            {caseStudy.title}
          </h1>

          <p className="mt-6 text-2xl font-medium text-amber-700">
            {caseStudy.client}
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-amber-800">
            Every successful project begins with understanding the client's
            goals, solving the right problems, and delivering an experience
            designed for long-term growth.
          </p>
        </header>

        {/* Challenge */}
        <section className="mt-20 border-t border-amber-400 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            The Challenge
          </p>

          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Understanding the Opportunity
          </h2>

          <p className="mt-6 text-lg leading-9 text-amber-800">
            {caseStudy.challenge}
          </p>
        </section>

        {/* Approach */}
        <section className="mt-16 border-t border-amber-400 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Our Approach
          </p>

          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Strategic Planning
          </h2>

          <p className="mt-6 text-lg leading-9 text-amber-800">
            {caseStudy.approach}
          </p>
        </section>

        {/* Solution */}
        <section className="mt-16 border-t border-amber-400 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            The Solution
          </p>

          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Bringing the Vision to Life
          </h2>

          <p className="mt-6 text-lg leading-9 text-amber-800">
            {caseStudy.solution}
          </p>
        </section>

        {/* Results */}
        <section className="mt-16 border-t border-amber-400 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Results
          </p>

          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Results & Impact
          </h2>

          <p className="mt-6 text-lg leading-9 text-amber-800">
            The outcome wasn't simply a new website—it was a stronger digital
            foundation built to support the client's business objectives.
          </p>

          <div className="mt-10 space-y-6">
            {caseStudy.outcome.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="mt-3 h-2.5 w-2.5 rounded-full bg-amber-600" />

                <p className="flex-1 text-lg leading-8 text-amber-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Website */}
        <section className="mt-16 border-t border-amber-400 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Live Experience
          </p>

          <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Explore the Finished Website
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-amber-800 font-normal">
            Experience the final product exactly as visitors see it. Explore
            the design, navigation, content, and overall user experience.
          </p>

          {/* Website Preview */}
          <div className="relative group">

<a
  href={caseStudy.website}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={caseStudy.image}
    alt={`${caseStudy.title} website preview`}
    className="w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
    <span className="opacity-0 group-hover:opacity-100 bg-white text-amber-950 px-4 py-2 rounded-full transition">
      View Live Website
    </span>
  </div>

</a>

</div>
          <div className="mt-12 text-center">
            <button
              onClick={() =>
                window.open(
                  caseStudy.website,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="
              bg-amber-600 
              hover:bg-amber-700 
              text-white 
              px-6 
              py-3 
              rounded-full 
              font-medium 
              transition-all
              "            >
              View Live Website
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyDrawer;