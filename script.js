// Get elements from index.html
const registerForm = document.querySelector("#register");
const retrieveForm = document.querySelector("#result");
const retrieveButton = document.querySelector("#submit");

// Add an event listener
registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the default form submission behavior
  // Get values from input fields in html
  const name = document.querySelector("#name").value;
  const height = document.querySelector("#height").value;
  const mass = document.querySelector("#mass").value;
  const age = document.querySelector("#age").value;
  const date = document.querySelector("#date").value;
  // Assign all input values to one variable for easy posting
  const data = {
    name,
    height,
    mass,
    age,
    date,
  };
  // Post details of new patient to the db.json
  fetch("http://localhost:3000/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});




  const inputForm = document.querySelector(`#form`);
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/patients/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const nameSpan = document.querySelector("#rname");
const heightSpan = document.querySelector("#rheight");
const massSpan = document.querySelector("#rmass");
const ageSpan = document.querySelector("#rage");
const dateSpan = document.querySelector("#rdate");
heightSpan.innerText = data.height;
massSpan.innerText = data.mass;
ageSpan.innerText = data.age;
dateSpan.innerText = data.date;
nameSpan.innerText = data.name;
      });
  });



