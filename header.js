// Contoh isi header.js
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("header");
  header.innerHTML = `
  <header class="site-header">
    <div class="logo">
      <img src="assets/logo.png" alt="Logo Perusahaan" />
      <span>Perusahaan Kami</span>
    </div>
    <button class="menu-toggle" id="menuToggle">☰</button>
    <nav class="main-nav" id="mainNav">
      <ul>
        <li><a href="index.html" class="active">Beranda</a></li>
        <li><a href="tentang.html">Tentang</a></li>
        <li><a href="produk.html">Produk</a></li>
        <li><a href="kontak.html">Kontak</a></li>
      </ul>
    </nav>
  </header>`;

  // Toggle menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });

  // Untuk active link sesuai halaman
  const links = mainNav.querySelectorAll("a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if(link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
