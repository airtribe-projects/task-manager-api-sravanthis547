const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskcontroller");

//Get all tasks
router.get("/tasks", (req, res) => {
  var _tasks = TaskController.getAll();

  if (!_tasks) {
    return res.status(404).json({ error: "No data found" });
  }
  res.status(200).json(_tasks);
});

//Get task by Id
router.get("/tasks/:id", (req, res) => {
  let result = TaskController.getTaskById(Number(req.params.id));

  if (!result) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json(result);
});

//Creat a task
router.post("/tasks", (req, res) => {
  const { title, status = false, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and Description are required" });
  }
  var tasksLst = TaskController.createTask(req.body);
  res.status(201).json(tasksLst);
});

//Update a task
router.patch("/tasks/:id", (req, res) => {
  const { completed } = req.body;

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be a boolean" });
  }
  let result = TaskController.updateTask(Number(req.params.id), req.body);

  if (!result) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json(result);
});

//Delete a task
router.delete("/tasks/:id", (req, res) => {
  let deletedTask = TaskController.deletTask(Number(req.params.id));
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json(deletedTask);
});

module.exports = router;
