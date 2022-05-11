import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"

let domString = "";

const pinRepos = () => {
  users.forEach((user) => {
    user.repos.forEach((repo) => {
      domString += 
      `
      <form id="pinnedRepoForm">
        <li class="repoList">
          <input type="checkbox" name="repoName" value="Repo">
          <label for="repoName">${repo.title}</label><br>
        </li>
      </form>
      `
      renderToDom("#pinNewRepos", domString);
     })
  });
}

  export default pinRepos;
