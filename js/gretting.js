const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//function Part
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}
function saveName(text) {
  localStorage.setItem("currentUser", text);
}
function paintGreeting(text) {
  form.classList.remove("showing");
  greeting.classList.add("showing");
  greeting.innerText = `Welcome back, ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
