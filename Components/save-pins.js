// import renderToDom from "../Utils/renderToDom.js"
import pinnedRepoArray from "../Data/pinnedRepo.js"
import users from "../Data/data.js" 
import pinnedReposOnDom from "./repos-on-dom.js";

const savePins = (event) => {
  console.log(event.target.id);
  if (event.target.id.includes("-input")) {
    const [id] = event.target.id.split("-")
    const index = users.findIndex(data => data.id === parseInt(id));  
    if (pinnedRepoArray.includes(index)){
      pinnedRepoArray.splice(index);
    } else {
      pinnedRepoArray.push(index);
    }
    // check if item is inside pinnedRepoArray
    //  if yes => remove (splice) 
    // if no => add to pinnedRepoArray
  }
  pinnedReposOnDom();
}


export default savePins
