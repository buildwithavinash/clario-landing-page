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

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {threshold : 0.2});

reveals.forEach(el => revealObserver.observe(el));

