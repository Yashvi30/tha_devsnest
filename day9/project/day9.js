const rectangles = document.querySelectorAll(".rectangle");
document.getElementById("booked").innerHTML = "Booked Seats: 0";
document.getElementById("remaining").innerHTML = "Remaining Seats: 36";
let bookedCount = 0,
  remainingCount = 36;
Array.from(rectangles).forEach((rectangle) => {
  rectangle.addEventListener("click", () => {
    if (rectangle.style.background == "rgb(92,209,230)") {
      rectangle.style.background = "rgb(255, 255, 255)";
      bookedCount += 1;
      remainingCount -= 1;
    } else {
      rectangle.style.background = "rgb(92, 209, 230)";
      bookedCount -= 1;
      remainingCount += 1;
    }

    booked.innerHTML = "Booked Seats : " + bookedCount;
    remaining.innerHTML = "Remaining Seats : " + remainingCount;
  });
});
