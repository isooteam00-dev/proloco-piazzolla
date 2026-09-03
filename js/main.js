document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
                const mobileBtn = document.querySelector('.mobile-menu-btn');
                const navLinks = document.querySelector('.nav-links');

                if (mobileBtn && navLinks) {
                        mobileBtn.addEventListener('click', () => {
                                navLinks.classList.toggle('nav-active');
                        });
                }

                const dropdowns = document.querySelectorAll('.nav-dropdown');
                dropdowns.forEach(dropdown => {
                        const dropdownToggle = dropdown.querySelector('.nav-dropdown-toggle');
                        if (dropdownToggle) {
                                dropdownToggle.addEventListener('click', (e) => {
                                        if (window.innerWidth <= 768) {
                                                e.preventDefault();
                                                dropdown.classList.toggle('open');
                                        }
                                });
                        }
                });

                const links = document.querySelectorAll('.nav-links a');
                links.forEach(link => {
                        const href = link.getAttribute('href');
                        if (!href || href === '#') return;
                        
                        try {
                                const linkUrl = new URL(href, window.location.href);
                                if (linkUrl.pathname === window.location.pathname) {
                                        link.classList.add('active');
                                }
                        } catch (e) {
                                // Fallback se URL non è valido
                                if (window.location.pathname.endsWith(href)) {
                                        link.classList.add('active');
                                }
                        }
                });
        }, 100);

        const revealAll = () => {
                document.querySelectorAll('.fade-in:not(.visible)').forEach(el => el.classList.add('visible'));
        };

        const observerOptions = {
                threshold: 0.01,
                rootMargin: "0px 0px 150px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                        }
                });
        }, observerOptions);

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));

        // Rete di sicurezza: alcune pagine caricano immagini/contenuti che spostano
        // il layout dopo il primo controllo dell'IntersectionObserver (es. immagini
        // senza dimensioni note), lasciando elementi "fade-in" invisibili finché non
        // si scorre. Qui forziamo comunque la visibilità poco dopo il caricamento,
        // così nulla resta nascosto più del dovuto.
        window.addEventListener('load', () => {
                setTimeout(revealAll, 300);
        });
        setTimeout(revealAll, 1500);
});
