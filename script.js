var header = document.querySelector("header");

window.addEventListener("scroll", function(e){
    header.classList.toggle("header-active", window.scrollY >= header.offsetHeight - 3)
})