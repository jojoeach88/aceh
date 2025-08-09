// Load header from separate file
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // Language selector action
    document.getElementById('languageSelect').addEventListener('change', function() {
      const lang = this.value;
      alert(`Bahasa diganti ke: ${lang}`);
      // Tambahkan logika translate di sini jika ingin dinamis
    });
  });
