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
        const hotel = document.getElementById("hotel");
        const food = document.getElementById("food");

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
        login.addEventListener("click", function(){
            window.location.href="/html/login.html";
        });

        hotel.addEventListener("click", function(){
            window.location.href = "/html/hotel.html";
        });
        food.addEventListener("click", function(){
            window.location.href = "/html/foodgency.html";
        });

        // Automatically change navbar color
        const currentPage = window.location.pathname;

        const navLinks = {
            "/html/home.html": home,
            "/html/afterhome.html": place,
            "/html/emergency.html": emer,
            "/html/hotel.html": hotel,
            "/html/food.html": food
        };

        const activeLink = navLinks[currentPage];

        if (activeLink) {
            activeLink.style.color = "black";
            activeLink.style.fontWeight = "700";
        }
        
        })
        .catch(error => console.log(error));

    });


