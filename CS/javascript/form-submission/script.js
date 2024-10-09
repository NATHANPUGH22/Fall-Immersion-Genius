const form = document.getElementById('submission-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Handle form submission event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission success
    confirmationMessage.textContent = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;

    // Clear form after submission
    form.reset();
});
