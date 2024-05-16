document.addEventListener("DOMContentLoaded", function() {
    const text = "Fullstack Developer";
    const element = document.getElementById("typed-text");
    
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
    }

    type();
});


function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || subject.trim()===''||message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulating form submission (replace with actual submission logic)
    setTimeout(() => {
        document.getElementById('contact-form').reset();
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('success-message').classList.add('hidden');
        }, 3000); // Hide success message after 3 seconds
    }, 1000); // Simulate server response delay
}
