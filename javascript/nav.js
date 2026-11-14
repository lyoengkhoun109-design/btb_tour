
document.addEventListener("DOMContentLoaded", function () {

    fetch("/html/navbar.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("nav-container").innerHTML = data;

            // បកប្រែ Navbar តាមភាសាដែលបានជ្រើស
            if (typeof applyLanguage === "function") {
                applyLanguage(getLanguage());
            }

        })
        .catch(error => {
            console.log("Navbar Error:", error);
        });

});
