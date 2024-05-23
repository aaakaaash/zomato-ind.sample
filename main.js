// mobile menu
let mobileMenuIcon = document.querySelector("header .fa-bars")
let menu = document.querySelector("header .navbar")
mobileMenuIcon.addEventListener("click",function(){
    menu.classList.add("open");
})
mobileMenuIcon.addEventListener("click",function(){
    mobileMenuIcon.classList.add("fa-bars-active");
})
mobileMenuIcon.querySelector("header .fa-x")
{
    mobileMenuIcon.addEventListener("click",function(){
        mobileMenuIcon1.classList.add("fa-x-active");
    })  
}
let mobileMenuIcon1 = document.querySelector("header .fa-x")
mobileMenuIcon1.addEventListener("click", function(){
menu.classList.remove("open")
mobileMenuIcon1.classList.remove("fa-x-active")
}
)

mobileMenuIcon1.querySelector("header .fabars")
mobileMenuIcon1.addEventListener("click",function(){
    mobileMenuIcon.classList.remove("fa-bars-active");
})
