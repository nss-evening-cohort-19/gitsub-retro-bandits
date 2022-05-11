import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"

let domString = "";

const pinRepos = () => {
  users.forEach((repo) => {
    domString += 
    `
    <input type="checkbox" name="repoName" value="Repo">
    <label for="repoName">${users.repos.title}</label><br>
    `
  });
    renderToDom("#pinNewRepos", domString);
  };


  export default pinRepos();
