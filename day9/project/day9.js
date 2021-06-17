const rectangles = document.querySelectorAll(".rectangle");
const booked = document.querySelector("#booked");
const remaining = document.querySelector("#remaining");
document.getElementById("booked").innerHTML = 0;
document.getElementById("remaining").innerHTML = 36;
let bookedCount = 0,
  remainingCount = 36;
Array.from(rectangles).forEach((rectangle, i) => {
  rectangle.addEventListener("click", () => {
    if (rectangle.style.background != "rgb(92,209,230)") {
      rectangle.style.background = "rgb(92, 209, 230)";
      bookedCount += 1;
      remainingCount -= 1;
    } else {
      rectangle.style.background = "rgb(100, 37, 8)";
      bookedCount -= 1;
      remainingCount += 1;
    }
    // bookedCount += 1
    // remainingCount -= 1
    booked.innerHTML = "Booked Seats : " + bookedCount;
    remaining.innerHTML = "Remaining Seats : " + remainingCount;
  });
});

//"use strict"
// const boxes = document.querySelectorAll('.box')
// const booked = document.querySelector('.booked')
// const remaining = document.querySelector('.remaining')
// console.log(boxes)
// console.log(booked)
// console.log(remaining)
// // booked.style.innerHTML = " 0"
// // remaining.style.innerHTML = " 36"
