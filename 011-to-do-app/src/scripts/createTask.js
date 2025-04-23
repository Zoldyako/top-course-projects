export function createTask(projectId, isFinished, desc, dueDate ) {
    const project = JSON.parse(localStorage.getItem(projectId));
    
    project.tasks.push({isFinished, desc, dueDate});
    localStorage.setItem(projectId, JSON.stringify(project));
}