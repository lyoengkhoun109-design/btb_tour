
// 1. LOAD NAVBAR

document.getElementById("nav-container").innerHTML = `

    <nav class="navbar">

        <a href="/html/home.html" data-i18n="home">Home</a>

        <a href="/html/place.html" data-i18n="place">Place</a>

        <a href="/html/hotels.html" data-i18n="hotels">Hotels</a>

        <a href="/html/food.html" data-i18n="food">Food</a>

        <a href="/html/service.html" data-i18n="service">Service</a>

        <a href="/html/battambang.html" data-i18n="battambang">
            Battambang
        </a>

        <a href="/html/languages.html" data-i18n="languages">
            Languages
        </a>

    </nav>

`;


// 2. HIGHLIGHT CURRENT PAGE

const currentPage = window.location.pathname;

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.pathname === currentPage) {

        link.classList.add("active");

    }

});


// 3. APPLY SAVED LANGUAGE

if (typeof applyLanguage === "function") {

    applyLanguage(getLanguage());

}
