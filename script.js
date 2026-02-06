document.addEventListener('DOMContentLoaded', () => {

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

    // --- Portal Modal Handling ---
    const modal = document.getElementById('cleaner-modal');
    const openBtn = document.getElementById('portal-login-btn');
    const closeBtn = document.querySelector('.close-modal');

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close modal if clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Cleaner Login ---
    const loginForm = document.getElementById('login-form');
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Mock Login (Any input works)
            const btn = loginForm.querySelector('button');
            btn.innerText = 'Verifying...';

            setTimeout(() => {
                loginView.style.display = 'none';
                dashboardView.style.display = 'block';
            }, 1000);
        });
    }

    // --- Proof Upload ---
    const submitProofBtn = document.getElementById('submit-proof');
    if (submitProofBtn) {
        submitProofBtn.addEventListener('click', () => {
            const fileInput = document.getElementById('proof-upload');
            if (fileInput.files.length === 0) {
                alert('Please select a photo to upload.');
                return;
            }

            // Mock Upload
            submitProofBtn.innerText = 'Uploading...';
            setTimeout(() => {
                alert('Success! Proof of visit uploaded. Geotag: 33.7490° N, 84.3880° W');

                // Reset State
                modal.classList.remove('active');

                // Reset views after a delay for next time (optional)
                setTimeout(() => {
                    dashboardView.style.display = 'none';
                    loginView.style.display = 'block';
                    loginForm.reset();
                    submitProofBtn.innerText = 'Complete Visit';
                }, 500);
            }, 1500);
        });
    }
});
