export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    illustration: string;
  
    bookingLink: string;
  
    process: ProcessStep[];
  
    outcome: string[];
  
    caseStudyId: string;
  }
  
  export interface ProcessStep {
    id: number;
    title: string;
    description: string;
  }