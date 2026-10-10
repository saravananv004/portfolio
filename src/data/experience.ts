export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  keyAreas: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "systemtron",
    role: "Generative AI Intern",
    company: "SystemTron",
    location: "Chennai, Tamil Nadu",
    duration: "July 2025 – August 2025",
    description:
      "Worked with Generative AI models and LLM workflows, explored prompt engineering for chatbot and content-generation use cases, and evaluated AI outputs for quality, relevance, and accuracy. Gained exposure to multi-step agentic workflows and structured evaluation processes.",
    keyAreas: [
      "Generative AI and LLM workflows",
      "Prompt engineering",
      "Chatbot and content-generation use cases",
      "AI output evaluation",
      "Quality and relevance checks",
      "Agentic workflow exposure"
    ]
  },
  {
    id: "thinkbright",
    role: "Full Stack Web Development Intern",
    company: "ThinkBright EdTech LLP",
    location: "Tiruttani, Tamil Nadu",
    duration: "June 2025 – July 2025",
    description:
      "Worked on web application development using React, Node.js, Express, and MongoDB. Gained practical experience building CRUD functionality and REST API integrations, implementing responsive interfaces and multi-page routing, testing APIs, debugging issues, and working with deployment platforms.",
    keyAreas: [
      "React-based interfaces",
      "Node.js and Express",
      "MongoDB CRUD operations",
      "REST API integration",
      "Responsive web development",
      "Multi-page routing",
      "Postman and Axios",
      "Git and GitHub",
      "Vercel and Render deployment exposure",
      "Debugging and collaboration"
    ]
  }
];
