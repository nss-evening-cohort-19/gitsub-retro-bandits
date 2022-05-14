import users from "../Data/data.js";
import repolist from "./repolist.js";


const createRepoBtn = () => {
  const form = document.querySelector('#new-repo-form');
  form.addEventListener('submit', (e) => {

    e.preventDefault();
    const newRepo = {
      id: users[0].repos.length + 1,
      title: document.querySelector('#repoName').value,
      repoUrl: document.querySelector('#repoDescription').value,
      favorite: false,
    };

      
    users[0].repos.push(newRepo);
    repolist();
    console.log(users);
    form.reset()
  
  });

};

export default createRepoBtn;
