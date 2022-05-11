import users from "../Data/data.js";
import renderToDom from "../Utils/renderToDom.js";


const projectsOnDom = () => {
  let domString = ''
  users[0].projects.forEach(project => {
    domString += `<div class="card">
    <div class="card-header">
      Project
    </div>
    <div class="card-body">
      <h5 class="card-title">${project.projectName}</h5>
      <p class="card-text">${project.projectUrl}</p>
      <a href="#" class="btn btn-primary">Delete Project</a>
    </div>
  </div>`
    
  });
  renderToDom("#projects-container", domString)
};

export default projectsOnDom;
