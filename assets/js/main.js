// Load header
document.addEventListener("DOMContentLoaded", () => {
    fetch("partials/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

// Language Switcher
function changeLanguage(lang) {
    if (lang === "en") {
        alert("Switch to English content");
    } else {
        alert("Beralih ke bahasa Indonesia");
    }
}
