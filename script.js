const burgir = document.querySelector(".burgir__menu") 
const header = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    header.classList.toggle("open");
})