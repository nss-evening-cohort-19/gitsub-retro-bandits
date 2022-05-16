import renderToDom from "../Utils/renderToDom.js"

const navBar = () => {
  const domString = `<nav class="navbar navi-btn">
  <form class="container-fluid justify-content-start">
    <a href="../index.html" id="Overview" class="btn navi-btn" type="button">Overview</a>
    <a href="../repos.html" id="Repos" class="btn navi-btn" type="button">Repositories</a>
    <a href="../projects.html" id="projects" class="btn navi-btn" type="button">Projects</a>
    <a href="../package.html" id="Packages" class="btn navi-btn" type="button">Packages</a>
    
  </form>
</nav>`

renderToDom('#navbar-container', domString)
};

export default navBar;
