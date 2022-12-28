// var cursor = document.querySelector(".cursor");
// var cursor1 = document.querySelector(".cursor1");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove", function (e) {
//   cursor.style.cssText =
//   cursor1.style.cssText =
//   cursor2.style.cssText =
//   "left: " +
//   e.clientX +
//   "px; top: " +
//   e.clientY +
//   "px;";
// });

let img = document.querySelector('.animation-img'),
    animationBlock = document.querySelector('.animation');

animationBlock.addEventListener('mousemove', (e) => {
    let topCurs = Math.round(e.offsetY - animationBlock.offsetHeight / 2) / 50,
      leftCurs = Math.round(e.offsetX - animationBlock.offsetWidth / 2) / 100;
    img.style.transform = `rotateX(${topCurs}deg) rotateY(${-leftCurs}deg) 
    scale(1.2)`;
});