let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let name1 = document.getElementById("name1")
let title = document.getElementById("title")



btn.onclick = function(){
  
    title.innerHTML = "Sign In"
    btn.classList.add("disable")
    btn2.classList.remove("disable")
}
btn2.onclick = function(){
    title.innerHTML = "Sign Up"
    btn.classList.remove("disable")
    btn2.classList.add("disable")

}


fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        "userName": "keti4",
    "firstName": "keti4",
    "lastName": "ketelauri4",
    "email": "keti4@gmail.com",
    "privateNumber": "12345678914",
    "password": "123",
    "active": true})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))

