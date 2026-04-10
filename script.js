document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
            navbar.style.background = 'var(--bg-white)';
        } else {
            icon.classList.replace('ph-x', 'ph-list');
            navbar.style.background = ''; // reset
        }
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
            navbar.style.background = '';
        });
    });

    // 3. Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .zoom-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger slightly earlier for smoother UX
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // 4. Global UI Modal Logic
    const modalOverlay = document.getElementById('global-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    if (modalOverlay) {
    const openModal = (type, title, data) => {
        modalTitle.textContent = title;
        
        if (type === 'contact') {
            // Inject high-converting Contact Form
            modalBody.innerHTML = `
                <form class="modal-form" onsubmit="event.preventDefault(); const a=Array.from(this.elements); const c=a[2].options[a[2].selectedIndex].text; window.open('https://wa.me/9145934593?text=Hello Fortune Education!%0A%0AI would like a free profile evaluation.%0A%0A*Name:* ' + encodeURIComponent(a[0].value) + '%0A*Phone:* ' + encodeURIComponent(a[1].value) + '%0A*Target Destination:* ' + encodeURIComponent(c), '_blank'); document.getElementById('modal-close-btn').click();">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required>
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your Whatsapp number" required>
                    </div>
                    <div class="form-group">
                        <label>Target Destination</label>
                        <select required>
                            <option value="">Select Country...</option>
                            <option value="uk">United Kingdom</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="other">Other / Not Sure</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit">Get Free Evaluation <i class="ph ph-paper-plane-tilt"></i></button>
                </form>
            `;
        } else {
            // Inject Info block
            modalBody.innerHTML = data || '<p>Detailed information coming soon.</p>';
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const type = btn.getAttribute('data-modal-type') || 'info';
            const title = btn.getAttribute('data-title') || 'Information';
            const info = btn.getAttribute('data-info');
            openModal(type, title, info);
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);

    // Close modal on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

        // 8. Auto-popup Consultation Form
        if (!sessionStorage.getItem('consultationShownFixed')) {
            setTimeout(() => {
                // Only pop up if the user hasn't already opened a modal themselves
                if (!modalOverlay.classList.contains('active')) {
                    openModal('contact', 'Book Your Free Consultation');
                    sessionStorage.setItem('consultationShownFixed', 'true');
                }
            }, 2000);
        }
    }

    // 5. Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') !== '#' && !this.classList.contains('open-modal-btn')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Also close mobile menu if open
                    if(document.getElementById('nav-links').classList.contains('active')){
                        document.getElementById('nav-links').classList.remove('active');
                        document.getElementById('mobile-menu-btn').querySelector('i').classList.replace('ph-x', 'ph-list');
                    }
                }
            }
        });
    });

    // 7. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) { // Show button after scrolling 400px
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 9. Typing Animation for Hero Section
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        new Typed('.typed-text', {
            strings: ['Study Abroad Dream', 'Global Career', 'International Future'],
            typeSpeed: 120,
            backSpeed: 80,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});
