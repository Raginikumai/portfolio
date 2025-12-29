(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        renderTechStack();
        renderProjects();
    });

    const DOM = {
        techContainer: document.getElementById('tech-container'),
        projectContainer: document.getElementById('project-container'),
        bentoTemplate: document.getElementById('bento-box-template'),
        projectTemplate: document.getElementById('project-card-template'),
        hamburger: document.querySelector('.hamburger'),
        navbar: document.querySelector('.navbar')
    };

    function renderTechStack() {
        if (!DOM.techContainer || !DOM.bentoTemplate) return;
        const fragment = document.createDocumentFragment();

        portfolioData.techStack.forEach(tech => {
            const templateNode = DOM.bentoTemplate.content.cloneNode(true);
            const box = templateNode.querySelector('.bento-box');
            const icon = box.querySelector('.bento-icon');

            box.classList.add(tech.size);
            box.style.setProperty('--hover-color', tech.color);
            if (tech.customIcon) {
                icon.innerHTML = `<img src="${tech.customIcon}" alt="${tech.name}" class="custom-svg">`;
            } else {
                icon.innerHTML = `<span class="${tech.icon}" aria-hidden="true"></span>`;
            }

            box.querySelector('h3').textContent = tech.name;
            box.querySelector('p').textContent = tech.desc;

            fragment.appendChild(templateNode);
        });

        DOM.techContainer.appendChild(fragment);
    }

    function renderProjects() {
        if (!DOM.projectContainer || !DOM.projectTemplate) return;
        const fragment = document.createDocumentFragment();

        portfolioData.projects.forEach(proj => {
            const templateNode = DOM.projectTemplate.content.cloneNode(true);
            const card = templateNode.querySelector('.project-card');
            const liveLink = card.querySelector('.live-link');

            card.querySelector('.domain').textContent = proj.category;
            card.querySelector('h3').textContent = proj.title;
            card.querySelector('.challenge').innerHTML = proj.challenge;
            card.querySelector('.solution').innerHTML = proj.solution;

            if (proj.link) {
                liveLink.href = proj.link;
            } else {
                liveLink.style.display = 'none';
            }

            const tagsContainer = card.querySelector('.p-tags');
            proj.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });

            fragment.appendChild(templateNode);
        });

        DOM.projectContainer.appendChild(fragment);
    }

    function initMobileMenu() {
        if (!DOM.hamburger || !DOM.navbar) return;

        DOM.hamburger.addEventListener('click', () => {
            const isActive = DOM.navbar.classList.toggle('active');
            const icon = DOM.hamburger.querySelector('span');

            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                DOM.hamburger.setAttribute('aria-label', 'Close menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                DOM.hamburger.setAttribute('aria-label', 'Open menu');
            }
        });
    }

})();
