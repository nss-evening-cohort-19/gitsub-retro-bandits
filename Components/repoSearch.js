import users from "../Data/data.js";
import repolist from "./repolist.js";

const repoSearchEvent = () => {
const repoSearch = document.querySelector('#searchInput')
addEventListener('keyup', (e) => {
  // const reposArray = users[0].repos
  const userInput = e.target.value.toLowerCase()
  const searchResult = users[0].repos.filter(item =>
  item.title.toLowerCase().includes(userInput))
  repolist(searchResult)
})
}
export default repoSearchEvent
