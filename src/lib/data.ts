import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Container,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  Server,
} from "lucide-react";

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/Iskken",
  linkedin: "https://www.linkedin.com/in/iskender-imanaliev/",
  email: "iimanaliev312@gmail.com",
};

// export const profileStats = [
//   { value: "12+", label: "Projects shipped" },
//   { value: "3", label: "Applied ML domains" },
//   { value: "2 yrs", label: "CS coursework" },
// ];

export const skills = [
  {
    title: "Machine Learning",
    description: "Modeling, evaluation, feature engineering, and experiment tracking.",
    icon: BrainCircuit,
    items: ["Python", "scikit-learn", "Pandas", "NumPy", "Model evaluation"],
  },
  {
    title: "Data Engineering",
    description: "Reliable pipelines for analysis-ready datasets and dashboards.",
    icon: Database,
    items: ["SQL", "ETL", "PostgreSQL", "Data cleaning", "Visualization"],
  },
  {
    title: "Backend Foundations",
    description: "Service-oriented APIs with practical Spring Boot exposure.",
    icon: Server,
    items: ["Spring Boot", "REST APIs", "Java", "Testing", "API design"],
  },
  {
    title: "Cloud & Delivery",
    description: "Containerized workflows and deployable project environments.",
    icon: Cloud,
    items: ["Docker", "AWS", "GitHub Actions", "Linux", "CI basics"],
  },
];

export const projects = [
  {
    title: "Internship Match Predictor",
    description:
      "A supervised learning workflow that scores internship postings against resume features and highlights the strongest match factors.",
    impact: "Improved shortlist precision by 28% on a held-out sample dataset.",
    tags: ["Python", "scikit-learn", "NLP", "Pandas"],
    href: "https://github.com/username/internship-match-predictor",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Campus Energy Forecast",
    description:
      "Time-series forecasting notebook and dashboard for predicting short-term building energy demand from weather and usage signals.",
    impact: "Compared baseline, random forest, and gradient boosting approaches.",
    tags: ["Python", "SQL", "Plotly", "Forecasting"],
    href: "https://github.com/username/campus-energy-forecast",
    icon: LineChart,
  },
  {
    title: "Research Paper Explorer",
    description:
      "Searchable full-stack prototype for clustering paper abstracts and surfacing related topics for student research groups.",
    impact: "Built a Spring Boot API with reproducible Docker development setup.",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Embeddings"],
    href: "https://github.com/username/research-paper-explorer",
    icon: Code2,
  },
];

export const timeline = [
  {
    date: "2026",
    title: "Computer Science Student",
    organization: "University Program",
    description:
      "Focused on algorithms, databases, machine learning, and software engineering fundamentals.",
    icon: GraduationCap,
  },
  {
    date: "2025",
    title: "Data Science Project Lead",
    organization: "Student Analytics Lab",
    description:
      "Coordinated small project teams, cleaned real-world datasets, and presented model results to non-technical audiences.",
    icon: BrainCircuit,
  },
  {
    date: "2024",
    title: "Backend & DevOps Practice",
    organization: "Independent Projects",
    description:
      "Built REST API prototypes with Spring Boot, containerized services with Docker, and explored AWS deployment basics.",
    icon: Container,
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: "student@example.com",
    href: socialLinks.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: socialLinks.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: socialLinks.linkedin,
    icon: GraduationCap,
  },
];
