import renderToDom from "../Utils/renderToDom.js";

const createNewProject = () => {
  let domString = `<form id="new-project-form">
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Project board name</label>
  <input type="project" class="form-control" id="exampleFormControlInput1" placeholder="Project board name">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-success">Create Project</button>
  </div>
  
  </form>`



  renderToDom("#new-projects-container", domString)
};


export default createNewProject;
