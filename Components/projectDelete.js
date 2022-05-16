import users from "../Data/data.js";
import projectsOnDom from "./projectsOnDom.js";

const deleteProject = () => {
  document.querySelector('#list-container').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, projectName] = e.target.id.split('--')

      const index = users[0].projects.findIndex(object => object.projectName === projectName)

      if (e.target.id.includes('delete')) {
        users[0].projects.splice(index, 1)
        projectsOnDom()
        console.log(users[0].projects)
      }
    }
  })
};

export default deleteProject;
