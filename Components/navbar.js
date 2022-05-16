import renderToDom from "../Utils/renderToDom.js"

const navBar = () => {
  const domString = `<nav class="navbar navi-btn">
  <form class="container-fluid justify-content-start">
  <span class="iconify" data-icon="akar-icons:book"></span>
  <a href="../index.html" id="Overview" class="btn navi-btn" type="button">Overview</a>
  <span class="iconify" data-icon="octicon:repo-24"></span>
  <a href="../repos.html" id="Repos" class="btn navi-btn" type="button">Repositories</a>
  <span class="iconify" data-icon="octicon:table-24"></span>
  <a href="../projects.html" id="projects" class="btn navi-btn" type="button">Projects</a>
  <span class="iconify" data-icon="octicon:package-24"></span>
  <a href="../package.html" id="Packages" class="btn navi-btn" type="button">Packages</a>
    
  </form>
</nav>`

renderToDom('#navbar-container', domString)
};

export default navBar;
