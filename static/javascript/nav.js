document.addEventListener("DOMContentLoaded", function () {

    fetch("/html/navbar.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("nav-container").innerHTML = data;

            // Get current page
            const currentPage = window.location.pathname;

            console.log("Current page:", currentPage);

            // Get navbar links
            const navbarLinks = document.querySelectorAll("[nav-list]");

            navbarLinks.forEach(link => {

                const linkPage = new URL(link.getAttribute("href"), window.location.origin).pathname;

                console.log("Link page:", linkPage);

                link.classList.remove("active");

                if (currentPage === linkPage) {
                    link.classList.add("active");
                    console.log("Matched:", linkPage);
                }

            });

        })
        .catch(error => {
            console.log("Navbar Error:", error);
        });

});



