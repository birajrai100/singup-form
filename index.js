
const submt = document.getElementById("form").addEventListener("submit", test);
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const txtError = document.querySelectorAll(".error-text");
const imgError = document.querySelectorAll(".error-img");
const emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var singup = [fname, lname, email, password];



function test(e) {
    for (var i = 0; i < singup.length; i++) {
        if (singup[i].value === "") {
            e.preventDefault();
            for (var j = 0; j < txtError.length; j++) {
                var x = txtError[i].classList.add("invalid");
                var y = imgError[i].classList.add("invalid");
            }
        }
        else {
            txtError[i].classList.remove("invalid");
            imgError[i].classList.remove("invalid");
        }
    }
}




