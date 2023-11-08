const express = require('express');
const router = express.Router();
const Task = require('./model/Task'); 

// Defined routes here
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Internal Server Error');
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
