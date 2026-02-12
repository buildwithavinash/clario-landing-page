let hamMenu = document.querySelector(".nav__ham-menu");
let navbar = document.querySelector(".navbar");

hamMenu.addEventListener("click", function(){
    navbar.classList.toggle("active");
})

const navLinks = document.querySelectorAll(".nav__links li");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

