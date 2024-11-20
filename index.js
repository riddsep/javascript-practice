/*
Operator Logika

Operator logika terdiri dari &&, ||, !, ??, meskipun disebut operator logika, operator ini tidak selalu menghasilkan nilai boolean ,tetapi hasilnya juga dapat berupa jenis nilai yang lain.

OR ||
Di pemrograman classic operator or || digunakan untuk boolean saja, tetapi di javscript ini  

*/

function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)
function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer

  alert(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann
