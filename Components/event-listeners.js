import savePins from "./save-pins";

const eventListeners = () => {
  document.querySelector("#savePinsBtn").addEventListener("click", savePins);
}

export default eventListeners;
