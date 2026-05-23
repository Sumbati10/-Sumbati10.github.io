export const Bio = {
  name: "Linda Sumbati",
  roles: [
    "Data Engineer",
    "Data Scientist",
    "Data Analyst",
  ],
  description:
    "Data Engineer and Data Scientist with 5+ years of experience building scalable, automated data systems that enable faster decision-making. Strong background in ETL/ELT pipelines, dbt, SQL, Airflow, and AWS-based infrastructure, with applied analytics and machine learning experience across agriculture and finance. Skilled at communicating technical concepts to both technical and non-technical stakeholders and delivering reliable, high-impact data products.",
  github: "https://github.com/Sumbati10",
  resume: "https://drive.google.com/file/d/1VgcV8Z0E3bQX4O_gkZqZ03iWZ0DqNGrO/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/lindahsumbati/"
};

export const skills = [
  {
    category: "Programming",
    skills: ["Python (NumPy, Pandas, scikit-learn)", "R", "SQL", "STATA"],
  },
  {
    category: "Data Engineering",
    skills: [
      "Airflow",
      "dbt",
      "Terraform",
      "Flyway",
      "pgTAP",
      "ETL/ELT pipelines",
      "Data modeling",
      "Data quality",
      "Metadata management",
      "API integration",
      "Workflow automation",
    ],
  },
  {
    category: "Databases / Warehousing",
    skills: ["PostgreSQL", "MySQL", "Amazon Redshift"],
  },
  {
    category: "Cloud / DevOps",
    skills: ["AWS (Lambda, S3, RDS, EC2)", "Docker", "Git/GitHub"],
  },
  {
    category: "Analytics / Visualization",
    skills: [
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "LookML (Looker)",
      "Excel",
      "Google Sheets",
      "Google Analytics",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Statistics / ML",
    skills: [
      "Hypothesis testing",
      "Regression",
      "Time series",
      "A/B testing",
      "Predictive modeling",
      "NLP",
      "Machine learning",
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Data Engineer",
    company: "Hello Tractor",
    date: "January 2025 - Present",
    desc: `
      • Own end-to-end data engineering for analytics and operational reporting across multiple African markets; improve reliability, observability, and performance of core pipelines.
      • Build and maintain production-grade ELT models in dbt on PostgreSQL; optimize incremental models and materialized views to reduce query latency and improve stakeholder self-service.
      • Orchestrate workflows with Airflow and implement automated data quality checks (pgTAP) to enforce testing standards and reduce incidents.
      • Deploy and operate AWS-based ingestion and processing services (Lambda, S3) to scale telemetry and booking data pipelines.
      • Partner with product, analytics, and operations teams to translate requirements into governed datasets, KPIs, and reusable data marts.
    `,
    skills: [
      "Airflow",
      "dbt",
      "PostgreSQL",
      "AWS",
      "Data Engineering",
      "ELT",
      "Data Quality",
    ],
  },
  {
    id: 1,
    role: "Data Scientist / Data Engineer",
    company: "Hello Tractor",
    date: "January 2023 - December 2024",
    desc: `
      • Designed, built, and automated data pipelines using dbt, PostgreSQL, and AWS to deliver high-quality analytics across multiple markets.
      • Created and optimized materialized views for faster and more reliable data retrieval.
      • Developed automated data QA testing frameworks using pgTAP to ensure accuracy and integrity in data workflows.
      • Deployed AWS-based pipelines (Lambda, S3) to handle large-scale ingestion and transformation of telemetry, booking, and performance data.
      • Integrated third-party data sources to enhance company datasets and provide richer analytical context.
      • Built NLP models to analyze user-generated text and produce insights on customer sentiment and behavior.
      • Conducted predictive analytics on financial and operational data to optimize resource allocation and efficiency.
      • Applied remote sensing and GIS using Google Earth Engine for geospatial extraction and land-use analysis.
    `,
    skills: [
      "dbt",
      "PostgreSQL",
      "AWS",
      "NLP",
      "Machine Learning",
      "Data Pipelines",
      "Google Earth Engine",
    ],
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "Kenya Agricultural and Livestock Research Organization (KALRO)",
    date: "2018 - 2020",
    desc: `
      • Developed and improved data collection systems and strategies, reducing processing time by 40% and increasing accuracy by 25%.
      • Applied ETL/ELT principles to improve data processing efficiency and data quality.
      • Built Power BI dashboards and reports to improve stakeholder access to KPIs and decision-making.
      • Designed analytical frameworks and supported research methodology design, improving project efficiency by 30%.
      • Maintained databases and systems, improving data integrity and reducing retrieval time by 25%.
    `,
    skills: [
      "Power BI",
      "ETL/ELT",
      "Data Analysis",
      "SQL",
      "Database Management",
    ],
  },
  {
    id: 3,
    role: "Data Analytics Intern",
    company: "KPMG AU",
    date: "2022",
    desc: `
      • Applied SQL and Python to deliver analysis aligned with stakeholder requirements and reporting standards.
      • Created Power BI dashboards to communicate complex findings clearly to diverse audiences.
      • Assessed data quality and completeness to ensure robust, credible analysis and recommendations.
      • Supported clients and investors by delivering clear, actionable insights and data storytelling.
    `,
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Data Analysis",
      "Data Quality",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "WorldQuant University",
    date: "2026",
    degree: "MSc Financial Engineering",
  },
  {
    id: 1,
    school: "WorldQuant University",
    date: "2023",
    degree: "Applied Data Science",
  },
  {
    id: 2,
    school: "Kenyatta University",
    date: "2020",
    degree: "BSc Statistics and Programming",
  },
];

export const certifications = [
  {
    id: 0,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    id: 1,
    name: "Data Science, Machine Learning & AI",
    issuer: "AICE Africa",
    date: "2024",
  },
  {
    id: 2,
    name: "Applied Data Science",
    issuer: "Equitech Futures",
    date: "2023",
  },
  {
    id: 3,
    name: "Data Analytics",
    issuer: "ALX Africa",
    date: "2023",
  },
  {
    id: 4,
    name: "Leadership & Management",
    issuer: "Kenyatta University",
    date: "2020",
  },
];

export const projects = [
  {
    id: 1,
    title: "AgriBora",
    date: "2024",
    description:
      "Agricultural data platform providing analytics and insights for farming operations.",
    image:
      "https://raw.githubusercontent.com/Sumbati10/-AgriBora/main/demo.gif",
    tags: ["Data Engineering", "Python", "Analytics", "Agriculture"],
    category: "data engineering",
    github: "https://github.com/Sumbati10/-AgriBora",
  },
  {
    id: 2,
    title: "Diabetes Prediction System",
    date: "2024",
    description:
      "The Diabetes Prediction System is a web-based application that predicts the likelihood of an individual having diabetes based on various health-related features. The system utilizes a machine learning model trained on historical data to provide predictions for users.",
    image:
      "https://raw.githubusercontent.com/Sumbati10/Diabetes-Prediction-System/main/demo.gif",
    tags: ["Machine Learning", "Python", "Flask", "Scikit-learn"],
    category: "machine learning",
    github: "https://github.com/Sumbati10/Diabetes-Prediction-System",
    webapp: "https://diabetes-prediction.netlify.app/",
  },
  {
    id: 3,
    title: "Anomaly Detection and Forecasting Dashboard",
    date: "2024",
    description:
      "Dashboard for detecting anomalies in time series data and providing forecasting capabilities for business metrics.",
    image:
      "https://raw.githubusercontent.com/Sumbati10/Anomaly-Detection-and-Forecasting-Dashboard/main/demo.gif",
    tags: ["Time Series", "Python", "Forecasting", "Anomaly Detection"],
    category: "data science",
    github: "https://github.com/Sumbati10/Anomaly-Detection-and-Forecasting-Dashboard",
  },
  {
    id: 4,
    title: "Hospital Analytics Pipeline",
    date: "2024",
    description:
      "End-to-end data pipeline for hospital analytics, processing patient data and generating insights for healthcare operations.",
    image:
      "https://raw.githubusercontent.com/Sumbati10/hospital-analytics-pipeline/main/demo.gif",
    tags: ["Data Engineering", "ETL", "Python", "Healthcare"],
    category: "data engineering",
    github: "https://github.com/Sumbati10/hospital-analytics-pipeline",
  },
];
