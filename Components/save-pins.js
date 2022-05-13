import renderToDom from "../Utils/renderToDom.js"

let pinnedRepoArray = [];

formModal = document.querySelector("pinReposBtn-modal");

//need to finish this method with info from Repos page

const savePins = () => {
  let domString = "";
  domString += `
  //REPOS INFO HERE
  `
  const childElements = document.querySelector("#repoList").children;
  for (item of childElements) {
    if (item.tagName == "input" && item.type == "checkbox") {
      if (item.checked) {
        pinnedRepoArray.push(item);
        renderToDom("#pinnedRepos", domString);
        formModal.hide()
        form.reset();
      }
    }  
  } 
}

document.querySelector("savePinsBtn").addEventListener("submit", savePins);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
});

export default savePins
