document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    const result = `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Address: ${address}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
    `;
  
    document.getElementById('registrationResult').innerHTML = result;
    document.getElementById('registrationForm').style.display = 'none';
  });
  