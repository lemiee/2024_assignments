const playform = document.querySelector("#input-form");
const playInput = document.querySelector("#input-form input");
const playButton = document.querySelector("#input-form button");

function onPlayBtnClick() {
  console.log(playInput.value);
  console.log("Click");
}

function onPlaySubmit(event){
  event.preventDefault();
  console.log(playInput.value);
}

playButton.addEventListener("click", onPlayBtnClick);
playform.addEventListener("submit", onPlaySubmit);
