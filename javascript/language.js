
// 1. GET SAVED LANGUAGE

function getLanguage() {

    return localStorage.getItem("btb_language") || "en";

}


// 2. APPLY LANGUAGE

function applyLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    // Save language
    localStorage.setItem("btb_language", language);

    // Change HTML language
    document.documentElement.lang = language;

    // Translate text
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key] !== undefined) {

            element.textContent = translations[language][key];

        }

    });

}


// 3. CHANGE LANGUAGE

function changeLanguage(language) {

    // Save selected language
    localStorage.setItem("btb_language", language);

    // Go back to previous page
    const previousPage = sessionStorage.getItem("btb_previous_page");

    if (
        previousPage &&
        previousPage !== "/html/languages.html"
    ) {

        window.location.href = previousPage;

    } else {

        window.location.href = "/html/home.html";

    }

}


// 4. REMEMBER PREVIOUS PAGE

document.addEventListener("click", function(event) {

    const link = event.target.closest(
        'a[href="/html/languages.html"]'
    );

    if (link) {

        sessionStorage.setItem(
            "btb_previous_page",
            window.location.pathname
        );

    }

});


// 5. APPLY LANGUAGE WHEN PAGE LOADS

document.addEventListener("DOMContentLoaded", function() {

    applyLanguage(getLanguage());

});
