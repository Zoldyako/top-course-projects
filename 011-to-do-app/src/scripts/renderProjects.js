import createNewTask from "./createNewTask";
import deleteTask from "./deleteTask";
const projectsSection = document.querySelector(".projects-section");

function createProjectDiv(id, project) {
  project = JSON.parse(project);

  const projectDiv = document.createElement("div");
  const projectSubDiv = document.createElement("div");
  const title = document.createElement("h4");
  const desc = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const tasks = document.createElement("div");
  const newTaskBtn = document.createElement("button");

  projectDiv.classList.add("project", id);
  title.innerText = project.title;
  desc.innerText = project.desc;
  dueDate.innerText = `Due date: ${project.dueDate}`;
  priority.innerText = `Priority: ${project.priority}`;

  getTasks(project, tasks);

  newTaskBtn.innerText = "New Task";
  newTaskBtn.className = "newTaskBtn";

  newTaskBtn.addEventListener("click", (event) => {
    const modal = document.querySelector(".new-task-btn");
    modal.showModal();
    createNewTask(event);
  });

  tasks.appendChild(newTaskBtn);

  projectSubDiv.append(desc, dueDate, priority, tasks);
  projectDiv.append(title, projectSubDiv);

  return projectDiv;
}

function getTasks(project, tasks) {
  project.tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    const taskElement = document.createElement("label");
    const checkbox = document.createElement("input");
    const deleteTaskBtn = document.createElement("button");

    checkbox.type = "checkbox";
    taskDiv.classList.add("task", index);
    taskElement.innerText = task;

    deleteTaskBtn.innerText = "X";
    deleteTaskBtn.classList.add("delete-btn");
    deleteTaskBtn.addEventListener("click", () => {
      deleteTask(project, event.currentTarget);
    });

    taskDiv.append(checkbox, taskElement, deleteTaskBtn);

    return tasks.appendChild(taskDiv);
  });
}

export function renderOneProject(id) {
  projectsSection.innerText = "";

  const project = localStorage.getItem(id);
  const projectDiv = createProjectDiv(id, project);

  projectsSection.appendChild(projectDiv);
}

export function renderProjects() {
  projectsSection.innerText = "";

  for (let i = 0; i < localStorage.length; i++) {
    const project = localStorage.getItem(i);
    const projectDiv = createProjectDiv(i, project);
    projectDiv
      ? projectsSection.appendChild(projectDiv)
      : (projectsSection.innetText = "no projects found");
  }
}

export function renderSidebar() {
  const sidebarProjectsDiv = document.querySelector(".sb-projects-list");
  sidebarProjectsDiv.innerText = "";

  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(i));
    const div = document.createElement("div");
    const button = document.createElement("button");

    div.classList.add(`project-${project.id}`, i);
    button.innerText = project.title;
    button.addEventListener("click", () => {
      const projectId = i;
      renderOneProject(projectId);
    });

    div.appendChild(button);
    sidebarProjectsDiv.appendChild(div);
  }
}
