import renderToDom from "../Utils/renderToDom.js"
import users from "../Data/data.js"

let domString = "";
const sponsor = `<span class="iconify" data-icon="akar-icons:heart" style="color: #fc80a5;" data-width="15" data-height="15"></span>`;
const followers = `<span class="iconify" data-icon="octicon:people-16" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const following = `<span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const favorites = `<span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const location = `<span class="iconify" data-icon="ci:location-outline" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const email = ` <span class="iconify" data-icon="carbon:email" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const website = `<span class="iconify" data-icon="akar-icons:link-chain" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const twitter = `<span class="iconify" data-icon="icon-park-solid:twitter" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const arctic = `<span class="iconify" data-icon="charm:north-star" style="color: lightgray;" data-width="15" data-height="15"></span> `;
const star = `<span class="iconify" data-icon="ant-design:star-filled" style="color: lightgray;" data-width="15" data-height="15"></span>`;
const pro = `<span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="15" data-height="15"></span>`;



const sidebarBody = () => {
  users.forEach((user) => {
    domString += `
    <div class="card">
      <img src="${user.photo}" class="card-img-top avatar">
      <div class="card-body">
        <h5 id="name" class="card-title">${user.name}</h5>
        <h4 id="userName" class="card-title">${user.username}</h4>
        <p id="userBio" class="card-text">Bio here</p>
        <a href="#followBtn" class="btn btn-sidebar">Follow</a>
        <a href="#sponsorBtn" class="btn btn-sidebar">${sponsor} Sponsor</a>
        <a href="#ellipsisBtn" class="btn btn-sidebar">...</a>
        <p></p>
        <p id= "userStats" class="card-text">${followers} followers ${following} following ${favorites} favorites</p>
        <p id="userLocation" class="card-text">${location} ${user.location}</p>
        <p id="userEmail" class="card-text">${email} ${user.email}</p>
        <p id="userWebsite" class="card-text">${website} ${user.website}</p>
        <p id="userTwitter" class="card-text">${twitter} Twitter handle</p>
        <p>
          <div class="border-kc">
            <h4>Highlights</h4> 
            <p id="isArcticContributor" class="card-text">${arctic} Arctic Code Vault Contributor</p>
            <p id="isGithubStar" class="card-text">${star} GitHub Star</p>
            <p id="isPro" class="card-text">${pro} PRO</p>
        </p>
        <p>
          </div>
          <div class="border-kc">
            <h4>Organizations</h4>
            <p>icon1 icon2 icon3</p>
          </div>
        </p>
        <p>
          <div class="border-kc">
            <h4>Sponsors</h4>
            <p>${user.sponsors.join(", ")}</p>
          </div>
        </p>
      </div>
    </div>`});
  renderToDom("#sidebarContainer", domString);
};

export default sidebarBody;
