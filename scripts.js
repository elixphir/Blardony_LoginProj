function loginFunc(){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    if (username == "" && password == ""){
        document.getElementById("loginError").innerHTML = "*Please enter your username and password.";
        console.log("Login error.");
    }
    else if (username != "" && password == ""){
        document.getElementById("loginError").innerHTML = "*Please enter your password.";
        console.log("Login error.");
    }
    else if (username == "" && password != ""){
        document.getElementById("loginError").innerHTML = "*Please enter your username.";
        console.log("Login error.");
    }
    else {
        location.href = "login.html";
    }
}