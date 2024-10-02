/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    // Send email using EmailJS
    emailjs.sendForm('service_j4i2j8n', 'template_2ko4xak', contactForm, 'OrFDFYstQbo_jj9xT')
    .then(() => {
        // Display success message to user
        contactMessage.textContent = 'Message sent successfully!';
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear the form fields
        contactForm.reset();
    })
    .catch((error) => {
        // Display error message to user
        contactMessage.textContent = 'Failed to send message. Please try again later.';
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Log the error details in the console for debugging
        console.error('EmailJS Error:', error);
    });
};

// Attach the sendEmail function to the form's submit event
contactForm.addEventListener('submit', sendEmail);
