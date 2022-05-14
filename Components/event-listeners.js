import savePins from "./save-pins.js";

const eventListeners = () => {
  document.querySelector("#savePinsBtn").addEventListener("click", savePins);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
});

formModal.hide()
form.reset();
}

export default eventListeners;
