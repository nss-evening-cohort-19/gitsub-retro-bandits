import renderToDom from "../Utils/renderToDom.js";
import users from "../Data/data.js";



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
                <a href="#" class="btn btn-primary btnPadding">Learn More</a>
                
            </div>
        </div>
        `;
    });
       
     
    
    renderToDom('#packageCards', domString)
};
export default packageCards;
