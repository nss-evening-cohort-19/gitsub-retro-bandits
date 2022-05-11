import renderToDom from "../Utils/renderToDom.js"

const navBar = () => {
  const domString = `<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <button id="Overview" class="btn btn-outline-success me-2" type="button">Overview</button>
    <button id="Repos" class="btn btn-outline-success me-2" type="button">Repositories</button>
    <button id="projects" class="btn btn-outline-success me-2" type="button">Projects</button>
    <button id="Packages" class="btn btn-outline-success me-2" type="button">Packages</button>
    
  </form>
</nav>`

renderToDom('#navbar-container', domString)
};

export default navBar;
