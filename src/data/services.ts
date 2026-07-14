import { Service } from "../types/service";

import strategyImage from "../assets/services/digital-strategy-planning.png";

export const services: Service[] = [
  {
    id: "digital-strategy",

    title: "Digital Strategy & Planning",

    shortDescription:
      "Tailored strategies to grow your business online.",

    illustration: strategyImage,

    bookingLink: "/contact",

    process: [
      {
        id: 1,
        title: "Discovery",
        description:
          "We learn about your business, goals, audience, and current challenges."
      },
      {
        id: 2,
        title: "Research",
        description:
          "We evaluate your competitors, market, and digital presence."
      },
      {
        id: 3,
        title: "Strategy",
        description:
          "We develop a custom roadmap designed specifically for your business."
      },
      {
        id: 4,
        title: "Presentation",
        description:
          "We walk you through the strategy and provide actionable next steps."
      }
    ],

    outcome: [
      "Clear digital roadmap",
      "Growth opportunities",
      "Prioritized action plan",
      "Strategic recommendations"
    ],

    caseStudyId: "hester-consulting"
  }
];