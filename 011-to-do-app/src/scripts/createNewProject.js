export function createNewProject() {
  const form = document.querySelector(".project-form");
  const title = form.elements["title"];
  const desc = form.elements["desc"];
  const dueDate = form.elements["date"];
  const priority = form.elements["priority"];
  const status = form.elements["status"];

  let id = localStorage.length;

  const project = {
    id: id,
    title: title.value,
    desc: desc.value,
    dueDate: dueDate.value,
    priority: priority.value,
    status: status.value,
    tasks: [],
    visible: true,
  };

  localStorage.setItem(id, JSON.stringify(project));
}
