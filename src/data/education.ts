export interface EducationItem {
  id: string;
  degree: string;
  period: string;
  scoreLabel: string;
  score: string;
  location: string;
}

export const educationData: EducationItem[] = [
  {
    id: "be-cse",
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    period: "2022 – 2026",
    scoreLabel: "CGPA",
    score: "8.3",
    location: "Chennai, India"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2020 – 2021",
    scoreLabel: "Percentage",
    score: "65%",
    location: "Tamil Nadu, India"
  }
];
