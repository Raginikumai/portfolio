/* 
   MODULAR DATA FILE 
   Edit this file to update your portfolio content.
*/

const heroData = {
    title: `
    Hi, I'm <span class='highlight'>Ragini Kumain</span>.
    <br>
    <div class="hero-role-wrap">
        <span class="hero-role">
            <span id="role-text">Backend</span>
            <span>Engineer</span>
        </span>
    </div>
    `,

    bio: "Work spanning system stability and data workflow engineering, using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Databricks</strong> alongside practical <strong>API design</strong>, deep <strong>debugging</strong>, clean <strong>refactoring</strong>, and migration processes tuned for clarity, performance, and reliability."
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
    // Core Backend
    {
        name: "Node.js",
        icon: "devicon-nodejs-plain colored",
        color: "#339933",
        size: "large",
        desc: "Backend Core"
    },
    {
        name: "Databricks",
        icon: "databricks-logo",
        color: "#FF3621",
        size: "large",
        desc: "Data Engineering",
        customIcon: true
    },

    // Backend Framework
    {
        name: "Express",
        icon: "devicon-express-original",
        color: "#4B5563",
        size: "medium",
        desc: "API Framework"
    },

    // Database
    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored",
        color: "#47A248",
        size: "medium",
        desc: "NoSQL DB"
    },

    // Frontend
    {
        name: "React",
        icon: "devicon-react-original colored",
        color: "#61DAFB",
        size: "medium",
        desc: "UI Library"
    },

    // Tools
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