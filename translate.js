const translations = {
    id: {
        menu_home: "Beranda",
        menu_about: "Tentang Kami",
        menu_products: "Produk",
        menu_contact: "Kontak",
        home_text: "Selamat datang di perusahaan kami!"
    },
    en: {
        menu_home: "Home",
        menu_about: "About Us",
        menu_products: "Products",
        menu_contact: "Contact",
        home_text: "Welcome to our company!"
    }
};

function initTranslate() {
    const select = document.getElementById("languageSelect");
    select.addEventListener("change", function () {
        applyTranslation(this.value);
    });
}

function applyTranslation(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });
}
