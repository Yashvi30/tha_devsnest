const value1 = { a: 1, b: 2 };
const value2 = { p: 3, q: 2 };

function addition(a, b) {
  console.log(this);
  console.log(a + b);
}

addition.apply(value1, [2, 3]);
addition.call(value2, 2, 3);
const y = addition.bind(value1, 6, 8);
console.log(y);
y();
