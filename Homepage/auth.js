document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const message = document.getElementById('formMessage');
            const fields = form.querySelectorAll('input[required]');

            for (const field of fields) {
                if (!field.value.trim()) {
                    message.textContent = 'Please fill in all required fields.';
                    message.classList.remove('success');
                    message.classList.add('error', 'show');
                    return;
                }
            }

            if (form.id === 'signupForm') {
                const password = form.querySelector('input[name="password"]').value;
                const confirmPassword = form.querySelector('input[name="confirmPassword"]').value;

                if (password.length < 6) {
                    message.textContent = 'Password must be at least 6 characters long.';
                    message.classList.remove('success');
                    message.classList.add('error', 'show');
                    return;
                }

                if (password !== confirmPassword) {
                    message.textContent = 'Passwords do not match.';
                    message.classList.remove('success');
                    message.classList.add('error', 'show');
                    return;
                }
            }

            message.textContent = form.id === 'loginForm'
                ? 'Login successful. Redirecting...'
                : 'Account created successfully. Redirecting...';
            message.classList.remove('error');
            message.classList.add('success', 'show');

            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1200);
        });
    });
});
