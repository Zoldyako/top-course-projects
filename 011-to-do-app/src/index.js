import "./styles/normalize.css";
import "./index.css";
import "./styles/sidebar.css";
import "./styles/projects.css";
import "./styles/buttons.css";
import { render, renderProject } from "./scripts/render.js";
import { deletProjects, createTask, createDefaultProjects } from "./scripts/projectsUtils.js";
// createDefaultProjects();
render();

const newTaskBtns = document.querySelectorAll('.new-task-btn');
newTaskBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const projectDiv = event.target.closest('.project');
        const projectId = projectDiv.classList.item(1);

        const newTaskDialog = document.querySelector('.new-task-form');
        newTaskDialog.showModal();

        const submitTask = document.querySelector('.submit-task');
        const form = document.querySelector('.task-form')
        submitTask.addEventListener('click', () => {
            const newTaskDesc = form.elements['task-desc'].value;
            const newTaskDate = form.elements['task-date'].value;

            createTask(projectId, newTaskDesc, newTaskDate);
            render();
        });
    });
});

const deletBtn = document.querySelector('.delet-projects');
deletBtn.addEventListener('click', () => {
    deletProjects();
    render();
});
