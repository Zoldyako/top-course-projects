import { deleteTask } from "./projectsUtils";
import { addNewTaskButton } from './eventListeners';

export function render() {
    const projectDiv = document.querySelector('.projects');
    projectDiv.innerText = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(i));
        renderProject(projectDiv, project);
        
    }
}

function renderTask(project, tasksContainerDiv) {
    project.tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        const infoDiv = document.createElement('div');
        const descDiv = document.createElement('div');            
        const taskIsFinished = document.createElement('input');
        const taskDesc = document.createElement('p');
        const taskDate = document.createElement('p');
        const deleteTaskBtn = document.createElement('button');

        deleteTaskBtn.classList.add('delete-task-btn', index);
        taskDiv.classList.add('task');
        infoDiv.classList.add('info-div');
        taskDate.classList.add('due-date');
        descDiv.classList.add('desc-div');

        taskIsFinished.type = "checkbox";
        taskDesc.innerText = task.desc;
        taskDate.innerText = task.dueDate;
        deleteTaskBtn.innerText = "X";

        descDiv.append(taskIsFinished, taskDesc);
        infoDiv.append(descDiv, taskDate);            
        taskDiv.append(infoDiv, deleteTaskBtn);
        tasksContainerDiv.appendChild(taskDiv);

        deleteTaskBtn.addEventListener('click', () => {
            deleteTask(project.id, index);
            render();
        });
    });
}

export function renderProject(projectDiv, project) {

    const projectContainer = document.createElement('div');
    projectContainer.classList.add("project", project.id);

    const projectTitle = document.createElement('h2');
    projectTitle.innerText = project.title;

    const projectDesc = document.createElement('h4');
    projectDesc.innerText = project.desc;

    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('new-task-btn');
    newTaskBtn.innerText = "New task";
    
    const tasksContainerDiv = document.createElement('div');
    tasksContainerDiv.classList.add('tasks-container');

    if (project.tasks.length > 0) {
        renderTask(project, tasksContainerDiv);
    }

    const newTaskBtns = document.querySelectorAll('.new-task-btn');
    addNewTaskButton(newTaskBtns);

    tasksContainerDiv.appendChild(newTaskBtn);
    projectContainer.append(projectTitle, projectDesc, tasksContainerDiv);
    projectDiv.append(projectContainer);
}