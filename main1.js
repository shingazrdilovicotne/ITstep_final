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




