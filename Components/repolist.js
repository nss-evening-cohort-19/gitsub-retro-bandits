import users from "../Data/data.js"
import renderToDom from "../Utils/renderToDom.js";

const reposArray = users[0].repos
 const repolist = () => {
  let domString = '';
  for (const item of reposArray) {
    if (item.favorite === false) {

      domString += `
        <div>
        <a href ="${item.repoUrl}" target="_blank">${item.title}</a>
        <button type="button" id="starBtn--${item.id}" class="btn btn-light">☆ Star</button>
        </div>
      `
      renderToDom("#repo-container", domString)
    } else {
      domString += `
      <div>
      <a href ="${item.repoUrl}" target="_blank">${item.title}</a>
      <button type="button" id="starredBtn--${item.id}" class="btn btn-light">Starred</button>
      </div>
    `
    renderToDom("#repo-container", domString)
    }
  }
}

 const toggleFavorite = (object, index) => {
  if (object.favorite === false) {
    const newObject = {
      id: object.id,
      title: object.title,
      repoUrl: object.repoUrl,
      favorite: true
    }

    return reposArray.splice(index, 1, newObject)
  } else {
    const newObject = {
      id: object.id,
      title: object.title,
      repoUrl: object.repoUrl,
      favorite: false
    }

    return reposArray.splice(index, 1, newObject)
  }
}

 const starred = document.querySelector("#repo-container")
  starred.addEventListener('click', (e) => {
  const [method, id] = e.target.id.split("--")
  const index = reposArray.findIndex((repoIndex => repoIndex.id === Number(id)))
  
  toggleFavorite(reposArray[index], index)
  repolist()
})

export default repolist
