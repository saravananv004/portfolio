export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "AWS Cloud" | "Linux" | "Python & Web" | "UiPath RPA" | "Spring & Backend";
  details?: string;
  featuredHome?: boolean;
}

export const certificationsData: CertificationItem[] = [
  // AWS
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate: AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "November 2024",
    category: "AWS Cloud",
    details: "20 hours curriculum covering core cloud architecture, compute, security, and storage.",
    featuredHome: true
  },
  {
    id: "aws-foundations-essentials",
    title: "AWS Foundations: Getting Started with AWS Cloud Essentials",
    issuer: "AWS Training",
    date: "November 2024",
    category: "AWS Cloud",
    featuredHome: false
  },
  {
    id: "aws-billing-cost",
    title: "AWS Billing and Cost Management",
    issuer: "AWS Training",
    date: "November 2024",
    category: "AWS Cloud",
    featuredHome: true
  },

  // Linux
  {
    id: "rh104-linux-fundamentals",
    title: "Getting Started with Linux Fundamentals (RH104)",
    issuer: "Red Hat Academy",
    date: "May 2026",
    category: "Linux",
    featuredHome: true
  },
  {
    id: "command-line-linux",
    title: "Command Line in Linux",
    issuer: "Coursera Project Certificate",
    date: "January 2026",
    category: "Linux",
    featuredHome: false
  },

  // Python and Web Development
  {
    id: "flask-web-app",
    title: "Create Your First Web App with Python and Flask",
    issuer: "Coursera Project Certificate",
    date: "December 2023",
    category: "Python & Web",
    featuredHome: true
  },

  // UiPath Automation
  {
    id: "uipath-skillathon-2024",
    title: "UiPath Automation Explorer for Students – Skill-a-thon 2024",
    issuer: "UiPath Academic Alliance & ICT Academy",
    date: "2024",
    category: "UiPath RPA",
    featuredHome: true
  },
  {
    id: "uipath-explore-studio",
    title: "Explore Automation Development with UiPath Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },
  {
    id: "uipath-first-process",
    title: "Build Your First Process with Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },
  {
    id: "uipath-variables-arguments",
    title: "Variables, Constants and Arguments in Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },
  {
    id: "uipath-control-flow",
    title: "Control Flow in Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },
  {
    id: "uipath-modern-ui-automation",
    title: "User Interface (UI) Automation with Modern Design in Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },
  {
    id: "uipath-excel-automation",
    title: "Excel Automation with the Modern Experience in Studio",
    issuer: "UiPath",
    date: "April 2024",
    category: "UiPath RPA",
    featuredHome: false
  },

  // Spring and Backend Development
  {
    id: "spring-rest",
    title: "Spring REST",
    issuer: "Infosys Springboard",
    date: "October 2025",
    category: "Spring & Backend",
    featuredHome: true
  },
  {
    id: "spring-5-basics",
    title: "Spring 5 Basics with Spring Boot",
    issuer: "Infosys Springboard",
    date: "October 2025",
    category: "Spring & Backend",
    featuredHome: false
  },
  {
    id: "spring-data-jpa",
    title: "Spring Data JPA with Boot",
    issuer: "Infosys Springboard",
    date: "October 2025",
    category: "Spring & Backend",
    featuredHome: false
  }
];
