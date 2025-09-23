// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
if(localStorage.getItem("theme") === "light"){
  body.classList.add("light-theme"); body.classList.remove("dark-theme"); themeToggle.checked = true;
}else{ body.classList.add("dark-theme"); themeToggle.checked = false; }

themeToggle.addEventListener("change", ()=>{
  if(themeToggle.checked){
    body.classList.remove("dark-theme"); body.classList.add("light-theme");
    localStorage.setItem("theme","light");
  } else {
    body.classList.remove("light-theme"); body.classList.add("dark-theme");
    localStorage.setItem("theme","dark");
  }
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar blur on scroll
window.addEventListener("scroll", ()=>{
  const navbar = document.querySelector(".navbar");
  if(window.scrollY>50){ navbar.classList.add("scrolled"); }
  else{ navbar.classList.remove("scrolled"); }
});

// Owl Carousel for Projects
$(document).ready(function(){
  $("#projectsCarousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});


// Contact Form Simulation
const contactForm = document.getElementById("contactForm");
const contactToast = document.getElementById("contactToast");
if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const toast = new bootstrap.Toast(contactToast);
    toast.show();
    contactForm.reset();
  });
}

// Skill Bars Animation on scroll
const skillSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".skill-bar");
function animateSkillBars(){
  skillBars.forEach(bar=>{
    bar.style.width = bar.getAttribute("data-skill")+"%";
  });
}
if(skillSection){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ animateSkillBars(); observer.disconnect(); }
    });
  }, {threshold:0.3});
  observer.observe(skillSection);
}

// Initialize AOS
AOS.init({
  duration: 1200,
  once: true
});
