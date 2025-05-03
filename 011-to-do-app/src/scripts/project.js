import { createTasksDiv } from "./tasks";

function getProject(projectId) {
  console.log(`getProject: ${projectId}`);
  return JSON.parse(localStorage.getItem(projectId));
}

function getAllProjects() {
  let allProjects = [];

  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(i));
    allProjects.push(project);
  }

  return allProjects;
}

function deleteProject(projectId) {
  localStorage.removeItem(projectId);
}

function deleteAllProjects() {
  localStorage.clear();
}

function createProject(title, description) {
  const id = localStorage.length;

  const project = {
    id: id,
    title: title,
    desc: description,
    tasks: [],
  };

  localStorage.setItem(id, JSON.stringify(project));
}

function createDefaultProjects() {
  const projectOne = {
    id: 0,
    title: "Default Project One",
    desc: "A default project for you to take inspiration from!",
    tasks: [
      {
        isFinished: false,
        desc: "Make your first own to-do",
        dueDate: "2025-04-30",
      },
      {
        isFinished: false,
        desc: "Make your second to-do",
        dueDate: "2025-04-30",
      },
      {
        isFinished: false,
        desc: "Make your own Project now",
        dueDate: "2025-04-30",
      },
    ],
  };

  const projectTwo = {
    id: 1,
    title: "Default Project Two",
    desc: "A second default project for you to take inspiration!",
    tasks: [
      {
        isFinished: false,
        desc: "You should have made your first to-do at this point",
        dueDate: "2025-05-10",
      },
      {
        isFinished: false,
        desc: "Delete this project",
        dueDate: "2025-05-12",
      },
    ],
  };

  localStorage.setItem(projectOne.id, JSON.stringify(projectOne));
  localStorage.setItem(projectTwo.id, JSON.stringify(projectTwo));
}

function createProjectDiv(project, projectContainerDiv) {
  const projectDiv = document.createElement("div");
  const projectTitle = document.createElement("h2");
  const projectDesc = document.createElement("h4");
  const tasksContainer = document.createElement("div");
  const newTaskBtn = document.createElement("button");
  
  projectTitle.innerText = project.title;
  projectDesc.innerText = project.desc;
  newTaskBtn.innerText = 'New Task';
  
  projectContainerDiv.classList.add("project", project.id);
  projectDiv.classList.add('project', project.id);
  tasksContainer.classList.add('tasks-container');
  newTaskBtn.classList.add('new-task-btn');
  
  if (project.tasks.length) {
    createTasksDiv(project, tasksContainer);
  }

  projectDiv.append(projectTitle, projectDesc, tasksContainer, newTaskBtn);
  projectContainerDiv.appendChild(projectDiv);
}

export {
  getProject,
  getAllProjects,
  deleteProject,
  deleteAllProjects,
  createProject,
  createDefaultProjects,
  createProjectDiv
};
