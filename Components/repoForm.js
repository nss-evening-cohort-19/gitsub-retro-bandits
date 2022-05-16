import renderToDom from "../Utils/renderToDom.js";

const createNewRepo = () => {
  let domString = `<div class="mb-3">
  <form id="new-repo-form">

  <div class="form-floating mb-3">
  <input type="text" class="form-control" id="repoName" placeholder="name@example.com">
  <label for="floatingInput">New Repo Name</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="repoDescription" placeholder="Password">
  <label for="floatingPassword">Description</label>
</div>
     <button type="submit" class="btn btn-light btnPadding" id="submit">Submit</button>
  </form>
</div>`



  renderToDom("#new-repo-container", domString)
};

export default createNewRepo
