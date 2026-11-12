const loginBtn = document.getElementById("btnLogin");
const username = document.getElementById("E_Uname");
const password = document.getElementById("input_pass");

loginBtn.addEventListener("click", function(){
    if(username.value !=="" && password.value !==""){
        console.log("Moving to home page...");
        window.location.href="/html/home.html";
    }else{
        alert("Please enter username and password");
    };
    
});