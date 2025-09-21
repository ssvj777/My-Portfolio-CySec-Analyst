
//Loading Screen Script 

window.addEventListener('load',()=>{
  const loading = document.getElementById("loading");
  setTimeout(()=>{
    loading.classList.add('hidden');
  },700)
})

        // Scroll to Top Button

        const scrollTop = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });

        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        

//Navbar Script
const navbarScroll = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 28) {
    navbarScroll.classList.add("scrolled");
  } else {
    navbarScroll.classList.remove("scrolled");
  }
});

let sideNavbar = document.querySelector(".sideNavbar");
let showToggle = document.querySelector(".showNavbar");
let showCloseBtn = document.querySelector(".closeNavbar");

document.querySelector(".togglebtn").addEventListener("click", function () {
  sideNavbar.style.left = "0";
  showToggle.style.display = "none";
  showCloseBtn.style.display = "flex";
  navbarScroll.classList.add("scrolled");
});

document.querySelector(".xMark").addEventListener("click", function () {
  sideNavbar.style.left = "-70%";
  showToggle.style.display = "flex";
  showCloseBtn.style.display = "none";
});

// Close the menu when a link is clicked

document.addEventListener("DOMContentLoaded", function () {
  const listcontents = document.querySelectorAll(".sideNavbar a");

  listcontents.forEach(function (listcontent) {
    listcontent.addEventListener("click", function () {
      sideNavbar.style.left = "-70%";
      showToggle.style.display = "flex";
      showCloseBtn.style.display = "none";
    });
  });
});

// animation Script for display
const animationScript = ["Front-End Developer", "React Developer"];

// Typing animation script start
new Typed(".typing", {
  strings: animationScript,
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

new Typed(".typing2", {
  strings: animationScript,
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Typing animation for Cyber Security
new Typed(".msc", {
  strings: ["Cyber Security"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Typing animation for Computer Science
new Typed(".bsc", {
  strings: ["Computer Science"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById("year").textContent = currentYear;
