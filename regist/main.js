const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");
//email validation
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //არასწორი კლასის დამატება, თუ ელ.ფოსტის მნიშვნელობა არ შეესაბამება ელფოსტის ნიმუშს
  }
  emailField.classList.remove("invalid"); // არასწორი კლასის ამოღება, თუ ელ.ფოსტის მნიშვნელობა ემთხვევა emaiPattern-ს
}
// პაროლის დამალვა და ჩვენება
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); 
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});
// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");//არასწორი კლასის დამატება, თუ პაროლის შეყვანის მნიშვნელობა არ ემთხვევა passPattern-ს
  }
  passField.classList.remove("invalid"); //არასწორი კლასის ამოღება, თუ პაროლის შეყვანის მნიშვნელობა შეესაბამება passPattern-ს
}
// პაროლის დადასტურება
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}
// გამოძახების ფუნქცია Form Sumbit-ზე
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkEmail();
  createPass();
  confirmPass();
  //გამოძახების ფუნქცია კლავიშზე
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);
  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        "userName": "cotne",
    "firstName": "cotne",
    "lastName": "shingazrdilovi",
    "email": "cotne@gmail.com",
    "privateNumber": "12345673452",
    "password": "cotne1234",
    "active": true})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))