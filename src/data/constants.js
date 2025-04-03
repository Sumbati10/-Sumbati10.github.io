export const Bio = {
  name: "Sumbati Lindah",
  roles: [
    "Data Scientist",
    "Data Analyst",
    "ML Engineer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Sumbati10",
  resume: "https://drive.google.com/file/d/1VgcV8Z0E3bQX4O_gkZqZ03iWZ0DqNGrO/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/lindahsumbati/"
};

export const skills = [
  {
    title: "Machine Learning",
    skills: [
      {
        name: "TensorFlow",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a2/TensorFlow_logo.svg",
      },
      {
        name: "Scikit Learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/800px-Scikit_learn_logo_small.svg.png",
      },
      {
        name: "Keras",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Keras_logo.png/800px-Keras_logo.png",
      },
      {
        name: "PyTorch",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/PyTorch_logo.png/800px-PyTorch_logo.png",
      },
      {
        name: "XGBoost",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3c/XGBoost_logo.png",
      },
      {
        name: "LightGBM",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/LightGBM_logo.png/600px-LightGBM_logo.png",
      },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      {
        category: "Programming Languages",
        skills: [
          "Python (NumPy, Pandas, Scikit-learn)",
          "R Language",
          "STATA",
        ],
      },
      {
        category: "Data Visualization",
        skills: [
          "Microsoft PowerBI",
          "Matplotlib",
          "Seaborn",
          "LookML (Looker)",
        ],
      },
      {
        category: "Statistical Analysis",
        skills: [
          "Hypothesis Testing",
          "Time Series Analysis",
          "Regression Analysis",
          "A/B Testing",
        ],
      },
      {
        category: "Database Management",
        skills: [
          "MYSQL",
          "PostgreSQL",
        ],
      },
      {
        category: "Data Science",
        skills: [
          "Predictive Modeling",
          "Natural Language Processing (NLP)",
          "Statistical Analysis",
          "Data Visualization",
          "Machine Learning",
          "Deep Learning",
          "Artificial Intelligence (AI)",
        ],
      },
      {
        category: "Tools",
        skills: [
          "Excel",
          "Google Analytics",
          "Jupyter Notebook",
          "Git",
          "Google Sheets",
          "GitHub",
        ],
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Data Scientist",
    company: "Hello Tractor",
    date: "January 2024 - Present",
    desc: `
      • Selected features, building and optimizing classifiers using machine learning techniques.
      • Extended company’s data with third party sources of information when needed from the database.
      • Enhanced data collection procedures to include information that is relevant for building analytic systems.
      • Implemented natural language processing (NLP) techniques to analyse user-generated text data for Agriculture App.
      • Designed and deployed cloud-based data pipelines for real-time analytics.
      • Conducted predictive analytics to optimize resource allocation and improve operational efficiency in financial data analysis.
      • Collaborated with international teams to provide insights on agricultural development projects.
      • Conducted remote sensing and GIS to extract data using Google Earth Engine.
      • Processed, cleansed, and verified the integrity of data used for analysis.
      • Conducted ad-hoc analysis and A/B testing to evaluate the effectiveness of new business strategies.
    `,
    skills: [
      "Machine Learning",
      "NLP",
      "Data Pipelines",
      "Google Earth Engine",
      "Data Processing",
      "Predictive Analytics",
      "Cloud Computing",
    ],
  },
  {
    id: 1,
    role: "Data Analyst",
    company: "Kenya Agricultural and Livestock Research Organization",
    date: "2018 - 2020",
    desc: `
      • Developed and implemented innovative data collection systems and strategies, optimizing statistical efficiency and elevating data quality; reduced data processing time by 40% and increased data accuracy by 25%.
      • Applied expertise in ETL/ELT principles to optimize data processing and management, contributing to improved data quality and efficiency.
      • Built Power BI dashboards and reports that are easily understandable by stakeholders, enhancing the accessibility and usability of data-driven insights, ultimately improving the decision-making process.
      • Developed and maintained dashboards that tracked KPIs, facilitating a 25% increase in overall organizational performance.
      • Contributed to project and methodology design such as analytical frameworks, resulting in more robust research methodologies and project structures that increased project efficiency by 30%.
      • Acquired data from secondary and primary data sources, maintained databases and systems, ensuring data integrity and accessibility, resulting in a 25% reduction in data retrieval time.
    `,
    skills: [
      "Power BI",
      "ETL/ELT",
      "Data Collection",
      "SQL",
      "Data Processing",
      "Database Management",
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",
      school: "World Quant University",
      date: "Ongoing",
      degree: "Masters in Financial Engineering",
    },
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "Kenyatta University",
      date: "2016 - 2020",
      grade: "Bachelor of Science (Statistics and Programming)",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "World Quant University",
      date: "2023",
      degree: "Applied Data Science",
    },
  ];
  export const projects = [
    {
      id: 1,
      title: "Breast Cancer Detection",
      date: "2024",
      description:
        "This Breast Cancer Detection application uses a machine learning model to predict the presence of breast cancer based on various features of cell nuclei.",
      image:
        "https://github.com/Sumbati10/PREDICTION_BREASTCANCER/blob/main/demo.gif",
      tags: ["Machine Learning", "Python", "Flask", "Scikit-learn"],
      category: "machine learning",
      github: "https://github.com/Sumbati10/PREDICTION_BREASTCANCER",
      webapp: "https://prediction-breastcancer.netlify.app/",
    },
    {
      id: 2,
      title: "Diabetes Prediction System",
      date: "2024",
      description:
        "The Diabetes Prediction System is a web-based application that predicts the likelihood of an individual having diabetes based on various health-related features. The system utilizes a machine learning model trained on historical data to provide predictions for users.",
      image:
        "https://github.com/Sumbati10/Diabetes-Prediction-System/blob/main/demo.gif",
      tags: ["Machine Learning", "Python", "Flask", "Scikit-learn"],
      category: "machine learning",
      github: "https://github.com/Sumbati10/Diabetes-Prediction-System",
      webapp: "https://diabetes-prediction.netlify.app/",
    },
    {
      id: 3,
      title: "Potato Disease Classification Using CNN",
      date: "2024",
      description:
        "Developed a deep learning-based web application to classify various potato diseases using Convolutional Neural Networks (CNN). The system utilizes image classification techniques to predict potato diseases from images of leaves.",
      image:
        "https://github.com/Sumbati10/Potato-Disease-Classification-Using-CNN/blob/main/images/Screenshot%202024-05-22%20222449.png",
      tags: ["Deep Learning", "Python", "TensorFlow", "CNN", "Image Classification"],
      category: "machine learning",
      github: "https://github.com/Sumbati10/Potato-Disease-Classification-Using-CNN",
      webapp: "https://potato-disease-classification.netlify.app/",
    },
  ];
      