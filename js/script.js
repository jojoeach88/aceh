const translations = {
    en: {
        home: "Home",
        products: "Products",
        contact: "Contact Us",
        heroTitle: "Indonesian Excellence, Globally Delivered.",
        heroSubtitle: "Your Gateway to Indonesia's Finest Commodities",
        aboutTitle: "About Us",
        aboutText: "My Export Co. specializes in connecting the rich agricultural bounty of Indonesia with markets around the globe. Our commitment to sustainable practices and meticulous quality control ensures that every product we export represents the best of Indonesian heritage and craftsmanship. We are dedicated to building lasting partnerships and delivering exceptional value to our customers.",
        productsTitle: "Our Products",
        coconutTitle: "Coconut",
        coconutDesc: "Sourced from the fertile volcanic soils of Indonesia, our coconuts are celebrated for their rich, nutty flavor and versatility. They are a staple for both culinary and cosmetic applications worldwide.",
        coconutPrice: 8.00,
        candlenutTitle: "Candlenut",
        candlenutDesc: "Known as the secret ingredient in many Southeast Asian dishes, our premium candlenuts add a creamy, nutty texture and richness. They are a must-have for authentic, flavorful cuisine.",
        candlenutPrice: 12.50,
        palmSugarTitle: "Palm Sugar",
        palmSugarDesc: "Harvested traditionally from the sap of palm trees, our palm sugar offers a deep caramel flavor with a subtle smokiness. It's an unrefined, natural sweetener perfect for confectionery, beverages, and cooking.",
        palmSugarPrice: 6.50,
        bayLeafTitle: "Bay Leaf",
        bayLeafDesc: "Our bay leaves are hand-picked for their robust, herbal aroma and flavor. They are an essential spice in soups, stews, and sauces, lending a subtle yet distinctive touch to your culinary creations.",
        bayLeafPrice: 9.00,
        coffeeTitle: "Coffee",
        coffeeDesc: "Experience the unique taste of Indonesian coffee, celebrated for its full body, complex aromas, and rich flavor profiles. From the fruity notes of Sumatra to the earthy tones of Java, our coffee offers an unforgettable experience for connoisseurs.",
        coffeePrice: 25.00,
        patchouliOilTitle: "Patchouli Oil",
        patchouliOilDesc: "Pure and potent, our patchouli oil is highly sought after for its distinctive musky, earthy fragrance. It's a key ingredient in perfumes, cosmetics, and aromatherapy, known for its calming and grounding properties.",
        patchouliOilPrice: 40.00,
        cinnamonTitle: "Cinnamon",
        cinnamonDesc: "Our premium cinnamon is sourced from the finest barks, offering a warm, sweet, and fragrant aroma. Perfect for baking, beverages, and savory dishes, it adds a touch of spice and sophistication.",
        cinnamonPrice: 15.00,
        orderBtn: "Order via WhatsApp",
        contactPageTitle: "Contact Us",
        contactFormName: "Full Name",
        contactFormEmail: "Email",
        contactFormSubject: "Subject",
        contactFormMessage: "Message",
        contactFormBtn: "Send Message",
        contactOfficeTitle: "Our Office",
        contactOfficeAddress: "Jl. Contoh No. 123, Jakarta, Indonesia",
        footerText: "© 2025 My Export Co. All Rights Reserved."
    },
    id: {
        home: "Beranda",
        products: "Produk",
        contact: "Hubungi Kami",
        heroTitle: "Keunggulan Indonesia, Dikirim ke Seluruh Dunia.",
        heroSubtitle: "Gerbang Anda Menuju Komoditas Terbaik Indonesia",
        aboutTitle: "Tentang Kami",
        aboutText: "My Export Co. mengkhususkan diri dalam menghubungkan kekayaan hasil pertanian Indonesia dengan pasar di seluruh dunia. Komitmen kami pada praktik berkelanjutan dan kontrol kualitas yang teliti memastikan setiap produk yang kami ekspor mewakili warisan dan keahlian terbaik Indonesia. Kami berdedikasi untuk membangun kemitraan yang langgeng dan memberikan nilai luar biasa kepada pelanggan kami.",
        productsTitle: "Produk Kami",
        coconutTitle: "Kelapa",
        coconutDesc: "Diambil dari tanah vulkanik Indonesia yang subur, kelapa kami terkenal karena rasanya yang kaya, gurih, dan serbaguna. Kelapa kami menjadi bahan pokok untuk aplikasi kuliner maupun kosmetik di seluruh dunia.",
        coconutPrice: 120000,
        candlenutTitle: "Kemiri",
        candlenutDesc: "Dikenal sebagai rahasia di balik banyak hidangan Asia Tenggara, kemiri premium kami memberikan tekstur yang kental dan rasa gurih yang kaya. Kemiri kami adalah bahan wajib untuk masakan otentik dan lezat.",
        candlenutPrice: 180000,
        palmSugarTitle: "Gula Merah",
        palmSugarDesc: "Dipanen secara tradisional dari getah pohon palem, gula merah kami menawarkan rasa karamel yang mendalam dengan aroma asap yang lembut. Ini adalah pemanis alami tanpa pemurnian yang sempurna untuk kembang gula, minuman, dan masakan.",
        palmSugarPrice: 95000,
        bayLeafTitle: "Daun Salam",
        bayLeafDesc: "Daun salam kami dipetik dengan tangan untuk aroma dan rasa herbalnya yang kuat. Daun salam merupakan bumbu penting dalam sup, semur, dan saus, memberikan sentuhan halus namun khas pada kreasi kuliner Anda.",
        bayLeafPrice: 130000,
        coffeeTitle: "Kopi",
        coffeeDesc: "Rasakan cita rasa unik kopi Indonesia, yang terkenal dengan tekstur tebal, aroma kompleks, dan profil rasa yang kaya. Dari catatan buah Sumatra hingga nada bersahaja dari Jawa, kopi kami menawarkan pengalaman tak terlupakan bagi para penikmatnya.",
        coffeePrice: 350000,
        patchouliOilTitle: "Minyak Nilam",
        patchouliOilDesc: "Minyak nilam kami yang murni dan kuat sangat dicari karena aromanya yang khas dan bersahaja. Ini adalah bahan utama dalam parfum, kosmetik, dan aromaterapi, dikenal karena sifatnya yang menenangkan dan menenteramkan.",
        patchouliOilPrice: 580000,
        cinnamonTitle: "Kayu Manis",
        cinnamonDesc: "Kayu manis premium kami bersumber dari kulit kayu terbaik, menawarkan aroma yang hangat, manis, dan harum. Cocok untuk membuat kue, minuman, dan hidangan gurih, kayu manis kami menambahkan sentuhan rempah dan kecanggihan.",
        cinnamonPrice: 210000,
        orderBtn: "Pesan via WhatsApp",
        contactPageTitle: "Hubungi Kami",
        contactFormName: "Nama Lengkap",
        contactFormEmail: "Email",
        contactFormSubject: "Subjek",
        contactFormMessage: "Pesan",
        contactFormBtn: "Kirim Pesan",
        contactOfficeTitle: "Kantor Kami",
        contactOfficeAddress: "Jl. Contoh No. 123, Jakarta, Indonesia",
        footerText: "© 2025 My Export Co. Semua Hak Dilindungi."
    }
};

let currentLang = 'en';

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function updateContent() {
    const lang = translations[currentLang];
    
    // Perbarui semua elemen dengan atribut data-key kecuali harga
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (lang[key] && !key.includes('Price')) {
            element.textContent = lang[key];
        }
    });

    // Perbarui harga produk dengan format mata uang
    if (document.getElementById('products-page')) {
        const products = [
            'coconut', 'candlenut', 'palmSugar', 'bayLeaf',
            'coffee', 'patchouliOil', 'cinnamon'
        ];
        products.forEach(product => {
            const priceElement = document.querySelector(`.product-card h4[data-key='${product}Price']`);
            if (priceElement) {
                const price = translations[currentLang][`${product}Price`];
                let formattedPrice;
                if (currentLang === 'en') {
                    formattedPrice = `$${price.toFixed(2)} / kg`;
                } else {
                    formattedPrice = `Rp ${price.toLocaleString('id-ID')} / kg`;
                }
                priceElement.textContent = formattedPrice;
            }
        });
    }

    // Perbarui placeholder form
    if (document.getElementById('name')) {
        document.getElementById('name').placeholder = lang.contactFormName;
        document.getElementById('email').placeholder = lang.contactFormEmail;
        document.getElementById('subject').placeholder = lang.contactFormSubject;
        document.getElementById('message').placeholder = lang.contactFormMessage;
    }

    // Perbarui teks switch bahasa
    document.querySelector('.lang-switch').textContent = currentLang === 'en' ? 'EN / ID' : 'ID / EN';

    // Perbarui teks WhatsApp
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.textContent = lang.orderBtn;
    });
}

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('lang', currentLang);
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    currentLang = localStorage.getItem('lang') || 'en';
    updateContent();
});
