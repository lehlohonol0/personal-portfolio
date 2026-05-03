document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const profileImg = document.getElementById('profileImg');

    const typedElement = document.getElementById('typed');
    const phrases = [
        'BSc IT Graduate',
        'Problem Solver',
        'Tech Enthusiast',
        
        
    ];
    
    if (typedElement) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentPhrase = '';
        
        function typeEffect() {
            currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }
        
        typeEffect();
    }

    const skillsData = {
        frontendSkills: [
            'HTML', 'CSS', 'JavaScript ', 
        ],
        progLangSkills: [
            'Python', 'Java', 'C++', 
            'JavaScript', 'SQL',
        ],
        backendSkills: [
            'Node.js', 'MySQL','Database Design'
        ],
        infraSkills: [
            'Windows OS','Hardware Support', 'Active Directory', 'IT Support',
            'System Administration'
        ]
    };

    for (const [categoryId, skills] of Object.entries(skillsData)) {
        const container = document.getElementById(categoryId);
        if (container) {
            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.textContent = skill;
                container.appendChild(skillItem);
            });
        }
    }

    const softSkills = [
        { icon: 'fas fa-lightbulb', name: 'Problem Solving' },
        { icon: 'fas fa-comments', name: 'Communication' },
        { icon: 'fas fa-users', name: 'Team Collaboration' },
        { icon: 'fas fa-clock', name: 'Time Management' },
        { icon: 'fas fa-handshake', name: 'Customer Service' },
        { icon: 'fas fa-brain', name: 'Adaptability' },
        { icon: 'fas fa-heart', name: 'Willingness to Learn' },
        { icon: 'fas fa-eye', name: 'Attention to Detail' },
        { icon: 'fas fa-puzzle-piece', name: 'Critical Thinking' },
        { icon: 'fas fa-smile', name: 'Positive Attitude' }
    ];

    const softSkillsGrid = document.getElementById('softSkillsGrid');
    if (softSkillsGrid) {
        softSkills.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'soft-skill-card';
            card.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            `;
            softSkillsGrid.appendChild(card);
        });
    }

    const projectsData = [
        {
            icon: 'fas fa-calculator',
            title: 'Simple JavaScript Calculator',
            tech: 'HTML · CSS · JavaScript',
            description: 'A clean, functional calculator with basic arithmetic operations (+, -, ×, ÷). Features a responsive design, keyboard support, and error handling for division by zero.',
            tags: ['DOM Manipulation', 'Events', 'CSS Grid'],
            link: '#'
        },
        
        
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsData.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-icon"><i class="${project.icon}"></i></div>
                <h3>${project.title}</h3>
                <div class="project-tech">${project.tech}</div>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">
                    view project <i class="fas fa-arrow-right"></i>
                </a>
            `;
            projectsGrid.appendChild(card);
        });
    }

    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            if (mobileNav.style.display === 'flex') {
                mobileNav.style.display = 'none';
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mobileNav.style.display = 'flex';
                mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        });

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.style.display = 'none';
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                mobileLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();

    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.3s ease';
        observer.observe(item);
    });

    const style = document.createElement('style');
    style.textContent = `
        .typed-text::after {
            content: '|';
            animation: blink 1s infinite;
            margin-left: 4px;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        .skill-item {
            opacity: 0;
            transform: translateY(20px);
        }
    `;
    document.head.appendChild(style);
});
