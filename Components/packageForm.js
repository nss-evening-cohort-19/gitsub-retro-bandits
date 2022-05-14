import renderToDom from "../Utils/renderToDom.js";
import users from "../Data/data.js";
import packageCards from "./packageCards.js";


const packageForm = () => {
    const domString = `
    <div class="mb-3">
        <form>
            <label for="exampleFormControlInput1" class="form-label">New Package</label>
            <input type="email" class="form-control" id="packageName" placeholder="New Package Name">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Package Description</label>
            <textarea class="form-control" id="packageDescription" rows="3"></textarea>

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