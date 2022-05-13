import renderToDom from "../Utils/renderToDom.js";


const packageForm = () => {
    const domString = `
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">New Package</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="New Package Name">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Package Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    `;
    renderToDom('#newPackageForm', domString)
};

export default packageForm