
function loadHeader() {
    const header = `
    <header>
        <img src="https://drive.google.com/uc?export=view&id=1IN-Z9HGE5EoycXCFEkxU5u7iSzBnxbsR" alt="Company Logo">
        <h1>Nama Perusahaan</h1>
        <nav>
            <a href="index.html">Company Profile</a>
            <a href="produk.html">Produk</a>
            <a href="pesan.html">Pesan</a>
        </nav>
        <select class="lang-select" onchange="changeLanguage(this.value)">
            <option value="id">Bahasa Indonesia</option>
            <option value="en">English</option>
        </select>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', header);
}

function changeLanguage(lang) {
    alert("Bahasa diubah ke: " + lang);
}

document.addEventListener("DOMContentLoaded", loadHeader);
