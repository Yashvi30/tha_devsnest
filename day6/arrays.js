//1.Write a JavaScript function to check whether an `input` is an array or not
function is_array(arr) {
  return Array.isArray(arr);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

//2.Write a JavaScript function to clone an array
function array_Clone(a) {
  return a.slice(0, a.length);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(s, r) {
  if (r == null) return s[0];
  if (r < 0) return [];
  return s.slice(0, r);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
//4.Write a simple JavaScript program to join all elements of the following array into a string.
function function4() {
  var myColor = ["Red", "Green", "White", "Black"];
  var r = myColor.join(",");
  var s = myColor.join("+");
  console.log(r);
  console.log(s);
}
//5. Write a JavaScript program to find the most frequent item of an array
function mostFreq() {}
