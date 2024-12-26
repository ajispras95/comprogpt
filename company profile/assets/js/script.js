// Placeholder script.js for future functionalities or interactivity.
console.log("Website loaded successfully!");

// Script untuk transisi halus ketika scroll ke bagian layanan
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Script untuk animasi transisi hover pada service card
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  
// script.js

// Mengirimkan form dengan alert ketika tombol submit diklik
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dikirimkan secara default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Pesan Anda telah dikirimkan.\nEmail: ${email}\nPesan: ${message}`);
});

document.getElementById('hoverButton').addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1)';
  this.style.transition = 'transform 0.3s ease';
});

document.getElementById('hoverButton').addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
});