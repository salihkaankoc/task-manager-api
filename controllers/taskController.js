const Task = require('../models/task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get tasks', error });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ user: req.user._id, title, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create task', error });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update task', error });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    await task.remove();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete task', error });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
