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

function createTask(projectId, desc, dueDate, priority) {
  const project = getProject(projectId);
  const isFinished = false;

  project.tasks.push({ isFinished, desc, dueDate, priority });
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
    const taskPriority = document.createElement('p');
    const deleteTaskBtn = document.createElement('button');
    
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-status');
    task.isFinished == true ? taskCheckbox.checked = true : null;
    
    taskDesc.innerText = task.desc;
    taskDate.innerText = task.dueDate;
    deleteTaskBtn.innerText = 'X';
    
    tasksDiv.classList.add('task', index);
    taskInfoDiv.classList.add('info-div');
    taskDescDiv.classList.add('desc-div');
    taskDate.classList.add('due-date');
    deleteTaskBtn.classList.add('delete-task-btn', index);
    
    taskInfoDiv.append(taskDescDiv, taskDate);
    taskDescDiv.append(taskCheckbox, taskDesc);

    if (task.priority != "undefined") {
      taskPriority.innerText = `Priority: ${task.priority}`;
      taskPriority.classList.add('priority');
      taskInfoDiv.append(taskDescDiv, taskDate, taskPriority);
    }
   
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

