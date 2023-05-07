let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let name1 = document.getElementById("name1")
let title = document.getElementById("title")



btn.onclick = function(){
    name1.style.maxHeight = "0";
    title.innerHTML = "Sign In"
    btn.classList.add("disable")
    btn2.classList.remove("disable")
}
btn2.onclick = function(){
    name1.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"
    btn2.classList.remove("disable")
    btn.classList.add("disable")

}