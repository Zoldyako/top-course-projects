import createNewTask from "./createNewTask";


function createProjectDiv(id, project) {

  project = JSON.parse(project);

  const projectDiv = document.createElement('div');
  const title = document.createElement('h4');
  const desc = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');
  const tasks = document.createElement('div');
  const newTaskBtn = document.createElement('button');

  projectDiv.classList.add('project', id);
  title.innerText = project.title;
  desc.innerText = project.desc;
  dueDate.innerText = `Due date: ${project.dueDate}`;
  priority.innerText = `Priority: ${project.priority}`;

  getTasks(project, tasks);

  newTaskBtn.innerText = 'New Task';
  newTaskBtn.className = 'newTaskBtn';

  newTaskBtn.addEventListener('click', (event) => {
    const modal = document.querySelector('.new-task-btn');
    modal.showModal();
    createNewTask(event);
  });

  tasks.appendChild(newTaskBtn);

  projectDiv.append(title, desc, dueDate, priority, tasks);

  return projectDiv;
}


function getTasks(project, tasks) {
  project.tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    const taskElement = document.createElement('label');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    taskDiv.className = 'task';
    taskElement.innerText = task;
    taskDiv.append(checkbox, taskElement);

    return tasks.appendChild(taskDiv);
  });
}


export function renderProjects() {
  const projectsSection = document.querySelector('.projects-section');
  projectsSection.innerText = '';

  for (let i = 0; i < localStorage.length; i++) {
    const project = localStorage.getItem(i);
    const projectDiv = createProjectDiv(i, project);
    projectDiv ? projectsSection.appendChild(projectDiv) : projectsSection.innetText = 'no projects found';
  };
}
