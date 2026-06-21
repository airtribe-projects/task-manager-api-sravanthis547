class TaskController {
  constructor() {
    this.tasks = [
      {
        id: 1,
        title: "Set up environment",
        description: "Install Node.js, npm, and git",
        completed: true,
      },
      {
        id: 2,
        title: "Create a new project",
        description:
          "Create a new project using the Express application generator",
        completed: true,
      },
      {
        id: 3,
        title: "Install nodemon",
        description: "Install nodemon as a development dependency",
        completed: true,
      },
      {
        id: 4,
        title: "Install Express",
        description: "Install Express",
        completed: false,
      },
      {
        id: 5,
        title: "Install Mongoose",
        description: "Install Mongoose",
        completed: false,
      },
      {
        id: 6,
        title: "Install Morgan",
        description: "Install Morgan",
        completed: false,
      },
      {
        id: 7,
        title: "Install body-parser",
        description: "Install body-parser",
        completed: false,
      },
      {
        id: 8,
        title: "Install cors",
        description: "Install cors",
        completed: false,
      },
      {
        id: 9,
        title: "Install passport",
        description: "Install passport",
        completed: false,
      },
      {
        id: 10,
        title: "Install passport-local",
        description: "Install passport-local",
        completed: false,
      },
      {
        id: 11,
        title: "Install passport-local-mongoose",
        description: "Install passport-local-mongoose",
        completed: false,
      },
      {
        id: 12,
        title: "Install express-session",
        description: "Install express-session",
        completed: false,
      },
      {
        id: 13,
        title: "Install connect-mongo",
        description: "Install connect-mongo",
        completed: false,
      },
      {
        id: 14,
        title: "Install dotenv",
        description: "Install dotenv",
        completed: false,
      },
      {
        id: 15,
        title: "Install jsonwebtoken",
        description: "Install jsonwebtoken",
        completed: false,
      },
    ];
  }

  getAll = () => {
    return this.tasks;
  };
  getTaskById = (id) => {
    var tasks = this.tasks;
    const task = tasks.find((item) => item.id === id);
    return task;
  };
  updateTask = (id, payload) => {
    var tasks = this.tasks;
    const task = tasks.find((item) => item.id === id);
    const { title, description, completed } = payload;
    if (!task) {
      return null;
    }
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    return task;
  };
  createTask = (requestData) => {
    const { title, completed = false, description } = requestData;
    var taskLst = this.tasks;
    const newTask = { id: taskLst.length + 1, title, completed, description };
    taskLst.push(newTask);
    return taskLst;
  };

  deletTask = (id) => {
    let taskLst = this.tasks;
    let idx = taskLst.findIndex((x) => x.id === id);
    if (idx === -1) {
      return null;
    }
    let result = taskLst.splice(idx, 1)[0];
    return result;
  };
}
module.exports = new TaskController();
