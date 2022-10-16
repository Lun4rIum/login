const login = document.getElementById("loginButton");


login.addEventListener("click", function showLogs(){
    document.getElementById("loginContainer").style.display ="none"
    var pseudo =  document.getElementById("username").value;
    var password =  document.getElementById("password").value;

    var welcomePseudo = document.getElementById("welcomePseudo").innerHTML = pseudo
    document.getElementById("welcome").style = "display: inline-flex;"
});