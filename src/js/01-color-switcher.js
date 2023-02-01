
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;

function startChangingColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}


function stopChangingColor() {
 startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

