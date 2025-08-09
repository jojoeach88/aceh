// script.js - Dropdown bahasa & WhatsApp
document.getElementById('language').addEventListener('change', function () {
    const lang = this.value;
    if (lang === 'en') {
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    } else if (lang === 'id') {
        document.querySelectorAll('[data-id]').forEach(el => {
            el.textContent = el.getAttribute('data-id');
        });
    }
});
