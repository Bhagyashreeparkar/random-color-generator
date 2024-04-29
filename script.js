let boxes = document.querySelectorAll(".box");
let result = document.querySelectorAll(".result");

for ( let box of boxes) {
  let hexColor = "#" + Math.random().toString(16).slice(2,8);
  box.style.background = hexColor;
}

result.forEach((e) => {
  let hexColor = "#" + Math.random().toString(16).slice(2,8);
  e.innerText = hexColor;
})