console.log("page loading");


function changeName() {
    var change = document.querySelector("#name");
    change.innerText = "Sam H";
}

var tod = document.querySelector(".toddp");
var todd = document.querySelector(".todd");
var phil = document.querySelector(".phil");
var phi = document.querySelector(".phils");
var count = 2;
var radius = document.querySelector(".radius");
var counter = 500;
var amount = document.querySelector(".amount");

function hide(element) {
    console.log("you got clicked the icon");
    tod.remove();
    todd.remove();
    counter++;
    amount.innerText = counter + "+";
}


function hide1(element) {
    console.log("you got it right", count);
    tod.remove();
    todd.remove();
    count--;
    radius.innerText = count;  
}

function hid(element) {
    phil.remove();
    phi.remove();
    counter++;
    amount.innerText = counter + "+";
}

function hid1(element) {
    phil.remove();
    phi.remove();
    count--;
    radius.innerText = count; 
}
