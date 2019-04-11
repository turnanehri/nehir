
var name = prompt("What is your name");
alert("Hello, " + name);

var a = 5;
var b = 10;

if (a < b) {
    alert("yes, a is less than b");
}
if (a == b) {
    alert("a is equalto b");
}

var balance = 500;
if (balance >= 0) {
    alert("The balance is positivie");
    if (balance > 100) {
        alert("The balance is large!");
    }
} else { 
    alert("The balance is negativie");
}
function myFunction (){
    var a = 5;
    var b = 10;
    var c = 20;
    var d = a + b + c;
    alert("The value of d is " + d);
}
myFunction();
var grade = "Premium";

function addTwonumbers(a , b){
    var result = a + b;
    return result;
}
var x = addTwonumbers(5 ,10);
alert(x);

var phrase = "This is a simple phrase.";
alert(phrase.toUpperCase());

var str1 = "Hello";
var str2 = "hello";
    // str1 != str2
if (str1.toLowerCase() == str2.toLowerCase()) {
    alert("Yes, equal");
}