export function setProject(project) {
  const projectStringfied = JSON.stringify(project);

  localStorage.setItem(project.id, projectStringfied);
}

export function getProject(key) {
  const storedProjectsString = localStorage.getItem(key);

  if (storedProjectsString) {
    const storedProject = JSON.parse(storedProjectsString);
    return storedProject;
  }

  else {
    console.log('No projects found in localStorage.');
    return null;
  }
}

export function getAllProjects() {
  if (localStorage.length > 0) {
    const storedProjects = []

    for (let i = 1; i < localStorage.length; i++) {
      const project = localStorage.getItem(i);
      storedProjects[i] = JSON.parse(project);
    }

    return storedProjects;
  }

  else {
    console.log('getAllProjects(): No projects found in localStorage.');
    return null;
  }
}
