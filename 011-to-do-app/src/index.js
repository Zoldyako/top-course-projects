import "./styles/normalize.css";
import "./index.css";
import "./styles/sidebar.css";
import "./styles/projects.css";
import "./styles/buttons.css";
import { render } from "./scripts/render.js";
import { deleteProjects, createProject, createDefaultProjects } from "./scripts/projectsUtils.js";

render();

const newProjectBtn = document.querySelector('.new-project-btn');
newProjectBtn.addEventListener('click', () => {
    const newProjectDialog = document.querySelector('.new-project-form');
    newProjectDialog.showModal();

    const submitProject = document.querySelector('.submit-project');
    submitProject.addEventListener('click', () => {
        const form = document.querySelector('.project-form');
        const projectTitle = form.elements['title'].value;
        const projectDesc = form.elements['desc'].value;

        createProject(projectTitle, projectDesc);
        render();
    });
});


const deleteBtn = document.querySelector('.delete-projects-btn');
deleteBtn.addEventListener('click', () => {
    deleteProjects();
    render();
});

const defaultProjectsBtn = document.querySelector('.default-projects-btn');
defaultProjectsBtn.addEventListener('click', () => {
    createDefaultProjects();
    render();
})