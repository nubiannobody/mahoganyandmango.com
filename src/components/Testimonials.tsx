import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "Jasmine Wilson",
      role: "CEO",
      company: "Melanin Beauty Supply",
      quote: "Mahogany 'n' Mango transformed our online presence completely! The team truly understood our vision and created a website that perfectly represents our brand and has increased our sales by 40%.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "CEO",
      company: "Urban Fitness Co.",
      quote: "Working with Mahogany 'n' Mango was the best decision we made for our business. They delivered a stunning, functional website that has helped us grow our client base significantly.",
      rating: 5
    },
    {
      id: 3,
      name: "Tiana Brooks",
      role: "CEO",
      company: "Creative Minds Academy",
      quote: "The team at Mahogany 'n' Mango went above and beyond our expectations. They created a beautiful, user-friendly website that perfectly captures our mission and has received countless compliments.",
      rating: 5
    },
    {
      id: 4,
      name: "Alesha Bouie",
      role: "CEO",
      company: "Ghetto Greenhouse Teas",
      quote: "Mahogany 'n' Mango sold out my products during the prelaunch thanks to their meticulous attention to detail and expertly optimized strategy.",
      rating: 5
    },
    {
      id: 5,
      name: "Le'Krisha Lee",
      role: "CEO",
      company: "Dream Killer Planners.",
      quote: "The team at Mahogany 'n' Mango delivered unmatched speed, accuracy, and attention to detail. They exceeded my expectations, and their constant communication kept me completely at ease.",
      rating: 5
    },
    {
      id: 6,
      name: "Jake Myles",
      role: "CEO",
      company: "Jake Myles Photography",
      quote: "Mahogany 'n' Mango brought my vision to life in a fun, approachable, and seamless way. Even though I wasn’t sure what I wanted or needed, they guided me through the process effortlessly, and my business growth has doubled month over month.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
            Words from Our Clients
          </h2>
          <p className="text-lg text-amber-800">
            See what businesses we've worked with have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl italic text-amber-800 mb-6">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div>
              <p className="font-bold text-amber-950">{testimonials[activeIndex].name}</p>
              <p className="text-amber-600">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white hover:bg-amber-100 text-amber-600 p-3 rounded-full shadow transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white hover:bg-amber-100 text-amber-600 p-3 rounded-full shadow transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-amber-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
