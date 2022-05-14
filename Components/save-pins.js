import renderToDom from "../Utils/renderToDom.js"
import pinnedRepoArray from "../Data/pinnedRepo.js"


const savePins = () => {
  const childElements = document.querySelector("#repoList").children;
  for (let item of childElements) {
    if (item.tagName == "input" && item.type == "checkbox") {
      if (item.checked) {
        pinnedRepoArray.push(item);
      }
    }  
  } 

  const formModal = document.querySelector("pinReposBtn-modal");
  let repoContent = ""
  pinnedRepoArray.forEach((repo) => {
    repo.forEach((repo) => {
      repoContent += `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <a href="${repo.repoUrl}" class="card-link">${repo.name}</a>
            </div>
          </div>
        </div>
      `
    })
  });
  
  renderToDom("#pinnedRepos", repoContent);
  // formModal.hide()
  // form.reset();
};
  

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); 
// });

export default savePins
