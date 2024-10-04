const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click",()=> menuOpenButton.click())

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('header');
    
    if (window.scrollY > 15) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
