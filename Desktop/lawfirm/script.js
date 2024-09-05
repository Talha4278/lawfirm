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
    const form = document.getElementById('contactForm'); // Declare `form` once
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
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form); // Capture form data
        const data = {}; // Create an empty object to store form data
        
        // Loop through formData and populate the 'data' object
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form Submitted', data); // Log form data for debugging

        try {
            // Send the form data to the server using a POST request
            const response = await fetch('http://localhost:3005/clients-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Send the form data as JSON
            });

            if (response.ok) {
                alert('Thank you for contacting us. We will get back to you soon.');
                form.reset(); // Reset the form fields after submission
            } else {
                alert('Error submitting data. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form.');
        }
    });
});
