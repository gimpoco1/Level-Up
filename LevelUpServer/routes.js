const express = require('express');
const router = express.Router();
const Task = require('./model/task.js'); 

// Defined routes here
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/tasks/generate', async (req, res) => {
  try {
    // Fetch an existing task from the database
    const existingTask = await Task.findOne();

    if (!existingTask) {
      return res.status(404).json({ message: 'No tasks found in the database' });
    }

    res.json(existingTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Move a task to favorites by ID
  router.put('/tasks/favorite/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { favorite: true },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.json(updatedTask);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
