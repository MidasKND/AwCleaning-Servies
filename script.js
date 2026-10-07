document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Carousel Logic ---
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        setInterval(() => {
            // Remove active from current
            slides[currentSlide].classList.remove('active');

            // Move to next
            currentSlide = (currentSlide + 1) % totalSlides;

            // Add active to next
            slides[currentSlide].classList.add('active');
        }, 5000); // 5 seconds per slide
    }

    // --- Quote Form Handling ---
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                pmName: document.getElementById('pm-name').value,
                contactName: document.getElementById('contact-name').value,
                email: document.getElementById('email').value,
                type: document.getElementById('property-type').value,
                budget: document.getElementById('budget').value,
                details: document.getElementById('details').value
            };

            // Simulate API call / Submission
            const btn = quoteForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${formData.contactName}! Your request for ${formData.pmName} has been received. We will contact you at ${formData.email} shortly.`);
                quoteForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- Multi-Role Portal Tab Switching & Interactions ---
    const tabBtns = document.querySelectorAll('.portal-tab-btn');
    const rolePanels = document.querySelectorAll('.portal-role-panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Update active tab button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update active panel
                rolePanels.forEach(panel => {
                    if (panel.id === targetTab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- Client Portal Login & Demo ---
    const clientForm = document.getElementById('client-login-form');
    const clientDash = document.getElementById('client-dashboard-view');
    const demoClientBtn = document.getElementById('demo-client-btn');

    if (clientForm) {
        clientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = clientForm.querySelector('button[type="submit"]');
            btn.innerText = 'Authenticating...';
            setTimeout(() => {
                clientDash.style.display = 'block';
                btn.innerText = 'Sign In as Client';
                clientDash.scrollIntoView({ behavior: 'smooth' });
            }, 800);
        });
    }

    if (demoClientBtn) {
        demoClientBtn.addEventListener('click', () => {
            clientDash.style.display = 'block';
            clientDash.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- Staff / Employee Portal Login & Demo ---
    const staffForm = document.getElementById('staff-login-form');
    const staffDash = document.getElementById('staff-dashboard-view');
    const demoStaffBtn = document.getElementById('demo-staff-btn');

    if (staffForm) {
        staffForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = staffForm.querySelector('button[type="submit"]');
            btn.innerText = 'Verifying Passcode...';
            setTimeout(() => {
                staffDash.style.display = 'block';
                btn.innerText = 'Cleaner Check-In';
                staffDash.scrollIntoView({ behavior: 'smooth' });
            }, 800);
        });
    }

    if (demoStaffBtn) {
        demoStaffBtn.addEventListener('click', () => {
            staffDash.style.display = 'block';
            staffDash.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Staff Geotagged Visit Submit
    const staffProofBtn = document.getElementById('staff-submit-proof');
    if (staffProofBtn) {
        staffProofBtn.addEventListener('click', () => {
            const fileInput = document.getElementById('staff-proof-upload');
            if (fileInput && fileInput.files.length === 0) {
                alert('Please attach/select a photo of the completed work.');
                return;
            }
            staffProofBtn.innerText = 'Geotagging & Uploading...';
            setTimeout(() => {
                alert('Visit Submitted Successfully!\nGeotag: 33.7490° N, 84.3880° W\nTime: ' + new Date().toLocaleTimeString());
                staffProofBtn.innerText = 'Submit Geotagged Visit';
                if (fileInput) fileInput.value = '';
            }, 1200);
        });
    }

    // --- Admin / Owner Portal Login & Demo ---
    const adminForm = document.getElementById('admin-login-form');
    const adminDash = document.getElementById('admin-dashboard-view');
    const demoAdminBtn = document.getElementById('demo-admin-btn');

    if (adminForm) {
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = adminForm.querySelector('button[type="submit"]');
            btn.innerText = 'Authenticating Admin Key...';
            setTimeout(() => {
                adminDash.style.display = 'block';
                btn.innerText = 'Sign In to Executive Dashboard';
                adminDash.scrollIntoView({ behavior: 'smooth' });
            }, 800);
        });
    }

    if (demoAdminBtn) {
        demoAdminBtn.addEventListener('click', () => {
            adminDash.style.display = 'block';
            adminDash.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Sign Out Buttons
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (clientDash) clientDash.style.display = 'none';
            if (staffDash) staffDash.style.display = 'none';
            if (adminDash) adminDash.style.display = 'none';
            alert('Signed out successfully.');
        });
    });
});
