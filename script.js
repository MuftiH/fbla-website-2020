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

