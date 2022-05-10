import renderToDom from "../Utils/renderToDom.js";

const siteFooter = () => {
    const domString = `
<footer>
    <p>GitHub, Inc.</p>

    <ul class="nav justify-content-center">
        
        <li class="nav-item">
            <a class="nav-link" href="#">Terms</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Privacy</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Security</a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link" href="#">Status</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
        </li>

        

        <li class="nav-item">
            <a class="nav-link" href="#">Contact GitHub</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">API</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">Training</a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
        
    </ul>
</footer>


    `
    renderToDom('#footerContainer', domString)
};
export default siteFooter