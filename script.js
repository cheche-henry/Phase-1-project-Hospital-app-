// Get elements from index.html
const registerForm = document.querySelector("#register");
const retrieveForm = document.querySelector("#result");
const retrieveButton = document.querySelector("#submit");
const articleForm = document.querySelector("#write")
const showall = document.querySelector("#showall")


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
  fetch("https://hospitalapp.onrender.com/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      alert(`Patient ${data.name} registered successfully!`);
    })
    .catch((error) => console.error(error));
});




const inputForm = document.querySelector(`#form`);
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input#searchByID");

  fetch(`https://hospitalapp.onrender.com/patients/${input.value}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(`Could not find patient with ID ${input.value}`);
      }
    })
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

    })
    .catch((error) => {
      console.error('Error:', error);

    });
});


const erase = document.querySelector('#delete');

erase.addEventListener('click', function () {

  const input = document.querySelector('input#searchByID');
  fetch(`https://hospitalapp.onrender.com/patients/${input.value}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        alert(`Patient with ID ${input.value} deleted successfully`);
      } else {
        throw new Error(`Could not delete patient with ID ${input.value}`);
      }
    })
    .catch((error) => console.error('Error:', error));
});

articleForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the default form submission behavior
  // Get values from input fields in html
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const image = document.querySelector("#image").value;
  const article = document.querySelector("#article").value;


  // Assign all input values to one variable for easy posting
  const data = {
    title,
    author,
    image,
    article,


  };
  // Post details of new patient to the db.json
  fetch("https://hospitalapp.onrender.com/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      alert(`Article posted successfully!`);
    })
    .catch((error) => console.error(error));
});
// Get the container element from index.html
const container = document.querySelector("#articles-container");

fetch("https://hospitalapp.onrender.com/articles")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the articles and create a new element for each item
    data.forEach((article) => {
      // Create a new div element for each article
      const articleDiv = document.createElement("div");

      // Set the class name for the div element
      articleDiv.className = "article";

      // Add the title and image to the div element
      articleDiv.innerHTML = `
        
          
          <div class="test" style="background-image:url(${article.image})">
          <h3>${article.title}</h3>
          <p style="color:black;">${article.article}</p>
          </div>
        `;

      // Add the new div element to the container
      showall.appendChild(articleDiv);
    });
  })
  .catch((error) => console.error(error));

