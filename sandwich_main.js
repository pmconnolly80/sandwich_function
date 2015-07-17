var sandwich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false,
}

function changePickle (pickle){
  var statement = "";
if (prompt("Do you want pickle?") === "yes") {
statement = " pickle";
}
  return statement;
}

function changeLettuce (lettuce){
  var statement = "";
if (prompt("Do you want lettuce?") === "yes") {
statement = " lettuce";
}
  return statement;
}

function changeTomato (tomato){
  var statement = "";
if (prompt("Do you want tomato?") === "yes") {
statement = " tomato";
}
  return statement;
}

function changeKetchup (ketchup){
  var statement = "";
if (prompt("Do you want ketchup?") === "yes") {
statement = " ketchup";
}
  return statement;
}

function changeMustard (mustard){
  var statement = "";
if (prompt("Do you want mustard?") === "yes") {
statement = " mustard";
}
  return statement;
}

function changeMayo (mayo){
  var statement = "";
if (prompt("Do you want mayo?") === "yes") {
statement += " mayo";
}
  return statement;
}

function makeMeASandwich (pickle, lettuce, tomato, ketchup, mustard, mayo) {
document.write("My sandwich has " + pickle + lettuce + tomato + ketchup + mustard + mayo + " " +
"on it." );
}

makeMeASandwich (changePickle(sandwich.pickle), changeLettuce(sandwich.lettuce), changeTomato(sandwich.tomato), changeKetchup(sandwich.ketchup), changeMustard(sandwich.mustard), changeMayo(sandwich.mayo));

 









