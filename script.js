// Efek mengetik untuk teks header
const animatedText = document.getElementById("animated-text");
const text = "Halo, Saya Setyo Adi N";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    animatedText.innerHTML = `${text}<span class="cursor"></span>`;
  }
}

// Start typing effect when page loads
window.addEventListener('load', typeEffect);

// Contact button action
document.getElementById("contact-button").addEventListener("click", function() {
  alert("Terima kasih sudah menyapa!");
});