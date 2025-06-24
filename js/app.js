const playBtn = document.querySelector("#play");
const forwardBtn = document.querySelector("#forward");
const backgwordBtn = document.querySelector("#backward");
const progressContainer = document.querySelector(".progress-container");
const progressEl = document.querySelector(".progress");
const audio = document.querySelector("audio");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const volume = document.querySelector("#volume-changer");
const volumeText = document.querySelector("span");

audio.volume = +volume.value / 100;
volumeText.textContent = `${volume.value}`;

function pause() {
  audio.pause();
  container.classList.remove("play");
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
}
function play() {
  audio.play();
  container.classList.add("play");
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}
function muzicPlay() {
  const isPlaying = container.classList.contains("play");
  if (isPlaying) {
    pause();
  } else {
    play();
  }
}
function progress() {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const p = (currentTime / duration) * 100;
  progressEl.style.width = `${p}%`;
}

function changeTime(e) {
  const p = (e.offsetX / this.clientWidth) * 100;
  const currentTime = (audio.duration / 100) * p;
  audio.currentTime = currentTime;
}

function volumeChange() {
  audio.volume = +volume.value / 100;
  volumeText.textContent = `${volume.value}`;
}

playBtn.addEventListener("click", muzicPlay);
audio.addEventListener("timeupdate", progress);
progressContainer.addEventListener("click", changeTime);
volume.addEventListener("input", volumeChange);
