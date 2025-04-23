export function render() {
    const projectDiv = document.querySelector('.projects');

    for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(i));
        renderProject(projectDiv, project);
        
    }
}

export function renderProject(projectDiv, project) {

    const projectContainer = document.createElement("div");
    const projectTitle = document.createElement("h2");
    const projectDesc = document.createElement("p");
    const tasksDiv = document.createElement("div");

    projectContainer.classList.add("project", project.id);

    projectTitle.innerText = project.title;
    projectDesc.innerText = project.desc;
    
    if (project.tasks.length > 0) {
        project.tasks.forEach(task => {
            console.log(task.desc);
            const taskDiv = document.createElement("div");
            const taskState = document.createElement("input");
            const taskDesc = document.createElement("p");
            const taskDate = document.createElement("p");

            taskState.type = "checkbox";
            taskDesc.innerText = task.desc;
            taskDate.innerText = task.dueDate;

            taskDiv.append(taskState, taskDesc, taskDate);
            tasksDiv.appendChild(taskDiv);
        });
    }

    projectContainer.append(projectTitle, projectDesc, tasksDiv);
    projectDiv.append(projectContainer);
}