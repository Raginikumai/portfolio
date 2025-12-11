/* 
   MODULAR DATA FILE 
   Edit this file to update your portfolio content.
*/

const heroData = {
    title: "Hi, I'm <span class='highlight'>Ragini Kumain</span>.<br>Architecting Scalable Backends.",

    bio: "Software Engineer bridging the gap between <strong>MERN Stack</strong> logic and <strong>Enterprise Data Engineering</strong>. Specialized in Cost Reduction, Performance Optimization, and Large-Scale Migrations."
};

/* 
   TECH STACK (Bento Grid)
   - name: Display name
   - icon: The Devicon class name (https://devicon.dev/)
   - color: The glow color on hover
   - size: 'large' (2 columns) or 'small' (1 column)
*/
/* 
   TECH STACK (Bento Grid)
   - Added 'colored' to all icons to show brand colors.
   - Updated Databricks to use the official SVG image.
*/
const techStack = [
    {
        name: "Node.js",
        icon: "devicon-nodejs-plain colored", // Added 'colored'
        color: "#339933",
        size: "large",
        desc: "Backend Core"
    },
    {
        name: "Databricks",
        // We will handle this custom image in script.js, keep this string as is
        icon: "databricks-logo",
        color: "#FF3621",
        size: "large",
        desc: "Data Engineering",
        customIcon: true
    },
    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored", // Added 'colored'
        color: "#47A248",
        size: "small"
    },
    {
        name: "React",
        icon: "devicon-react-original colored", // Added 'colored'
        color: "#61DAFB",
        size: "small"
    },
    {
        name: "Python",
        icon: "devicon-python-plain colored", // Added 'colored'
        color: "#3776AB",
        size: "small"
    },
    {
        name: "Docker",
        icon: "devicon-docker-plain colored", // Added 'colored'
        color: "#2496ED",
        size: "small"
    },
    {
        name: "Postman",
        icon: "devicon-postman-plain colored", // Added 'colored'
        color: "#FF6C37",
        size: "small"
    },
    {
        name: "Git",
        icon: "devicon-git-plain colored", // Added 'colored'
        color: "#F05032",
        size: "small"
    }
];

/* 
   PROJECTS
   - tags: Array of strings for the tech stack pills
*/
const projects = [
    {
        title: "Talent Junction",
        category: "FinTech",
        link: "https://app.talentjn.com/jobs",
        challenge: "High latency in job search & complex PDF generation requirements.",
        solution: "Built a <strong>Document Gen Engine</strong> (PDF/Word) and optimized search with <strong>MongoDB Aggregation</strong>.",
        tags: ["Node.js", "React", "MongoDB", "Winston"],
        icon: "fas fa-bolt"
    },
    {
        title: "OneTrust Migration",
        category: "Data Eng",
        link: "#",
        challenge: "Migrating 400k+ schemas across <strong>49 Workspaces</strong> without direct access.",
        solution: "Automated migration using <strong>Databricks Workflows</strong> and Service Principal Clusters.",
        tags: ["Databricks", "Python", "Unity Catalog", "Security"],
        icon: "fas fa-cloud"
    },
    {
        title: "MasterControl",
        category: "Enterprise",
        link: "#",
        challenge: "Client needed to cut costs by replacing expensive MuleSoft integration.",
        solution: "Engineered a custom <strong>JS Parsing Engine</strong> for XML/CSV, saving <strong>~30% costs</strong>.",
        tags: ["JavaScript", "XML Parsing", "Cost Saving"],
        icon: "fas fa-money-bill-wave"
    },
    {
        title: "Moxie",
        category: "Healthcare",
        link: "#",
        challenge: "Maintaining a fragile 2015 legacy Node.js codebase.",
        solution: "Refactored to <strong>MVC Architecture</strong> and added strict validation for 100% uptime.",
        tags: ["Legacy Node", "Refactoring", "MVC"],
        icon: "fas fa-hospital"
    }
];