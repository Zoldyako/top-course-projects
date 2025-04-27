export function render() {
    const projectDiv = document.querySelector('.projects');
    projectDiv.innerText = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(i));
        renderProject(projectDiv, project);
        
    }
}

export function renderProject(projectDiv, project) {

    const projectContainer = document.createElement('div');
    projectContainer.classList.add("project", project.id);

    const projectTitle = document.createElement('h2');
    projectTitle.innerText = project.title;

    const projectDesc = document.createElement('h4');
    projectDesc.innerText = project.desc;

    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('new-task-btn');
    newTaskBtn.innerText = "New task";
    
    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks-container');

    if (project.tasks.length > 0) {
        project.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            const taskIsFinished = document.createElement('input');
            const taskDesc = document.createElement('p');
            const taskDate = document.createElement('p');
            const div = document.createElement('div');

            taskIsFinished.type = "checkbox";
            taskDesc.innerText = task.desc;
            taskDate.innerText = task.dueDate;

            taskDiv.classList.add('task');
            div.append(taskIsFinished, taskDesc);
            taskDiv.append(div, taskDate);
            tasksDiv.appendChild(taskDiv);
        });
    }

    tasksDiv.appendChild(newTaskBtn);
    projectContainer.append(projectTitle, projectDesc, tasksDiv);
    projectDiv.append(projectContainer);
}