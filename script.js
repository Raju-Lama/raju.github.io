// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('close');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project Data
    const projects = [
        {
            title: 'Network Security Audit',
            description: 'Comprehensive security audit for enterprise network infrastructure',
            tech: 'Nmap, Wireshark, Metasploit'
        },
        {
            title: 'Malware Analysis',
            description: 'Reverse engineering of sophisticated malware sample',
            tech: 'IDA Pro, Cuckoo Sandbox, Python'
        },
        {
            title: 'Penetration Testing',
            description: 'Full-scope penetration test for financial institution',
            tech: 'Burp Suite, Kali Linux, OWASP ZAP'
        }
    ];

    // Blog Data
    const blogs = [
        {
            title: 'Understanding Zero-Day Exploits',
            excerpt: 'Deep dive into zero-day vulnerabilities and mitigation strategies...',
            date: 'March 15, 2023'
        },
        {
            title: 'Secure Coding Practices',
            excerpt: 'Essential security measures for modern software development...',
            date: 'February 28, 2023'
        },
        {
            title: 'Cloud Security Fundamentals',
            excerpt: 'Protecting your cloud infrastructure in AWS and Azure environments...',
            date: 'February 12, 2023'
        }
    ];

    // Dynamic Project Loading
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">${project.tech}</div>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Dynamic Blog Loading
    const blogGrid = document.querySelector('.blog-grid');
    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-meta">
                    <span class="date">${blog.date}</span>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </div>
        `;
        blogGrid.appendChild(blogPost);
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.elements[0].value;
        const email = contactForm.elements[1].value;
        const message = contactForm.elements[2].value;

        if (validateForm(name, email, message)) {
            // Submit form logic here
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        return true;
    }
});