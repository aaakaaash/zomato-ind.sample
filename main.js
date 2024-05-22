// mobile menu
let mobileMenuIcon = document.querySelector("header .fa-bars")
let menu = document.querySelector("header .navbar")
mobileMenuIcon.addEventListener("click",function(){
    menu.classList.toggle("open");
})
mobileMenuIcon.addEventListener("click",function(){
    this.classList.toggle("fa-bars-active");
})