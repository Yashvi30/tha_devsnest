const questions = [
  {
    quest: "Who is the owner of Bitcoin ?",
    answer: "0",
    options: ["Satoshi Nakamoto", "Elon musk", "Jeff Bezos", "Kim Jong-un"],
  },
  {
    quest: "when was bitcoin created ?",
    answer: "0",
    options: ["2009", "2011", "2010", "2008"],
  },
  {
    quest: "what is your name ?",
    answer: "0",
    options: ["Rajnikant", "Bheem", "Doraemon", "Ben 10"],
  },
  {
    quest: "what song genre u like ?",
    answer: "2",
    options: ["Hip Hop", "Jazz", "Rock", "Dubstep"],
  },
];
const ques = document.querySelector(".quest");
const opt = document.querySelectorAll(".opt");
const nxt = document.querySelector(".next");
let i = 0;
let score = 0;
// console.log(ques, btn, opt, opt[0])

let question = questions[i];
ques.innerHTML = `${i + 1}. ${question.quest}`;
opt[0].innerHTML += "a. " + question.options[0];
opt[1].innerHTML += "b. " + question.options[1];
opt[2].innerHTML += "c. " + question.options[2];
opt[3].innerHTML += "d. " + question.options[3];
let flag = false;

nxt.addEventListener("click", () => {
  i += 1;
  if (i === questions.length) {
    alert("Quiz Completed");
    window.location.reload();
  }
  let question = questions[i]; //
  ques.innerHTML = `${i + 1}. ${question.quest}`;
  opt[0].innerHTML = "a. " + question.options[0];
  opt[1].innerHTML = "b. " + question.options[1];
  opt[2].innerHTML = "c. " + question.options[2];
  opt[3].innerHTML = "d. " + question.options[3];
});

document.querySelectorAll("opt").forEach((item) => {
  item.addEventListener("click", (event) => {
    let val = document.querySelector("opt").value;
    console.log(val);
    if (val) {
      let ans = item.getAttribute("id");
      console.log(ans);
      let question = questions[i];
      if (question.answer === ans) {
        score++;
        alert(`Correct answer. Your score is ${score}`);
      } else alert("Wrong answer");
      // let inp = document.querySelector('input[name="option"]:checked')
      // inp.setAttribute("value", "0")
    }
  });
});
