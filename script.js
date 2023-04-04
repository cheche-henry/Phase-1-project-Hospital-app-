// Get elements from index.html
const registerForm = document.querySelector('#register');
const resultForm = document.querySelector('#result');
const rname = document.querySelector('#rname');
const rheight = document.querySelector('#rheight');
const rmass = document.querySelector('#rmass');
const rage = document.querySelector('#rage');
const rdate = document.querySelector('#rdate');
// Add an event listener
registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the default form submission behavior
    // Get values from input fields in html
    const name = document.querySelector('#name').value;
    const height = document.querySelector('#height').value;
    const mass = document.querySelector('#mass').value;
    const age = document.querySelector('#age').value;
    const date = document.querySelector('#date').value;
  // Assign all input values to one variable for easy posting
    const data = {
      name,
      height,
      mass,
      age,
      date
    };
  // Post details of new patient to the db.json
    fetch('http://localhost:3000/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  });
  
  