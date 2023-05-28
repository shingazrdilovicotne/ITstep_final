const form = document.querySelector("form");
const emailInput = form.querySelector("input[type='email']");
const passwordInput = form.querySelector("input[type='password']");


function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const requestBody = {
    email: email,
    password: password
  };


  fetch("https://kketelauri-001-site1.gtempurl.com/api/user/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
  window.location.href = "index.html"
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log("Login successful");
      } else {
        console.log("Login failed");
           }
    })
    .catch(error => {
      console.log("An error occurred:", error);
     
    });
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  login();
});
