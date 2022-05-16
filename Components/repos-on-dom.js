import renderToDom from "../Utils/renderToDom.js"
import pinnedRepoArray from "../Data/pinnedRepo.js"
import users from "../Data/data.js" 

const pinnedReposOnDom = () => {
  let repoContent = ""
  pinnedRepoArray.forEach((repo) => {
      repoContent += `
        <div>
          <div class="card repo-card" style="width: 18rem;">
            <div class="card-body">
            <a href="${repo.repoUrl}" class="card-link">${repo.title}</a>
            </div>
          </div>
        </div>
      `
  });
  
  renderToDom("#pinnedRepos", repoContent);
};

export default pinnedReposOnDom;
