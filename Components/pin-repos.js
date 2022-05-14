import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"
// import eventListeners from "../Components/event-listeners.js"

let domString = "";

const pinRepos = () => {
  const modalLoop = () => {
    let formContent = "" 
    users.forEach((user) => {
      user.repos.forEach((repo) => {
       formContent += `
          <li class="sort">
            <input type="checkbox" id="${repo.title}-input" class="repoName" name="repoName" value="Repo">
            <label for="${repo.title}-input">${repo.title}</label><br>
          </li>
       `
      })
    });
    return formContent;
   }

  domString += 
      `
      <div class="modal fade" id="pinReposBtn-modal" tabindex="-1" aria-labelledby="pinReposBtn-modal" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Pinned Items</h5>
                <button type="submit" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <filter id="filterRepoForm">
                  <input type="text" id="searchInput" onekeyup="searchList()" placeholder="Filter Repositories">
                </filter>
              </div>
              <div class="modal-body">
                <ul id="repoList">
                  ${modalLoop()}
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" id="savePinsBtn" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      renderToDom("#modalContainer", domString);
}

// logic not complete/functional- this is to filter search results

const searchList = () => {
  let valueTyped = document.querySelector("#searchInput").value;
  let listItems = document.querySelector(".sort");
  for (item of listItems) {
    const repoTitle = item.getElementsByTagName("label").innerHTML;
    if (repoTitle.includes(valueTyped)) {
      item.style.display = ""
    }
    else {
      item.style.display = "none";
    }
  }
}


export default pinRepos;

 

  
