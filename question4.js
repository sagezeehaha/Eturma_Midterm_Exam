const express = require("express");
const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Sample task list
let tasks = [];
let idCounter = 1;

// CREATE - Add a new task
app.post("/tasks", (req, res) => {
    const { name, description } = req.body;
    const newTask = { id: idCounter++, name, description };
    tasks.push(newTask);
    res.status(201).json({ message: "Task added!", task: newTask });
});

// READ - View all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// UPDATE - Update a task
app.put("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const { name, description } = req.body;

    const task = tasks.find(t => t.id === taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.name = name || task.name;
    task.description = description || task.description;
    res.json({ message: "Task updated!", task });
});

// DELETE - Remove a task
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.json({ message: "Task deleted!" });
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
