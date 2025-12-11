// 1. Load Hero Data
document.getElementById('hero-title').innerHTML = heroData.title;
document.getElementById('hero-bio').innerHTML = heroData.bio;

// 2. Build Bento Grid (Tech Stack)
const techContainer = document.getElementById('tech-container');

techStack.forEach(tech => {
    const box = document.createElement('div');
    box.className = `bento-box ${tech.size}`;
    // Set custom hover color variable
    box.style.setProperty('--hover-color', tech.color);

    // Handle Databricks specifically (since Devicon might not have the perfect red logo)
    let iconHtml = `<i class="${tech.icon}"></i>`;
    if (tech.customIcon) {
        // FETCHING THE REAL DATABRICKS LOGO (Official Red Color)
        iconHtml = `<img src="https://cdn.simpleicons.org/databricks/FF3621" alt="${tech.name}" class="custom-svg">`;
    } else {
        // Standard Devicons
        iconHtml = `<i class="${tech.icon}"></i>`;
    }

    box.innerHTML = `
        <div class="bento-icon">${iconHtml}</div>
        <div class="bento-info">
            <h3>${tech.name}</h3>
            ${tech.desc ? `<p>${tech.desc}</p>` : ''}
        </div>
    `;
    techContainer.appendChild(box);
});

// 3. Build Project Grid
const projectContainer = document.getElementById('project-container');

projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Generate Tags HTML
    const tagsHtml = proj.tags.map(tag => `<span>${tag}</span>`).join('');

    // Check if link exists
    const linkHtml = proj.link !== "#"
        ? `<a href="${proj.link}" target="_blank" class="live-link"><i class="fas fa-external-link-alt"></i> Live</a>`
        : '';

    card.innerHTML = `
        <div class="p-header">
            <span class="domain">${proj.category}</span>
            ${linkHtml}
        </div>
        <h3>${proj.title}</h3>
        <div class="p-body">
            <div class="p-row">
                <strong>Challenge:</strong> ${proj.challenge}
            </div>
            <div class="p-row">
                <strong>Solution:</strong> ${proj.solution}
            </div>
        </div>
        <div class="p-tags">
            ${tagsHtml}
        </div>
    `;
    projectContainer.appendChild(card);
});

// 4. Hamburger Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Optional: Toggle icon between Bars and X
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});