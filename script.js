document.getElementById("language-select").addEventListener("change", function() {
  let lang = this.value;
  if (lang === "id") {
    alert("Bahasa diubah ke Indonesia");
    // Di sini bisa ditambahkan logika terjemahan
  } else if (lang === "en") {
    alert("Language changed to English");
    // Di sini bisa ditambahkan logika terjemahan
  }
});
