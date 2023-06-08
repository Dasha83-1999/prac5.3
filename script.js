window.onload = function() {

  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");


  buttonG.addEventListener("click", function() {
    var x = -9;
  var y = Math.abs(x);
alert("Результат обчислення модуля |-9| = " + y);
  });

  buttonGr.addEventListener("click", function() {
   var x = 0;
var y = Math.cos(x);

alert("Результат обчислення косинуса нуля радіан = " + y);
 });

  buttonC.addEventListener("click", function() {
   var x = 16;
  var y = Math.abs(x);

alert("Результат зведення в степінь =  " + y);

  });

  buttonCI.addEventListener("click", function() {
   var x = 2;
var y = Math.abs(x);

alert("Результат добування квадратного кореня з 4 = " + y);
 });

  buttonSH.addEventListener("click", function() {
   var x = NaN;
var y = Math.abs(x);

alert("Результат добування квадратного кореня з -9 =  " + y);

  });
};
