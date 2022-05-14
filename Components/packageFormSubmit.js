import users from "../Data/data.js";
import packageCards from "./packageCards.js";
import packageForm from "./packageForm.js";



const packageFormSubmit = () => {
const eventListeners = () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
         console.log('ahhhhhh');
         e.preventDefault();
       

        const newPackageObj = {
            packageName: document.querySelector('#packageName').value,
            packageDescription: document.querySelector('#packageDescription').value,
        }
        users[0].packages.push(newPackageObj);
    });
    // console.log('ahhhhhh');

    packageCards(users[0].packages)
    form.reset();
};
eventListeners();
};
packageForm();
export default packageFormSubmit