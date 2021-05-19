let hamburger = document.getElementById("hamburger");
let nav_links = document.querySelector(".nav_links");


hamburger.addEventListener("click", () => {
    nav_links.classList.toggle("show");
});