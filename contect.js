window.onload = function() {
    const formRows = document.getElementById('form-rows');

    for (let i = 0; i < 8; i++) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><input type="text" id="name-${i}" name="name-${i}" placeholder="Name" required></td>
            <td><input type="tel" id="contact-${i}" name="contact-${i}" placeholder="Contact Number" required></td>
            <td><input type="email" id="email-${i}" name="email-${i}" placeholder="Email" required></td>
            <td><input type="text" id="student-id-${i}" name="student-id-${i}" placeholder="Student ID" required></td>
        `;
        
        formRows.appendChild(row);
    }

    loadSavedData();
};

document.getElementById('save-button').addEventListener('click', function() {
    const contactData = [];

    for (let i = 0; i < 8; i++) {
        const name = document.getElementById(`name-${i}`).value;
        const contact = document.getElementById(`contact-${i}`).value;
        const email = document.getElementById(`email-${i}`).value;
        const studentId = document.getElementById(`student-id-${i}`).value;

        if (name && contact && email && studentId) {
            contactData.push({ name, contact, email, studentId });
        }
    }
    if (contactData.length === 0) {
        alert("Please enter valid contact information.");
        return;
    }

    localStorage.setItem('contactData', JSON.stringify(contactData));

    loadSavedData();
});

function loadSavedData() {
    const savedData = JSON.parse(localStorage.getItem('contactData'));

    if (savedData && savedData.length > 0) {
        const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        dataTable.innerHTML = '';

        savedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.contact}</td>
                <td>${item.email}</td>
                <td>${item.studentId}</td>
            `;
            dataTable.appendChild(row);
        });
    } else {
        document.getElementById('data-table').getElementsByTagName('tbody')[0].innerHTML = `<tr><td colspan="4">No data available</td></tr>`;
    }
}
