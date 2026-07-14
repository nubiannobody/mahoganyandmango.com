export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    challenge: string;
    approach: string;
    solution: string;
    outcome: string[];
    website: string;
    image: string;
  }
  
  
  export const caseStudies: CaseStudy[] = [
  
    {
      id: "hester-consulting",
  
      title: "Hester Consulting Website Optimization",
  
      client: "Hester Consulting",
  
      challenge:
        "The existing website needed a stronger digital presence that clearly communicated the brand, services, and value proposition.",
  
      approach:
        "We focused on understanding the business goals, improving structure, creating a clearer user journey, and designing an experience aligned with the company's vision.",
  
      solution:
        "A modern website experience was created with improved messaging, strategic layout decisions, and a user-focused design.",
  
      outcome: [
        "Clearer brand positioning",
        "Improved user experience",
        "Professional digital presence",
        "Better customer journey"
      ],
  
      image: "/images/hester-consulting.png",

      website:
        "https://silly-pony-43e29d.netlify.app"
    },
  
  
    {
      id: "stride-society",
  
      title: "Digital Strategy & Planning",
  
      client: "Stride Society",
  
      challenge:
        "The organization needed a digital platform that could support community engagement, walking events, route discovery, and member interaction.",
  
      approach:
        "We designed a user-focused experience centered around accessibility, community connection, and easy navigation.",
  
      solution:
        "A custom web platform was created featuring walking routes, registration workflows, event information, and community-focused features.",
  
      outcome: [
        "Centralized community platform",
        "Improved member experience",
        "Interactive route discovery",
        "Scalable digital foundation"
      ],

      image: "images/thestridesociety.png",

      website:
        "https://thestridesociety.netlify.app"
    },
  
  
    {
      id: "hester-consulting",
  
      title: "Website Optimization",
  
      client: "Hester Consulting",
  
      challenge:
        "The website needed improvements in performance, user experience, and overall effectiveness in communicating the brand message.",
  
      approach:
        "We reviewed the existing website experience, identified opportunities for improvement, and developed recommendations focused on usability and engagement.",
  
      solution:
        "Strategic website improvements were implemented to enhance navigation, presentation, and overall digital performance.",
  
      outcome: [
        "Improved website experience",
        "Stronger brand presentation",
        "Enhanced usability",
        "Performance improvements"
      ],
      image: "/images/hester-consulting.png",

      website:
        "https://silly-pony-43e29d.netlify.app"
    },
  
  
    {
      id: "pit-crew",
  
      title: "UX Consulting",
  
      client: "Pit Crew",
  
      challenge:
        "The platform needed a stronger user experience that helped users navigate information more efficiently.",
  
      approach:
        "We analyzed the current experience, identified user needs, and developed recommendations to improve usability.",
  
      solution:
        "UX improvements were implemented to create a clearer, more intuitive digital experience.",
  
      outcome: [
        "Improved user journey",
        "Enhanced usability",
        "Clearer navigation",
        "Better digital experience"
      ],
      
      image: "/images/pit-crew.png",
  
      website:
        "https://pitcrew.denkyemcoop.com/"
    },
  
  
    {
      id: "denkyem-portfolio",
  
      title: "Custom Digital Solutions",
  
      client: "Denkyem",
  
      challenge:
        "The business needed a tailored technology solution designed around specific workflows, goals, and user needs.",
  
      approach:
        "We collaborated to understand requirements, define functionality, and create a scalable technical strategy.",
  
      solution:
        "A custom digital solution was designed and developed using modern technologies with functionality built around business objectives.",
  
      outcome: [
        "Custom technology solution",
        "Improved workflows",
        "Scalable architecture",
        "Launch-ready platform"
      ],

      image: "/images/DenkyemDenizens.png",
  
      website:
        "https://portfolio.denkyemcoop.com/"
    }
  
  ];