import renderToDom from "../Utils/renderToDom.js"

const navBar = () => {
  const domString = `<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-start">
    <a href="../index.html" id="Overview" class="btn btn-outline-success me-2" type="button">Overview</a>
    <a href="../repos.html" id="Repos" class="btn btn-outline-success me-2" type="button">Repositories</a>
    <a href="../projects.html" id="projects" class="btn btn-outline-success me-2" type="button">Projects</a>
    <a href="../package.html" id="Packages" class="btn btn-outline-success me-2" type="button">Packages</a>
    
  </form>
</nav>`

renderToDom('#navbar-container', domString)
};

export default navBar;
