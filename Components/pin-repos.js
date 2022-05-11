import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"

let domString = "";

const pinRepos = () => {
  users.forEach((user) => {
    user.repos.forEach((repo) => {
      domString += 
      `
      <div id="pinRepoModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Pinned Items</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="pinnedRepoForm">
              <li class="repoList">
                <input type="checkbox" name="repoName" value="Repo">
                <label for="repoName">${repo.title}</label><br>
              </li>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
      `
      renderToDom("#pinNewRepos", domString);
     })
  });
}

  export default pinRepos;
