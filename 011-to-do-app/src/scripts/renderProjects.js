import createNewTask from "./createNewTask";

function createProjectCard(id, project, projectsSection) {
  
  project = JSON.parse(project)
  
  const projectCard = document.createElement('div');
  projectCard.classList.add('project', id);
  
  const title = document.createElement('h4');
  title.innerText = project.title;
  
  const desc = document.createElement('p');
  desc.innerText = project.desc;
  
  const dueDate = document.createElement('p');
  dueDate.innerText = `Due date: ${project.dueDate}`;
  
  const priority = document.createElement('p');
  priority.innerText = `Priority: ${project.priority}`;
  
  const tasks = document.createElement('div');
  

  project.tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskElement = document.createElement('label', );
    taskElement.innerText = task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    taskDiv.append(checkbox,taskElement)
    tasks.appendChild(taskDiv);

    
  });

  const newTaskBtn = document.createElement('button');
  newTaskBtn.innerText = 'New Task';
  newTaskBtn.className = 'newTaskBtn';

  tasks.appendChild(newTaskBtn);

  newTaskBtn.addEventListener('click', (event) => {
    const modal = document.querySelector('.new-task-btn');
    modal.showModal();
    createNewTask(event);
  });

  projectCard.append(title, desc, dueDate, priority, tasks);
  projectsSection.appendChild(projectCard);
}

export function renderProjects() {
  const projectsSection = document.querySelector('.projects-section');
  projectsSection.innerText = '';

  for (let i = 0; i < localStorage.length; i++) {
    createProjectCard(i, localStorage.getItem(i), projectsSection);
  }
}
