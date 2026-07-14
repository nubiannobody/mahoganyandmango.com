import React from "react";

interface ProcessStep {
  title: string;
  description: string;
}

interface ConsultingData {
  title: string;
  partnerExperience: string;
  process: ProcessStep[];
  outcome: string[];
  bookingLink: string;
}

interface HowWeWorkModalProps {
  service: ConsultingData;
  onClose: () => void;
}

const HowWeWorkModal: React.FC<HowWeWorkModalProps> = ({
  service,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-gradient-to-b from-[#F8F4ED] to-[#F2E9DD] px-10 py-12 shadow-2xl md:px-16">

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
            Our Process
          </p>


          <h1 className="mt-4 font-['Cormorant_Garamond'] text-6xl font-semibold leading-none text-amber-950">
            How We Work
          </h1>


          <h2 className="mt-6 text-2xl font-medium text-amber-700">
            {service.title}
          </h2>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-amber-800">
            Every engagement is thoughtfully planned, strategically executed,
            and designed around your business goals.
          </p>

        </header>



        {/* Partner Experience */}
        <section className="mt-20 border-t border-amber-400 pt-12">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Partnership
          </p>


          <h3 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Your Partner Experience
          </h3>


          <p className="mt-6 text-lg leading-9 text-amber-800">
            {service.partnerExperience}
          </p>

        </section>



        {/* Process */}
        <section className="mt-16 border-t border-amber-400 pt-12">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            The Process
          </p>


          <h3 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            From Vision to Execution
          </h3>


          <div className="mt-10">

            {service.process.map((step, index) => (

              <div
                key={index}
                className="flex gap-8 border-b border-amber-400 py-10 last:border-none"
              >

                <div className="w-16 shrink-0">

                  <span className="font-['Cormorant_Garamond'] text-5xl font-light text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <div>

                  <h4 className="text-2xl font-semibold text-amber-950">
                    {step.title}
                  </h4>


                  <p className="mt-3 text-lg leading-8 text-amber-800">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>



        {/* Outcome */}
        <section className="mt-16 border-t border-amber-400 pt-12">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            The Result
          </p>


          <h3 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-amber-950">
            Your Outcome
          </h3>


          <p className="mt-6 text-lg leading-9 text-amber-800">
            The goal isn't just to deliver recommendations. It's to provide
            clarity, confidence, and a strategic path forward for your
            business.
          </p>


          <div className="mt-8 space-y-5">

            {service.outcome.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4"
              >

                <div className="mt-3 h-2.5 w-2.5 rounded-full bg-amber-600" />


                <p className="text-lg leading-8 text-amber-800">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>



        {/* CTA */}
        <section className="mt-20 border-t border-amber-400 pt-12 text-center">

          <p className="mx-auto max-w-xl text-lg leading-8 text-amber-800">
            Ready to create a digital experience designed specifically for
            your business?
          </p>


          <button
            onClick={() =>
              window.open(
                service.bookingLink,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="
mt-3 
bg-amber-600 
text-white 
px-5 
py-2.5 
rounded-full 
font-medium 
shadow-sm 
hover:bg-amber-700 
hover:shadow-md 
hover:-translate-y-0.5 
transition-all 
duration-300
">
            Book Consultation
          </button>

        </section>


      </div>

    </div>
  );
};

export default HowWeWorkModal;