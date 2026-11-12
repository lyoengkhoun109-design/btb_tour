document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded : it is an envent that use for delay to let html code complete then run the function itself

    fetch("/html/navbar.html") //use to request info from another file
        .then(response => response.text())
        .then(data => {

            document.getElementById("nav-container").innerHTML = data;

            
        const home =document.getElementById("home");
        const login =document.getElementById("logout");
        const emergency =document.getElementById("emergency");

        login.addEventListener("click", function(){
            window.location.href="/html/login.html";
        });
        })
        .catch(error => console.log(error));

});


