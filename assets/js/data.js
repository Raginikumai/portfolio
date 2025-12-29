const portfolioData = {
    techStack: [
        {
            name: "Node.js",
            icon: "devicon-nodejs-plain colored",
            color: "#339933",
            size: "large",
            desc: "Backend Core"
        },
        {
            name: "Databricks",
            customIcon: "https://cdn.simpleicons.org/databricks/FF3621",
            color: "#FF3621",
            size: "large",
            desc: "Data Engineering"
        },
        {
            name: "Express",
            icon: "devicon-express-original",
            color: "#4B5563",
            size: "medium",
            desc: "API Framework"
        },
        {
            name: "MongoDB",
            icon: "devicon-mongodb-plain colored",
            color: "#47A248",
            size: "medium",
            desc: "NoSQL DB"
        },
        {
            name: "React",
            icon: "devicon-react-original colored",
            color: "#61DAFB",
            size: "medium",
            desc: "UI Library"
        },
        {
            name: "Python",
            icon: "devicon-python-plain colored",
            color: "#3776AB",
            size: "small",
            desc: "Scripting"
        },
        {
            name: "Docker",
            icon: "devicon-docker-plain colored",
            color: "#2496ED",
            size: "small",
            desc: "Containers"
        },
        {
            name: "Postman",
            icon: "devicon-postman-plain colored",
            color: "#FF6C37",
            size: "small",
            desc: "API Testing"
        },
        {
            name: "Git",
            icon: "devicon-git-plain colored",
            color: "#F05032",
            size: "small",
            desc: "Version Control"
        },
        {
            name: "AWS",
            icon: "devicon-amazonwebservices-plain colored",
            color: "#232F3E",
            size: "small",
            desc: "Cloud Services"
        }
    ],
    projects: [
        {
            title: "Talent Junction",
            category: "FinTech",
            link: "https://app.talentjn.com/jobs",
            challenge: "High latency in job search & complex PDF generation requirements.",
            solution: "Built a <strong>Document Gen Engine</strong> (PDF/Word) and optimized search with <strong>MongoDB Aggregation</strong>.",
            tags: ["Node.js", "React", "MongoDB", "Winston"]
        },
        {
            title: "OneTrust Migration",
            category: "Data Eng",
            link: null,
            challenge: "Migrating 400k+ schemas across <strong>49 Workspaces</strong> without direct access.",
            solution: "Automated migration using <strong>Databricks Workflows</strong> and Service Principal Clusters.",
            tags: ["Databricks", "Python", "Unity Catalog", "Security"]
        },
        {
            title: "MasterControl",
            category: "Enterprise",
            link: null,
            challenge: "Client needed to cut costs by replacing expensive MuleSoft integration.",
            solution: "Engineered a custom <strong>JS Parsing Engine</strong> for XML/CSV, saving <strong>~30% costs</strong>.",
            tags: ["JavaScript", "XML Parsing", "Cost Saving"]
        },
        {
            title: "Moxie",
            category: "Healthcare",
            link: null,
            challenge: "Maintaining a fragile 2015 legacy Node.js codebase.",
            solution: "Refactored to <strong>MVC Architecture</strong> and added strict validation for 100% uptime.",
            tags: ["Legacy Node", "Refactoring", "MVC"]
        }
    ]
};