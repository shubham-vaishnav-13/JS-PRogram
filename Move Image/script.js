// const mybox = document.getElementById("mybox");

// mybox.addEventListener("click", (evt) => {
//   evt.target.style.backgroundColor = "tomato";
//   evt.target.textContent = "Bado Badi 🙂";
// });
// mybox.addEventListener("mouseover", (evt) => {
//   evt.target.style.backgroundColor = "yellow";
//   evt.target.textContent = "Aye Hye 😫";
// });

// mybox.addEventListener("mouseout", (evt) => {
//   evt.target.style.backgroundColor = "green";
//   evt.target.textContent = "Oy Hoy 🙄"

// });
// document.addEventListener("keydown",event=>{
//   mybox.textContent ="😫";
//   mybox.style.backgroundColor = "tomato";
// });
// document.addEventListener("keyup",event=>{
//   mybox.textContent ="😉";
//   mybox.style.backgroundColor = "lightblue";
// });
const mybox = document.getElementById("mybox");
const moveamout = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", (evt) => {
  if (evt.key.startsWith("Arrow")) {
    evt.preventDefault();
    switch (evt.key) {
      case "ArrowUp":
        y -= moveamout;
        break;
      case "ArrowDown":
        y += moveamout;
        break;
      case "ArrowLeft":
        x -= moveamout;
        break;
      case "ArrowRight":
        x += moveamout;
        break;
    }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
  }
});
