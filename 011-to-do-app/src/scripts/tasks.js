import { getProject } from "./project";
import { render } from "./render";

function getTask(projectId, taskId) {
  const project = JSON.parse(localStorage.getItem(projectId)); 
  const task = project.tasks[taskId];

  return task;
}

function getAllTasks(projectId) {
  const project = JSON.parse(localStorage.getItem(projectId));
  const tasks = project.tasks;

  return tasks;
}

function createTask(projectId, desc, dueDate) {
  const project = getProject(projectId);
  const isFinished = false;

  project.tasks.push({ isFinished, desc, dueDate });
  localStorage.setItem(projectId, JSON.stringify(project));
}

function deleteTask(projectId, taskId) {
  let project = JSON.parse(localStorage.getItem(projectId));

  project.tasks.splice(taskId, 1);
  project = JSON.stringify(project);
  localStorage.setItem(projectId, project);
}

function createTasksDiv(project, tasksContainerDiv) {
  project.tasks.forEach((task, index) => {
    const tasksDiv = document.createElement('div');
    const taskInfoDiv = document.createElement('div');
    const taskDescDiv = document.createElement('div');
    const taskCheckbox = document.createElement('input');
    const taskDesc = document.createElement('p');
    const taskDate = document.createElement('p');
    const deleteTaskBtn = document.createElement('button');

    taskCheckbox.type = 'checkbox';
    taskDesc.innerText = task.desc;
    taskDate.innerText = task.dueDate;
    deleteTaskBtn.innerText = 'X';

    tasksDiv.classList.add('task');
    taskInfoDiv.classList.add('info-div');
    taskDescDiv.classList.add('desc-div');
    taskDate.classList.add('due-date');
    deleteTaskBtn.classList.add('delete-task-btn', index);

    taskDescDiv.append(taskCheckbox, taskDesc);
    taskInfoDiv.append(taskDescDiv, taskDate);
    tasksDiv.append(taskInfoDiv, deleteTaskBtn);
    tasksContainerDiv.appendChild(tasksDiv);

    deleteTaskBtn.addEventListener('click', () => {
      deleteTask(project.id, index);
      render();
    });
  });
}

export {
  getTask,
  getAllTasks,
  createTask,
  deleteTask,
  createTasksDiv
}

