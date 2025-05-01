import { createTask, deleteTask } from "./projectsUtils";
import { render } from "./render";

export function addNewTaskButton(newTaskBtns) {
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
}