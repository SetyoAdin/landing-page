// Efek mengetik untuk teks header
const animatedText = document.getElementById("animated-text");
const text = "Halo, Saya Setyo Adi N";
let index = 0;

// Fungsi efek mengetik
function typeEffect() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Kecepatan mengetik (dalam milidetik)
  } else {
    // Tambahkan kursor berkedip setelah teks selesai
    animatedText.innerHTML = `${text}<span class="cursor">|</span>`;
  }
}

// Jalankan efek mengetik
typeEffect();

// Tindakan saat tombol "Sapa Saya" ditekan
document.getElementById("contact-button").addEventListener("click", function () {
  alert("Terima kasih sudah menyapa!");
});
