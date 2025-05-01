export function deleteProjects() {
    localStorage.clear();
}

export function deleteTask(projectId, taskId) {
    let project = JSON.parse(localStorage.getItem(projectId));

    project.tasks.splice(taskId, 1);
    project = JSON.stringify(project);
    localStorage.setItem(projectId, project);
}

export function createTask(projectId, desc, dueDate ) {
    const project = JSON.parse(localStorage.getItem(projectId));
    const isFinished = false;

    project.tasks.push({isFinished, desc, dueDate});
    localStorage.setItem(projectId, JSON.stringify(project));
}

export function createProject(title, description) {
    const id = localStorage.length;

    const project = {
        id: id,
        title: title,
        desc: description,
        tasks: []
    }; 

    localStorage.setItem(id, JSON.stringify(project));
}

export function createDefaultProjects() {
    const projectOne = {
        id: 0,
        title: "Default Project One",
        desc: "A default project for you to take inspiration from!",
        tasks: [
            {
                isFinished: false,
                desc: "Make your first own to-do",
                dueDate: "2025-04-30"
            },
            {
                isFinished: false,
                desc: "Make your second to-do",
                dueDate: "2025-04-30"
            },
            {
                isFinished: false,
                desc: "Make your own Project now",
                dueDate: "2025-04-30"
            }
        ]
    }

    const projectTwo = {
        id: 1,
        title: "Default Project Two",
        desc: "A second default project for you to take inspiration!",
        tasks: [
            {
                isFinished: false,
                desc: "You should have made your first to-do at this point",
                dueDate: "2025-05-10"
            },
            {
                isFinished: false,
                desc: "Delete this project",
                dueDate: "2025-05-12"
            }
        ]
    }

    localStorage.setItem(projectOne.id, JSON.stringify(projectOne));
    localStorage.setItem(projectTwo.id, JSON.stringify(projectTwo));
}