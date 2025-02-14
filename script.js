document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const event = document.getElementById('event').value;

    if (name && email && event) {
        alert(`Thank you, ${name}! You have successfully registered for ${event}.`);
        document.getElementById('registration-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});