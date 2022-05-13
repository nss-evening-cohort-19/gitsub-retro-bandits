import savePins from "./save-pins.js";

const eventListeners = () => {
  document.querySelector("#savePinsBtn").addEventListener("click", savePins);
}

export default eventListeners;
