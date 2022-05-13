import users from "../Data/data.js";
import projectsOnDom from "./projectsOnDom.js";

const createProjBtn = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {

    e.preventDefault();
    const newProject = {
      projectName: document.querySelector('#projectName').value,
      projectUrl: document.querySelector('#description')
    }

    users.projects.push(newProject)
    projectsOnDom()
    console.log(users)

  
  })



}

export default createProjBtn;
