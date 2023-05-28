const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passField = form.querySelector(".create-password");
const passInput = passField.querySelector(".password");
const cPassField = form.querySelector(".confirm-password");
const cPassInput = cPassField.querySelector(".cPassword");

// Email ვალიდაცია
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    console.log("Invalid email");
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// Password ვალიდაცია
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    console.log("Invalid password");
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// passord დადასტურება
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    console.log("Passwords don't match");
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// გადამოწმება
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    console.log("Registration successful");
    // რეგისტრაციის ლისტი
    const registrationData = {
      userName: "massa",
      firstName: "cotne",
      lastName: "shingazrdilovi",
      email: "cotne@gmail.com",
      privateNumber: "12345673452",
      password: "cotne1234",
      active: true
    };

    fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    })
      .then(response => response.json())
      .then(data => {
        // თუ ყველაფერი კარგად ჩაივლის მოხდება ეს
       window.location.href='youpath'
      })
      .catch(error => {
        // თუ მოხდება fail მოხდება ეს
        console.log("Registration failed", error);

      });
  } else {
    console.log("Registration failed");
}})
