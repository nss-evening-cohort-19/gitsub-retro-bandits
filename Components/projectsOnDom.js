import users from "../Data/data.js";
import renderToDom from "../Utils/renderToDom.js";


const projectsOnDom = () => {
  let domString = ''
  users[0].projects.forEach(project => {
    domString += `<a href="#" class="list-group-item list-group-item-action"><h5>${project.projectName}</h5><a href="${project.projectUrl}" target=>${project.projectUrl}</a> <button type="button" class="btn btn-danger btn-sm" id="delete--${project.projectName}">Delete</button>
    </a>` 
    
  });
  renderToDom("#list-container", domString)

  const projectCounter = () => {
    let domString = `${users[0].projects.length} Open <span class="iconify" data-icon="bi:archive"></span> 0 Closed`
    renderToDom('#open-projects', domString)
    
  }
  projectCounter()
};



export default projectsOnDom;
