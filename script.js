window.onload = function () {
    // maybe remove "this"
    if (this.localStorage.username) {
        let element = this.document.querySelector("#login-header");
        element.textContent = localStorage.username + " / LOGOUT";
        element.style.color = "#1558bd";
    }
}

function playDing() {
    var audio = new Audio('./assets/ding.mp3');
    audio.play();
}

function checkLogout() {
    let element = this.document.querySelector("#login-header");
    let elementText = element.textContent;
    if (elementText.includes("LOGOUT")) {
        if (localStorage.username) {
            localStorage.clear();
        }
        element.textContent = "Login / Register"
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html"
    }
}

function toggle() {

    var body = document.body;
    body.id = (body.id) ? body.id : 'body_id'; // ffox

    if (body.style.cursor == "progress") {
        body.style.cursor = '';
    } else {
        body.style.cursor = "progress";
    }
}

function book(element) {
    playDing(); 
    alert("Flight Confirmed!");
    element.classList.add("sold");
    element.classList.toggle("price");
}

function book101() {
    let element = document.getElementById("101");
    book(element);
}

function book103() {
    let element = document.getElementById("103");
    book(element);
}

function book195() {
    let element = document.getElementById("195");
    book(element);
}

function book135() {
    let element = document.getElementById("135");
    book(element);
}

function book185() {
    let element = document.getElementById("185");
    book(element);
}

function book260() {
    let element = document.getElementById("260");
    book(element);
}

function submitForm() {
    alert("Thank you for your submission!");
    let nameInput = document.getElementById("name-input");
    let emailInput = document.getElementById("email-input");
    let phoneInput = document.getElementById("phone-input");
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
}

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function submitLogin() {
    let usernameInput = document.getElementById("username-login").value;
    localStorage.username = usernameInput;
    window.location.replace("index.html");
}

function submitRegister() {
    alert("Thank you for registering! Now please login below.")
}

function submitTestimonial() {
    let testimonialText = document.querySelector("#testimonial-text").value;
    let testimonialName = document.querySelector("#testimonial-name").value;


    let testimonial = document.createElement("p");
    testimonial.textContent = testimonialText+ ". -" + testimonialName;

    let testimonials = document.querySelector(".testimonial");
    testimonials.appendChild(testimonial);

}