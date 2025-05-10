import { createProjectDiv } from "./project";
import { render } from "./render";

function sidebarListProjects(projectList) {
    const sidebarProjectDiv = document.querySelector('.sidebar-projects');

    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('sb-project-div');

        const projectBtn = document.createElement('button');
        projectBtn.innerText = project.title;        
        projectBtn.addEventListener('click', () => {
            const projectContainerDiv = document.querySelector(".projects");
            projectContainerDiv.innerText = '';
            
            createProjectDiv(project, projectContainerDiv);

            const newTaskBtns = document.querySelectorAll('.new-task-btn');
            newTaskBtns.forEach(button => {
                const taskModal = document.querySelector('.new-task-form');
            
                button.addEventListener('click', (event) => {
                    const projectElement = event.target.closest('.project');
                    const projectId = projectElement.classList.item(1);
                    taskModal.showModal();
                });
            });
        });

        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.innerText = 'X';
        deleteProjectBtn.addEventListener('click', () => {
            localStorage.removeItem(project.id);
            render();
        });

        projectDiv.append(projectBtn, deleteProjectBtn);
        sidebarProjectDiv.appendChild(projectDiv);
    });
}

export { sidebarListProjects }