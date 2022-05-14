import users from "../Data/data.js";
import packageCards from "./packageCards.js";




const packageFormSubmit = () => {


    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {

        e.preventDefault();
        // console.log('ahhhhhh');

        const newPackage = {
            packageName: document.querySelector('#packageName').value,
            packageDescription: document.querySelector('#packageDescription').value,
        }
        users[0].packages.push(newPackage);
         packageCards();
        //  console.log(users);
        form.reset();
        
    });
    // console.log('ahhhhhh');

   

};

export default packageFormSubmit