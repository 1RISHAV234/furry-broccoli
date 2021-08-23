const button = document.querySelector("#se");
const icon = document.querySelector("#se > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});
var width = screen.width;
var height = screen.height;

if (width < 992) {
    document.getElementById("para").style.fontSize="15px";
}