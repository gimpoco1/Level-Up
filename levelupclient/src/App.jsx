import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TaskList from './components/TASKLIST/TaskList';
import CompletedTasks from './components/TASKBAR/CompletedTasks/CompletedTasks';
import FavoriteTasks from './components/TASKBAR/FavoriteTasks/FavoriteTasks';

const App = () => {
  return (
    <Router>
      <div>
        <hr />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/favorite" element={<FavoriteTasks />} />
        </Routes>
      </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/completed">Completed </Link>
          <Link to="/favorite">Favorite </Link>
        </nav>
    </Router>
  );
};

export default App;