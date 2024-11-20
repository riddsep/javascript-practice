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
