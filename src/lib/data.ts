import {
  Award,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Cpu,
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
    title: "Software Engineering",
    description: "Service-oriented APIs with practical Spring Boot exposure.",
    icon: Server,
    items: ["Spring Boot", "REST APIs", "Java", "Testing", "API design"],
  },
  {
    title: "Cloud & Delivery",
    description:
      "CI/CD pipelines and container orchestration for deployable project environments.",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "Jenkins", "AWS", "GitHub Actions", "Linux"],
  },
];

export const projects = [
  {
    title: "Echoes of Longevity: Healthy Ageing Narratives in Science, News, and Social Media",
    description:
      "Large-scale NLP research analyzing how healthy ageing is discussed across PubMed, news media, Reddit, and YouTube. Applied transformer-based sentiment and emotion classification, interrupted time series modeling to detect lasting shifts in discourse around the COVID-19 pandemic, and Granger causality analysis to test lead-lag dynamics between platforms.",
    impact:
      "1st Place & Special Recognition Award — TDK Scientific Conference (2025); 2nd Place — EELISA Student Scientific Conference (2026).",
    tags: ["Python", "NLP", "Transformers", "Time Series Analysis", "spaCy", "statsmodels"],
    href: "https://github.com/Iskken/Echoes-of-Longevity-Research",
    icon: Award,
  },
  {
    title: "Resource-Efficient Neural Networks: Quantization Sensitivity",
    description:
      "Ongoing BME Project Laboratory research into how fixed-point quantization affects neural network training and robustness. Investigates post-training and quantization-aware training, gradient deadlock, gradient scaling, error accumulation, zero-order optimization, and a custom differentiable stair non-linearity for hardware-aware training, progressing from linear models to a quantized two-layer MLP.",
    impact:
      "Supervised BME Project Laboratory course — formal report with 7 controlled experiments; research in progress.",
    tags: ["Python", "PyTorch", "NumPy", "scikit-learn", "Quantization", "Numerical Optimization"],
    href: "https://github.com/Iskken/fixed-point-quantization-nn",
    icon: Cpu,
  },
  {
    title: "GlassBoxML",
    description:
      "Classic ML algorithms (linear regression, logistic regression, decision tree) hand-implemented from scratch and exposed through an interactive FastAPI web demo with a Chart.js frontend.",
    impact:
      "Containerized with Docker, CI/CD via GitHub Actions and Jenkins, deployed to a local Kubernetes cluster (minikube).",
    tags: ["Python", "FastAPI", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    href: "https://github.com/Iskken/GlassBoxML",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Credit Risk Prediction Pipeline",
    description:
      "End-to-end ML prototype for credit risk prediction, covering preprocessing, feature engineering, model training, and evaluation.",
    impact: "REST API endpoints for model inference, containerized with Docker.",
    tags: ["Python", "scikit-learn", "pandas", "FastAPI", "Docker"],
    href: null,
    icon: LineChart,
  },
];

export const recognitionAwards = [
  {
    title: "1st Place & Special Recognition Award",
    caption:
      "1st Place & Special Recognition — TDK BME Scientific Conference, 2025, for the Echoes of Longevity research.",
    image: "/recognition-tdk.jpg",
  },
  {
    title: "2nd Place",
    caption:
      "2nd Place — EELISA Student Scientific Conference, 2026, for the Echoes of Longevity research.",
    image: "/recognition-eelisa.jpg",
  },
];

export const timeline = [
  {
    date: "Internship",
    title: "Data Science Research Intern",
    organization: "HSDS-Lab",
    description:
      "Designed and automated scalable Python ETL pipelines processing ~100k documents, and integrated LLM APIs for structured output generation and prompt engineering experiments.",
    icon: Database,
  },
  {
    date: "Internship",
    title: "Finance Data Science Intern",
    organization: "FinKell",
    description:
      "Built a Python backend with REST APIs for an end-to-end credit risk prediction pipeline, containerized and deployed with Docker on AWS.",
    icon: Cloud,
  },
  {
    date: "Internship",
    title: "Java Software Developer Intern",
    organization: "FinanceSoft",
    description:
      "Developed and maintained Java Spring Boot microservices in a production financial system, strengthening test coverage with JUnit and Mockito in an Agile/Scrum team.",
    icon: Server,
  },
  {
    date: "Sep 2023 – June 2027",
    title: "Computer Science Engineering BSc",
    organization: "BME",
    description:
      "Coursework in algorithms, databases, machine learning, and software engineering fundamentals; top 10% of programme by GPA.",
    icon: GraduationCap,
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Iskken",
    href: socialLinks.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iskender-imanaliev",
    href: socialLinks.linkedin,
    icon: GraduationCap,
  },
];
