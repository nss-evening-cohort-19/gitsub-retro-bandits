import savePins from "./save-pins.js";

const eventListeners = () => {
  document.querySelector("#repoList").addEventListener("click", savePins);
}

export default eventListeners;
