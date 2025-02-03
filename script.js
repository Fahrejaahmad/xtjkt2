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


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Mencegah menu klik kanan
});

document.addEventListener('copy', function(e) {
    e.preventDefault(); // Mencegah salin teks
});

document.addEventListener('cut', function(e) {
    e.preventDefault(); // Mencegah potong teks
});


document.addEventListener('keydown', function(e) {
  if (e.keyCode == 123) { // F12
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl + Shift + I
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { // Ctrl + Shift + J
      e.preventDefault();
  }
  if (e.ctrlKey && e.keyCode == 85) { // Ctrl + U
      e.preventDefault();
  }
});


document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
      alert('Jangan Gitu atau mau di sebarin Muka kamu?!!!!');
  }
});