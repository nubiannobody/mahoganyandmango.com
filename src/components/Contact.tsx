import React, { useState } from 'react';
import { Calendar, Send, Phone, Mail, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data as any).toString(),
  })
    .then(() => { setFormSubmitted(true)
    form.reset(); // clear the form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      timeline: '',
      message: '',
    });    
  })
    .catch(() => alert("Oops! There was a problem submitting the form."));
};
 
return (
  <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-maharlika text-amber-950 mb-6">
          ✨Client Intake Form✨
        </h2>
        <p className="text-lg text-amber-800">
          Ready to bring your vision to life? Fill out the form below to get started. ✨Step 1✨
        </p>
        <a 
          href="https://form.jotform.com/251630629096157" 
          target="_blank" 
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 mt-6 inline-block"
        >
          Fill Out Client Intake Form 
        </a>
      </div>

      <form
        name="project-inquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <input type="hidden" name="form-name" value="project-inquiry" />
        <div hidden>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {formSubmitted ? (
              <div className="bg-amber-50 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                  <Send className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">Thank You!</h3>
                <p className="text-amber-800 mb-6">
                  We've received your project inquiry and will get back to you within 1-2 business days.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
                  <div>
                  <h2 className="text-2xl font-maharlika text-amber-950 mb-6">
                🥭Book Your Fall Fix Here ✨Step 2✨🥭
              </h2>
                    <label htmlFor="name" className="block text-amber-800 font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-800 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-amber-800 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-amber-800 font-medium mb-2">
                      Budget Range*
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                      <option value="">Select a budget range</option>
                      <option value="$150 - The Fall Fix">$150 - Fix Broken Links</option>
                      <option value="$175 - The Fall Fix">$175 - Complete Website Audit</option>
                      <option value="$200 - The Fall Fix">$200 - Broken Forms Fixed</option>
                      <option value="$250 - The Fall Fix">$250 - System Connections</option>
                      <option value="$300 - The Fall Fix">$300 - Boost Conversions</option>
                      <option value="$600 - The Fall Fix">$600 - One-Pager Design</option>
                      <option value="$1,200 - The Fall Fix">$1,200 - Holiday-Ready Bundle</option>
                      <option value="$5,000 - The Seedling">$5,000 - The Seedling</option>
                      <option value="$7,500 - The Flourish">$7,500 - The Flourish</option>
                      <option value="$10,000 - The Evergreen">$10,000 - The Evergreen</option>
                      <option value="$15,000 - The Mango Magic">$15,000 - The Mango Magic</option>
                      <option value="Custom">I need a custom quote</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="timeline" className="block text-amber-800 font-medium mb-2">
                    Project Timeline*
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    <option value="">When do you need your website?</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-4 months">3-4 months</option>
                    <option value="5-6 months">5-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-amber-800 font-medium mb-2">
                    Tell Us About Your Project*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Share your website goals, needs, and vision..."
                  ></textarea>
                </div>
                <input type="hidden" name="name" value={formData.name} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="phone" value={formData.phone} />
                <input type="hidden" name="budget" value={formData.budget} />
                <input type="hidden" name="timeline" value={formData.timeline} />
                <input type="hidden" name="message" value={formData.message} />

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Submit Project Inquiry
                </button>
              </>
            )}
          </div>

          <div>
            <div className="bg-amber-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-maharlika text-amber-950 mb-6">
                ✨Step 3✨ Book Your Creative Connection Call
              </h3>
              <p className="text-amber-800 mb-6">
                After submitting your project inquiry, schedule a free 60-minute discovery call to discuss your vision.
              </p>
              <a 
                href="https://calendly.com/mahoganyandmango-dcp9/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white hover:bg-amber-100 text-amber-600 font-medium py-3 px-6 rounded-full border border-amber-200 transition-colors duration-300"
              >
                <Calendar size={18} className="mr-2" />
                Schedule on Calendly
              </a>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-amber-950 mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-amber-950">Email</p>
                    <p className="text-amber-800">hello@mahoganyandmango.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-amber-950">Location</p>
                    <p className="text-amber-800">Seattle, WA</p>
                    <p className="text-amber-800">Serving clients with pride worldwide! 🧡</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);
};

export default Contact;