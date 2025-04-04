import './styles/normalize.css';
import './styles/index.css';
import { isStorageAvailable } from "./scripts/storageAvailable.js";
import { setDefaultProject } from "./scripts/setDefaultProjects.js";
import { setProject, getProject, getAllProjects } from "./scripts/projectStorage.js";
import { renderProjects } from "./scripts/renderProjects.js";
import { createNewProject } from "./scripts/createNewProject.js";
isStorageAvailable();

setDefaultProject();
renderProjects(getAllProjects());


const modal = document.querySelector('.new-project-btn');
const submitProject = document.querySelector('#submit-project');
const submitTask = document.querySelector('#submit-task');
const newProjectBtn = document.querySelector('.new-project');
const clearProjectsBtn = document.querySelector('.clear-projects');
const closeModalBtn = document.querySelector('#close-modal');
const projectForm = document.querySelector('.project-form');


newProjectBtn.addEventListener('click', () => {
  modal.showModal();
});

clearProjectsBtn.addEventListener('click', () => {
  localStorage.clear();
  renderProjects();
});

submitProject.addEventListener('click', () => {
  createNewProject();
  renderProjects();
});

closeModalBtn.addEventListener('click', () => {
  projectForm.reset();
  modal.close();
});

