let totalSeconds = 60; // a global with the total seconds
let remainSeconds = 0; // a global with remaining seconds
let countdownId; // global id used for interval timer
// the next variables define the Circle
const PI = 3.1415927;
let r = 120;
let circumference = r * 2 * PI;

function getSliceSize() {
  return 1 * (circumference / (totalSeconds - 1));
}
function createCircleStyle() {
  const CircleAnimationDefault = {
    strokeDasharray: circumference,
    strokeDashoffset:
      remainSeconds > 0 ? getSliceSize() * (remainSeconds - 1) : 0,
    transition: "all 1s linear"
  };
  return CircleAnimationDefault;
}
function updateCircle(circleText) {
  const circleStyle = createCircleStyle();
  const timeText = document.getElementById("timedisplay");
  timeText.innerText = circleText;
  console.log(circleStyle);
  const circle = document.getElementById("timecircle");
  circle.style.strokeDasharray = circleStyle.strokeDasharray;
  circle.style.strokeDashoffset = circleStyle.strokeDashoffset;
  circle.style.transition = circleStyle.transition;
  console.log(circle.style);
}

function updateTimer() {
  updateCircle(remainSeconds--);
  if (remainSeconds < 0 && countdownId) {
    clearInterval(countdownId);
  }
}
function settimeSubmit(event) {
  event.preventDefault();
  secondInput = document.getElementById("seconds");
  remainSeconds = +secondInput.value;
  totalSeconds = remainSeconds;
  countdownId = setInterval(updateTimer, 1000);
}
const settimeForm = document.getElementById("settime");
settimeForm.addEventListener("submit", settimeSubmit);
