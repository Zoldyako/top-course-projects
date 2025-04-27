import "./styles/normalize.css";
import "./index.css";
import "./styles/sidebar.css";
import "./styles/projects.css";
import "./styles/buttons.css";
import { render, renderProject } from "./scripts/render.js";
import { deletProjects, createTask, createProject, createDefaultProjects } from "./scripts/projectsUtils.js";
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
        submitTask.addEventListener('click', () => {
            const form = document.querySelector('.task-form');
            const newTaskDesc = form.elements['task-desc'].value;
            const newTaskDate = form.elements['task-date'].value;

            createTask(projectId, newTaskDesc, newTaskDate);
            render();
        });
    });
});

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

const deleteBtn = document.querySelector('.delete-projects');
deleteBtn.addEventListener('click', () => {
    deleteProjects();
    render();
});
