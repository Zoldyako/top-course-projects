import './styles/normalize.css';
import './styles/index.css';
import './styles/buttons.css';
import { setDefaultProjects } from "./scripts/setDefaultProjects.js";
import { renderProjects } from "./scripts/renderProjects.js";
import { createNewProject } from "./scripts/createNewProject.js";


const modal = document.querySelector('.new-project-btn');
const submitProject = document.querySelector('#submit-project');
const newProjectBtn = document.querySelector('.new-project');
const deleteAll = document.querySelector('.clear-projects');
const closeModalBtn = document.querySelector('#close-modal');
const projectForm = document.querySelector('.project-form');
const defaultProjectBtn = document.querySelector('.default-projects');


defaultProjectBtn.addEventListener('click', () => {
  setDefaultProjects();
  renderProjects();
});

newProjectBtn.addEventListener('click', () => {
  modal.showModal();
});

deleteAll.addEventListener('click', () => {
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

renderProjects();
