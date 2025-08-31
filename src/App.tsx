import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Packages from "./components/Packages";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllWebsites from "./components/AllWebsites";

// 👇 This is your homepage content
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Process />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "Mahogany 'n' Mango Web Design";
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* All Websites page */}
            <Route path="/all-websites" element={<AllWebsites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
