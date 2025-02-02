// JavaScript untuk modal gallery
function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Toggle Hamburger Menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Close Menu When Clicking Outside
  document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });