document.getElementById("ans1").innerHTML = 0;
document.getElementById("ans2").innerHTML = 36;

Array.from(divs).forEach((div, i) => {
  document.addEventListener(
    "click",
    (document.getElementById("ans1").innerHTML += 1),
    (document.getElementById("ans2").innerHTML -= 1)
  );
});
