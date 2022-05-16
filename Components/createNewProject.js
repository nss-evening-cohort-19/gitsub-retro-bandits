import renderToDom from "../Utils/renderToDom.js";

const createNewProject = () => {
  let domString = `<form id="new-project-form">
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Project board name</label>
  <input type="project" class="form-control" id="projectName" placeholder="Project board name" required>
  </div>
  <div class="mb-3">
  <label for="description" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="description" rows="3"></textarea>
  <button type="submit" class="btn btn-success">Create Project</button>
  </div>
  
  </form>`



  renderToDom("#new-projects-container", domString)
};


export default createNewProject;
