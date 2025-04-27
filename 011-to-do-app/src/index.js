import "./styles/normalize.css";
import "./index.css";
import "./styles/sidebar.css";
import "./styles/projects.css";
import "./styles/buttons.css";
import { render } from "./scripts/render.js";
import { deletProjects, createDefaultProjects } from "./scripts/projectsUtils.js"

// createDefaultProjects();
render();

const deletBtn = document.querySelector('.delet-projects');
deletBtn.addEventListener('click', () => {
    deletProjects();
    render();
});

