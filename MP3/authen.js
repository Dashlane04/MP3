var password = document.getElementById("pass");
var eye = document.querySelectorAll("#eye");
var passreveal = document.getElementById("btn1");
passreveal.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        eye.setAttribute("src" , "backgroundImages/eye.svg");
    }
    else{
        password.type = "password";
        eye.setAttribute("src", "backgroundImages/eye-slash.svg");
    }
});


document.getElementById("register").addEventListener("click", () => {
    document.getElementById("lg").style.display = "none";
})






