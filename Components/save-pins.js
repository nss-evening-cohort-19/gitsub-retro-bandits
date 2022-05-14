import renderToDom from "../Utils/renderToDom.js"
import pinnedRepoArray from "../Data/pinnedRepo.js"
import data from "../Data/data.js" 

const savePins = (event) => {
  console.log(event.target.id);
  if (event.target.id.includes("-input")) {
    const [id] = event.target.id.split("-")
    const index = data.findIndex(datas => datas.id === parseInt(id));  
    if (pinnedRepoArray.includes(index)){
      pinnedRepoArray.splice(index);
    } else {
    pinnedRepoArray.push(index);
    }
    // check if item is inside pinnedRepoArray
    //  if yes => remove (splice) 
    // if no => add to pinnedRepoArray
  }
}

const reposOnDom = (repo) => {
  let repoContent = ""
  pinnedRepoArray.forEach((repo) => {
    repo.forEach((repository) => {
      repoContent += `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <a href="${repository.repoUrl}" class="card-link">${repository.name}</a>
            </div>
          </div>
        </div>
      `
    })
  });
  
  renderToDom("#pinnedRepos", repoContent);
};
  



export default savePins
