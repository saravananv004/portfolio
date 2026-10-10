export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-data",
    name: "Programming & Data",
    description: "Core data pipelines, processing, modeling, and ETL workflows.",
    iconName: "Database",
    skills: [
      "Python",
      "SQL",
      "Data ingestion",
      "Data cleaning",
      "Data transformation",
      "Data modeling",
      "ETL",
      "Exploratory Data Analysis",
      "Feature engineering"
    ]
  },
  {
    id: "analytics-visualization",
    name: "Analytics & Visualization",
    description: "Business intelligence, interactive reporting, metrics, and data storytelling.",
    iconName: "BarChart3",
    skills: [
      "Power BI",
      "Microsoft Excel",
      "Dashboard design",
      "KPI reporting",
      "Trend analysis",
      "Basic statistics",
      "Matplotlib",
      "Data storytelling"
    ]
  },
  {
    id: "genai-ml",
    name: "Generative AI & Machine Learning",
    description: "LLM workflows, structured evaluation, and supervised predictive models.",
    iconName: "Cpu",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Prompt engineering",
      "RAG concepts (conceptual familiarity)",
      "Agentic multi-step workflow exposure",
      "Scikit-learn",
      "Supervised machine learning",
      "AI output quality evaluation"
    ]
  },
  {
    id: "cloud-automation",
    name: "Cloud & Automation",
    description: "Cloud fundamentals, RPA automation processes, and deployment environments.",
    iconName: "Cloud",
    skills: [
      "AWS Cloud Foundations",
      "AWS Billing and Cost Management",
      "Linux fundamentals",
      "UiPath Studio",
      "UI automation",
      "Excel automation",
      "Vercel",
      "Render"
    ]
  },
  {
    id: "backend-tools",
    name: "Backend & Development Tools",
    description: "Modern web APIs, databases, developer tooling, and version control.",
    iconName: "Terminal",
    skills: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Postman",
      "Axios",
      "Jupyter Notebook",
      "VS Code",
      "Git",
      "GitHub"
    ]
  },
  {
    id: "quality-collaboration",
    name: "Quality & Collaboration",
    description: "Data integrity verification, secure handling, documentation, and stakeholder sync.",
    iconName: "CheckCircle2",
    skills: [
      "Data quality assurance",
      "Output validation",
      "Documentation",
      "Audit and verification reporting",
      "Secure data handling",
      "Debugging",
      "Cross-functional collaboration",
      "Stakeholder communication"
    ]
  }
];
