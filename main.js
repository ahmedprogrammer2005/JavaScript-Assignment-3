// Assignment 3

// Answer 1
var age = 25; 
alert("Your age is: " + age);


// Answer 2
if (typeof(Storage) !== "undefined") {
    if (localStorage.visits) {
        localStorage.visits = Number(localStorage.visits) + 1;
    } 
    else {
        localStorage.visits = 1;
    }
    document.write("<h2>Visitor Counter</h2>");
    document.write("You have visited this site " + localStorage.visits + " times.");
    } 
else {
    document.write("Your browser does not support localStorage. Please upgrade your browser.")};


// Answer 3
var birthYear = 1990;
document.write("<h2>Birth Year Message</h2>");
document.write("My birth year is: " + birthYear);


// Answer 1
var visitorName = "Ahmed";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<h2>Online Store Order</h2>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on My Clothing store.");
// Answer 1
// Answer 1
// Answer 1
