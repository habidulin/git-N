var cursor = document.querySelector(".cursor");
var cursor1 = document.querySelector(".cursor1");
var cursor2 = document.querySelector(".cursor2");
var cursor3 = document.querySelector(".cursor3");
var cursor4 = document.querySelector(".cursor4");
var cursor5 = document.querySelector(".cursor5");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText =
  cursor1.style.cssText =
  cursor2.style.cssText =
  cursor3.style.cssText =
  cursor4.style.cssText =
  cursor5.style.cssText =
  "left: " +
  e.clientX +
  "px; top: " +
  e.clientY +
  "px;";
});
