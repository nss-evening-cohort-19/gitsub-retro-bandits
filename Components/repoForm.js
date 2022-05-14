import renderToDom from "../Utils/renderToDom.js";

const createNewRepo = () => {
  let domString = `<form id="new-project-form">
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Repository name</label>
  <input type="project" class="form-control" id="repoName" placeholder="Repository name" required>
  </div>
  <div class="mb-3">
  <label for="description" class="form-label">Description (optional)</label>
  <textarea class="form-control" id="repoDescription" rows="3"></textarea>
  <button type="submit" class="btn btn-success">Create Repository</button>
  </div>
  
  </form>`



  renderToDom("#new-repo-container", domString)
};

export default createNewRepo
