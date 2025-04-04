import { renderProjects } from "./renderProjects";

export default function createNewTask(event) {
    const button = event.target;
    const parentDiv = button.closest('.project');
    const form = document.querySelector('.task-form');

    const id = parentDiv.classList.item(1);
    const taskStringfied = localStorage.getItem(id);
    const task = JSON.parse(taskStringfied);
    
    task.tasks.push(form.elements['task-desc'].value);
    
    const submitTask = document.querySelector('#submit-task');

    submitTask.addEventListener('click', ()=> {
        localStorage.setItem(id, JSON.stringify(task));
        renderProjects();
    });
   
}