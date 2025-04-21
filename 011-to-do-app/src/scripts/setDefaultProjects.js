const projects = [
  {
    id: undefined,
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
  },
  {
    id: undefined,
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
  }
];

export function setDefaultProjects() {

  projects.forEach(project => {
    const localStorageLengh = localStorage.length;
    project.id = localStorageLengh;
    localStorage.setItem(project.id, JSON.stringify(project));

  });
}
