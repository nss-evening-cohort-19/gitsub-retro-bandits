# GITSUB

# About The Project
   This is the first group project for NSS E-19 front-end development. We were tasked with cloning [github.com](https://github.com/).
   
   We created 4 pages, an Overview, Repos, Projects, and Packages page. All 4 pages use loops and manipulate data dynamically with javascript.

## Javascript Loops for each page

### Overview Page
```javascript
const pinnedReposOnDom = () => {
  let repoContent = ""
  pinnedRepoArray.forEach((repo) => {
      repoContent += `
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <a href="${repo.repoUrl}" class="card-link">${repo.title}</a>
            </div>
          </div>
        </div>
      `
  });
  
  renderToDom("#pinnedRepos", repoContent);
};

export default pinnedReposOnDom;
```

### Repos Page

```javascript
const reposArray = users[0].repos
 const repolist = (array) => {
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
```

### Projects Page
```javascript
const projectsOnDom = () => {
  let domString = ''
  users[0].projects.forEach(project => {
    domString += `<a href="#" class="list-group-item list-group-item-action"><h3>${project.projectName}</h3><a href="${project.projectUrl}" target=>${project.projectUrl}</a> <button type="button" class="btn btn-danger btn-sm" id="delete--${project.projectName}">Delete</button>
    </a>` 
    
  });
  renderToDom("#list-container", domString)
};

export default projectsOnDom;
```

### Packages Page
```javascript
const packageCards = () => {
    let domString = ''
    users[0].packages.forEach(packs => { 
         domString += `
    
        <div class="card" style="width: 18rem;">
        <div>
       <button type="button" class="btn btn-outline-danger" id="delete--${packs.packageDescription}">X</button>
       </div>
            <div class="card-body">
                <h5 class="card-title">${packs.packageName}</h5>
                <p class="card-text">${packs.packageDescription}</p>
                <a href="#" class="btn btn-primary">Learn More</a>
                
            </div>
        </div>
        `;
    });
       
     
    
    renderToDom('#packageCards', domString)
};
export default packageCards;
```

## Modularized and Componentized!
   We modularized our app for a simpler workflow and to help avoid merge conflicts in our code.

![Modularization](/Assets/Images/modular.png)

# Our site in action
### creating a Repo
![newRepoGif](/Assets/Images/New%20Repo%20GIf.gif)

### Creating a Project
![newProjectGif](/Assets/Images/newProjectGif.gif)

### Creating a Package
![newPackageGif](/Assets/Images/newPackageGif.gif)

## Contributors

<a href="https://github.com/nss-evening-cohort-19/gitsub-retro-bandits/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nss-evening-cohort-19/gitsub-retro-bandits" />
</a>
