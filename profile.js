// Get references to the form and profile info container
const form = document.getElementById('profile-form');
const profileInfoContainer = document.getElementById('profile-info');

// Load saved profile data (if any) when the page loads
window.onload = function() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
        displayProfile(savedProfile);
    }
};

// Save the profile data when the form is submitted
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form inputs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;

    // Create a profile object
    const profile = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        phone: phone
    };

    localStorage.setItem('profile', JSON.stringify(profile));

    displayProfile(profile);
});

function displayProfile(profile) {
    profileInfoContainer.innerHTML = `
        <h3>Saved Profile:</h3>
        <p><strong>First Name:</strong> ${profile.firstName}</p>
        <p><strong>Last Name:</strong> ${profile.lastName}</p>
        <p><strong>Email ID:</strong> ${profile.email}</p>
        <p><strong>Date of Birth:</strong> ${profile.dob}</p>
        <p><strong>Phone Number:</strong> ${profile.phone}</p>
    `;
}
