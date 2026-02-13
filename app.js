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

// cursor

const dot = document.querySelector(".cursor__dot");

window.addEventListener("mousemove", function(e){
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
})


const hoverTargets = document.querySelectorAll(
  "button, a, .feature__card, .pricing__card"
);

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    dot.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    dot.classList.remove("hover");
  });
});

if ("ontouchstart" in window) {
  dot.style.display = "none";
}


const section = document.querySelector(".cta");

section.addEventListener("mousemove", (e)=>{
  dot.classList.add("section")
})

section.addEventListener("mouseleave", (e)=>{
  dot.classList.remove("section")
})


// scrollbar 

const progress = document.querySelector(".scroll-progress__bar");

window.addEventListener("scroll", ()=>{
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop/docHeight) * 100;

  progress.style.width = scrollPercent + "%"
})