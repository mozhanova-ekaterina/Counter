const res = document.querySelector(".res");
const controls = document.querySelectorAll(".btn");
let counter = 0
res.textContent = counter

controls.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    onClick(e);
    res.textContent = counter
  })
);

function onClick(e) {
  switch (e.target.role) {
    case "reset":
      counter = 0
      break;
    case "increase":
      counter ++
      break;
    case "decrease":
      counter--
      break;
  }
}
