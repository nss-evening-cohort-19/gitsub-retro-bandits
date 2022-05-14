import users from "../Data/data.js";
import renderToDom from "../Utils/renderToDom.js";


const projectsOnDom = () => {
  let domString = ''
  users[0].projects.forEach(project => {
    domString += `<a href="#" class="list-group-item list-group-item-action"><h3>${project.projectName}</h3><a href="${project.projectUrl}">${project.projectUrl}</a> </a>` 
    
  });
  renderToDom("#list-container", domString)
};

export default projectsOnDom;
