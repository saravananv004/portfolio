export interface ProfileInfo {
  name: string;
  initials: string;
  headline: string;
  shortIntro: string;
  heroDescription: string;
  aboutBio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  hasResumePdf: boolean;
  photoUrl: string;
  portraitPhotoUrl: string;
  languages: string;
  focusAreas: string[];
}

export const profileData: ProfileInfo = {
  name: "Saravanan V",
  initials: "SV",
  headline: "Data Engineering & Analytics | Python, SQL, Power BI | GenAI & LLM Enablement | Cloud & Automation",
  shortIntro: "HELLO, I'M",
  heroDescription:
    "Computer Science Engineering graduate with hands-on internship experience in Generative AI workflows and full-stack development. Interested in building reliable data pipelines, analytical solutions, automation workflows, and practical AI-powered applications.",
  aboutBio:
    "I am a Computer Science Engineering graduate interested in data engineering, analytics, Generative AI, and automation. Through internships and practical projects, I have gained exposure to data processing, data quality, LLM workflows, REST APIs, database operations, and full-stack application development.\n\nI enjoy breaking down technical problems into manageable steps, building practical solutions, validating outputs, and communicating results clearly. I am looking for opportunities where I can contribute, strengthen my technical skills, and grow as an engineer.",
  location: "Chennai, Tamil Nadu, India",
  email: "saravananv0004@gmail.com",
  phone: "+91 7305554885",
  linkedin: "https://linkedin.com/in/saravananv0004",
  github: "https://github.com/saravananv004",
  resumeUrl: "/Saravanan_V_Resume.pdf",
  hasResumePdf: true, // Verified present in public/Saravanan_V_Resume.pdf
  photoUrl: "/images/profile/saravanan.jpg",
  portraitPhotoUrl: "/images/profile/saravanan-portrait.jpg",
  languages: "Languages: Tamil and English — reading and writing.",
  focusAreas: [
    "Data Engineering and ETL",
    "Data Analytics and Visualization",
    "Generative AI and LLM Workflows",
    "Python and SQL Development",
    "Automation and API Integration",
    "Software Engineering Fundamentals"
  ]
};
