document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded : it is an envent that use for delay to let html code complete then run the function itself

    fetch("/html/navbar.html") //use to request info from another file
        .then(response => response.text())
        .then(data => {

            document.getElementById("nav-container").innerHTML = data;

        const home = document.getElementById("home");
        const place = document.getElementById("place");
        const login = document.getElementById("logout");
        const emer = document.getElementById("emergency");

        // Navigation
        place.addEventListener("click", function(){
            window.location.href = "/html/afterhome.html";
        });

        home.addEventListener("click", function(){
            window.location.href = "/html/home.html";
        });
        emer.addEventListener("click", function(){
            window.location.href = "/html/emergency.html";
        });


        // Automatically change navbar color
        const currentPage = window.location.pathname;

        if (currentPage === "/html/home.html") {
            home.style.color = "black";
            home.style.fontWeight = "700";
        }
        else if (currentPage === "/html/afterhome.html") {
            place.style.color = "black";
            place.style.fontWeight = "700";
        }else if (currentPage === "/html/emergency.html") {
            emer.style.color = "black";
            emer.style.fontWeight = "700";
        }
        

        login.addEventListener("click", function(){
            window.location.href="/html/login.html";
        });
        })
        .catch(error => console.log(error));

});


