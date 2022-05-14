import renderToDom from "../Utils/renderToDom.js";
import users from "../Data/data.js";
import packageCards from "./packageCards.js";


const packageForm = () => {
    const domString = `
    <div class="mb-3">
        <form id="form">

        <div class="form-floating mb-3">
        <input type="text" class="form-control" id="packageName" placeholder="name@example.com">
        <label for="floatingInput">New Package Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="packageDescription" placeholder="Password">
        <label for="floatingPassword">Description</label>
      </div>
           <button type="submit" class="btn btn-light" id="submit">Submit</button>
        </form>
    </div>

    `;
    renderToDom('#newPackageForm', domString)
};

// const eventListeners = () => {

//     const form = document.querySelector('form');
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log('ahhhhhh');

//         const newPackageObj = {
//             packageName: document.querySelector('#packageName').value,
//             packageDescription: document.querySelector('#packageDescription').value,
//         }
//         users.push(newPackageObj);
//     });
//     console.log('ahhhhhh');
//     packageCards(users)
//     form.reset();
// };
// eventListeners();

export default packageForm