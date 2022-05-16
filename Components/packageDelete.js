import packageCards from "./packageCards.js";
import users from "../Data/data.js";

const packageDelete = () => {

document.querySelector('#packageCards').addEventListener('click', (e) => {
    const [method, packageDescription] = e.target.id.split('--');

    const index = users[0].packages.findIndex(thingie => thingie.packageDescription === packageDescription)

    if (e.target.id.includes('delete')){
        users[0].packages.splice(index, 1)

        packageCards(users[0].packages)

    }
});
}


export default packageDelete