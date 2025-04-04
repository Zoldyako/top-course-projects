  const project = {
    id: 0,
    title: "Default Project",
    desc: "Desc for default project 1.",
    dueDate: "2025-03-30",
    priority: "high",
    status: "started",
    tasks: [
      "Make your first to-do",
      "Make your secong to-do",
      "Make your chocolate milk to-do",
      "Make your to-do",
    ],
    visible: true
  };

  const project2 = {
    id: 1,
    title: "Default Project 2",
    desc: "Desc for default project 2.",
    dueDate: "2025-12-14",
    priority: "low",
    status: "paused",
    tasks: [
      "Make your first to-do",
      "Make your secong to-do"
    ],
    visible: true
  };


export function setDefaultProject() {
  localStorage.setItem(project.id, JSON.stringify(project));
  localStorage.setItem(project2.id, JSON.stringify(project2));
}
