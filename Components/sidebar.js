import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"

let domString = "";

const sidebarBody = () => {
  users.forEach((user) => {
    domString += `<div class="card">
    <img src="..." class="card-img-top" alt="user's profile image">
    <div class="card-body">
      <h5 id="name" class="card-title">${user.name}</h5>
      <h4 id="userName" class="card-title">${user.username}</h4>
      <p id="userBio" class="card-text">Bio here</p>
      <a href="#followBtn" class="btn btn-primary">Follow</a>
      <a href="#sponsorBtn" class="btn btn-primary">Sponsor</a>
      <a href="#ellipsisBtn" class="btn btn-primary">...</a>
      <span class="iconify" data-icon="octicon:people-16" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id= "userStats1" class="card-text"> followers</p>
      <span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id= "userStats2" class="card-text">following</p>
      <span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id= "userStats3" class="card-text">favorites</p>
      <span class="iconify" data-icon="ci:location-outline" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="userLocation" class="card-text">${user.location}</p>
      <span class="iconify" data-icon="carbon:email" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="userEmail" class="card-text">${user.email}</p>
      <span class="iconify" data-icon="akar-icons:link-chain" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="userWebsite" class="card-text">${user.website}</p>
      <span class="iconify" data-icon="icon-park-solid:twitter" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="userTwitter" class="card-text">Twitter handle</p>
    </div>
    <div>
      <h4>Highlights</h4>
      <span class="iconify" data-icon="charm:north-star" style="color: lightgray;" data-width="1" data-height="1"></span>  
      <p id="isArcticContributor" class="card-text">Arctic Code Vault Contributor</p>
      <span class="iconify" data-icon="ant-design:star-filled" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="isGithubStar" class="card-text">GitHub Star</p>
      <span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="1" data-height="1"></span>
      <p id="isPro" class="card-text">PRO</p>
    </div>
    <div>
      <h4>Organizations</h4>
      <p>icon1 icon2 icon3</p>
    </div>
    <div>
      <h4>Sponsors</h4>
      <p>${user.sponsors}</p>
    </div>
  </div>`});
  renderToDom("#sidebarContainer", domString);
};

export default sidebarBody;
