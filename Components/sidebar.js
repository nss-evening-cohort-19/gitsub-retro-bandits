import renderToDom from "../Utils/renderToDom.js"

const sidebarBody = () => {
  `<div class="card">
  <img src="..." class="card-img-top" alt="user's profile image">
  <div class="card-body">
    <h5 id="userName" class="card-title">${array.key}</h5>
    <h4 id="preferredName" class="card-title">${array.key}</h4>
    <p id="userBio" class="card-text">${array.key}</p>
    <a href="#followBtn" class="btn btn-primary">Follow</a>
    <a href="#sponsorBtn" class="btn btn-primary">Sponsor</a>
    <a href="#ellipsisBtn" class="btn btn-primary">...</a>
    <p id= "userStats" class="card-text"><span class="iconify" data-icon="octicon:people-16" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key} followers • ${array.key} following • <span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key}</p>
    <p id="userLocation" class="card-text"> <span class="iconify" data-icon="ci:location-outline" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key}</p>
    <p id="userEmail" class="card-text"><span class="iconify" data-icon="carbon:email" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key}</p>
    <p id="userWebsite" class="card-text"><span class="iconify" data-icon="akar-icons:link-chain" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key}</p>
    <p id="userTwitter" class="card-text"><span class="iconify" data-icon="icon-park-solid:twitter" style="color: lightgray;" data-width="1" data-height="1"></span> ${array.key}</p>
  </div>
  <div>
    <h4>Highlights</h4>
    <p id="isArcticContributor" class="card-text"><span class="iconify" data-icon="charm:north-star" style="color: lightgray;" data-width="1" data-height="1"></span> Arctic Code Vault Contributor</p>
    <p id="isGithubStar" class="card-text"><span class="iconify" data-icon="ant-design:star-filled" style="color: lightgray;" data-width="1" data-height="1"></span> GitHub Star</p>
    <p id="isPro" class="card-text"><span class="iconify" data-icon="cil:star" style="color: lightgray;" data-width="1" data-height="1"></span> PRO</p>
  </div>
  <div>
    <h4>Organizations</h4>
    <p>icon1 icon2 icon3</p>
  </div>
  <div>
    <h4>Sponsors</h4>
  </div>
</div>`
renderToDom("#sidebarContainer", domString);
};

sidebarBody();

export default sidebarBody;
