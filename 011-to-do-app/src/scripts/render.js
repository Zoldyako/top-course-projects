import { 
  getAllProjects, 
  createProjectDiv, 
  createDefaultProjects, 
  deleteAllProjects, 
  createProject 
} from './project';

import { createTask } from './tasks';
import { sidebarListProjects } from './sidebar';


let projectId = null;

function renderOnLoad() {
  
  // 
  // --- SIDEBAR BUTTONS ---
  // 

  const allProjectsBtn = document.querySelector('.all-projects-btn');
  const createNewProjectBtn = document.querySelector('.new-project-btn');
  const createDefaultProjectsBtn = document.querySelector('.default-projects-btn');
  const deleteAllProjectsBtn = document.querySelector('.delete-projects-btn');
  
  allProjectsBtn.addEventListener('click', () => {
    render();
  });

  const projectModal = document.querySelector('.new-project-form');
  createNewProjectBtn.addEventListener('click', () => {
    projectModal.showModal();
    render();
  });

  const submitProject = document.querySelector('.submit-project');
  submitProject.addEventListener('click', () => {
    const form = document.querySelector('.project-form');
    const projectTitle = form.elements['title'].value;
    const projectDesc = form.elements['title'].value;
    createProject(projectTitle, projectDesc);
    form.reset();
    render();
  });
  

  createDefaultProjectsBtn.addEventListener('click', () => {
    createDefaultProjects();
    render();
  });

  deleteAllProjectsBtn.addEventListener('click', () => {
    deleteAllProjects();
    render();
  });
  
  //
  // --- PROJECTS CONTAINER ---
  // 

  const submitTaskBtn = document.querySelector('.submit-task');
  submitTaskBtn.addEventListener('click', () => {
    const taskForm = document.querySelector('.task-form');
    const taskDesc = taskForm.elements['task-desc'].value;
    const taskDate = taskForm.elements['task-date'].value;
    createTask(projectId, taskDesc, taskDate);
    taskForm.reset();

    render();
  });

  render();
}

function render() {
  const projectList = getAllProjects();
  renderProjectDiv(projectList);
  // 
  // --- SIDEBAR BUTTONS ---
  // 

  const sidebarProjectsDiv = document.querySelector('.sidebar-projects');

  sidebarProjectsDiv.innerText = "";
  sidebarListProjects(projectList);

  // 
  // --- PROJECTS CONTAINER ---
  // 

  const newTaskBtns = document.querySelectorAll('.new-task-btn');
  newTaskBtns.forEach(button => {
    const taskModal = document.querySelector('.new-task-form');

    button.addEventListener('click', (event) => {
        const projectElement = event.target.closest('.project');
        projectId = projectElement.classList.item(1);
        taskModal.showModal();
    });
  });
}

function renderProjectDiv(projectList) {
  
  const projectContainerDiv = document.querySelector('.projects');
  projectContainerDiv.innerText = "";
 
  projectList.forEach(project => {
    project ? createProjectDiv(project, projectContainerDiv) : null;
  });
}


export { renderOnLoad, render }