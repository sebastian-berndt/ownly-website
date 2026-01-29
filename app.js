// Supabase Configuration
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://ldabzqoxgogwxixicpml.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_262uXsz-j2gr1HZA_1ukSA_m2Z1_Q39';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// DOM Elements
const form = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const messageEl = document.getElementById('message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show message to user
function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type} show`;

    // Auto-hide after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            messageEl.className = 'message';
        }, 5000);
    }
}

// Validate email format
function validateEmail(email) {
    if (!email || email.trim() === '') {
        return { valid: false, message: 'Please enter your email address.' };
    }
    if (!emailRegex.test(email)) {
        return { valid: false, message: 'Please enter a valid email address.' };
    }
    return { valid: true };
}

// Handle form submission
async function handleSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim().toLowerCase();

    // Validate email
    const validation = validateEmail(email);
    if (!validation.valid) {
        showMessage(validation.message, 'error');
        return;
    }

    // Disable form while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';

    try {
        // Check if Supabase is configured
        if (SUPABASE_URL === 'https://your-project-id.supabase.co') {
            // Demo mode - simulate success
            await new Promise(resolve => setTimeout(resolve, 1000));
            showMessage('Thanks for joining! (Demo mode - configure Supabase for real submissions)', 'success');
            emailInput.value = '';
        } else {
            // Insert email into waitlist table
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                // Handle duplicate email
                if (error.code === '23505') {
                    showMessage('This email is already on the waitlist!', 'error');
                } else {
                    throw error;
                }
            } else {
                showMessage('Thanks for joining the waitlist! We\'ll be in touch soon.', 'success');
                emailInput.value = '';
            }
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Something went wrong. Please try again later.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Join Waitlist';
    }
}

// Event listeners
form.addEventListener('submit', handleSubmit);

// Clear error message when user starts typing
emailInput.addEventListener('input', () => {
    if (messageEl.classList.contains('error')) {
        messageEl.className = 'message';
    }
});
