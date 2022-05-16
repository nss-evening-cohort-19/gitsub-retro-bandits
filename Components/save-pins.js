// import renderToDom from "../Utils/renderToDom.js"
import pinnedRepoArray from "../Data/pinnedRepo.js"
import users from "../Data/data.js" 
import pinnedReposOnDom from "./repos-on-dom.js";

const savePins = (event) => {
  if (event.target.id.includes("-input")) {
    const [id] = event.target.id.split("-")
    const index = users[0].repos.find(data => data.id === parseInt(id));
    const notIncluded = !pinnedRepoArray.includes(index);  
    if (notIncluded) {
      pinnedRepoArray.push(index);
    } else if (!notIncluded) {
      pinnedRepoArray.splice(index);
    }
  }
  pinnedReposOnDom();
}


export default savePins
