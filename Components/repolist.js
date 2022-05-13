import users from "../Data/data.js"
import renderToDom from "../Utils/renderToDom.js";


const repolist = () => {
  let domString = '';
  for (const item of users[0].repos) {
    domString += `
      <div>
      <h3>${item.title}</h3>
      </div>
    `
    renderToDom("#repo-container", domString)
  }
}

export default repolist
