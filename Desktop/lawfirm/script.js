function showContent(sectionId) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content section
    document.getElementById(sectionId).style.display = 'block';
}
// JavaScript for styling and form functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Style inputs and textarea
    inputs.forEach(input => {
        input.style.transition = 'all 0.3s ease';
        input.addEventListener('focus', () => {
            input.style.borderColor = '#007bff';
            input.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.3)';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ddd';
            input.style.boxShadow = 'none';
        });
    });

    // Add form submission event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form Submitted', data);

        // You can handle form data here, such as sending it to a server
        
        // Provide feedback to the user
        alert('Thank you for contacting us. We will get back to you soon.');
        form.reset(); // Reset the form fields
    });
});