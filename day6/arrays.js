//1.Write a JavaScript function to check whether an `input` is an array or not
function myFunction1() {
  var y = Number(document.getElementsByName("array").value);
  var x = Array.isArray(y);
  document.getElementById("output").value = x;
}
//2.Write a JavaScript function to clone an array
function myFunction2() {
  var a = Number(document.getElementsByName("array").value);
  var b = a.slice(0, a.length);
  document.getElementById("output").value = b;
}
//3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function myFunction3() {
  var p = Number(document.getElementsByName("array").value);
  var r = Number(document.getElementsByName("numberOfElements").value);
  var q = a.slice(0, r + 1);
  document.getElementById("output").value = q;
}
//4.Write a simple JavaScript program to join all elements of the following array into a string.
function myFunction4() {
  var myColor = ["Red", "Green", "White", "Black"];
  var r = myColor.join(",");
  var s = myColor.join("+");
  console.log(r);
  console.log(s);
}
//5. Write a JavaScript program to find the most frequent item of an array
