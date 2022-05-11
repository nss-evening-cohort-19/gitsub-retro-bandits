import users from "../Data/data.js";
import renderToDom from "../Utils/renderToDom.js";


const projectsOnDom = () => {
  let domString = ''
  users.repos.forEach(repo => {
    domString += `<div class="card">
    <div class="card-header">
      Project
    </div>
    <div class="card-body">
      <h5 class="card-title">${repo.title}</h5>
      <p class="card-text">${repo.url}</p>
      <a href="#" class="btn btn-primary">Delete Project</a>
    </div>
  </div>`
    
  });
  renderToDom("projects-container", domString)
};

export default projectsOnDom;
