import weartherImage from "../assets/wearther.png";
import expenseCategorizerImage from "../assets/expense_categorizer.png";

export const projects = [

{
    title: "Expense Categorizer 💳",

    type: "Machine Learning Finance Application",

    description:
        "A machine learning application that automatically categorizes personal transactions from CSV files. It uses natural language processing with TF-IDF feature extraction and Logistic Regression to classify expenses and transform raw transaction data into structured financial data.",

    image: expenseCategorizerImage,

    tags: [
        "Python",
        "Scikit-learn",
        "TF-IDF",
        "Logistic Regression",
    ]
},

{
    title: "Wearther 🌦️",

    type: "Weather Recommendation App",

    description:
        "A weather recommendation application that transforms forecasts into practical clothing suggestions. It combines temperature, precipitation, wind and weather conditions to generate outfit recommendations using a rule-based system.",

    image: weartherImage,

    live: "https://wearther.fly.dev",

    github: "https://github.com/martinelarsen/Wearther",

    tags: [
        "Python",
        "Streamlit",
        "Pandas",
        "API",
        "Fly.io"
    ]
},

{
    title: "My First Data Science Project: Bike Traffic Prediction 🧪",

    type: "Data Science Application",

    description:
        "My first ever data science project combining data analysis, machine learning and a Flask web application.",

    status: "Deployment in progress",

    tags: [
        "Python",
        "Pandas",
        "Flask",
        "Machine Learning",
        "Data Science"
    ]
},

{
    title: "Bike Traffic Prediction V2 🚲",

    type: "End-to-End Machine Learning System",

    description:
        "An improved version of my first data science project, rebuilt as a complete end-to-end machine learning pipeline. The project automates data collection from APIs, trains forecasting models, and creates a reproducible workflow for predicting bicycle traffic.",
        
    status: "Deployment in progress",
        
    tags: [
        "Python",
        "Machine Learning",
        "Data Pipeline",
        "API"
    ]
},

{
    title: "SQL + Shiny Dashboard 📈",

    type: "Interactive Data Dashboard",

    description:
        "An interactive dashboard built with Shiny and SQL, demonstrating database querying, data processing and visualization.",

    status: "Deployment in progress",

    tags: [
        "Shiny",
        "SQL",
        "Data Visualization"
    ]
},

{
    title: "Portfolio Website 💼",

    type: "Personal Website",

    description:
        "My personal portfolio website, that you're currently on, built to showcase data science, machine learning, and data visualization projects. Built with Astro.",

    github: "",

    tags: [
        "Astro",
        "TypeScript",
        "HTML",
        "CSS"
    ]
}

];