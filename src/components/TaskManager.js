import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box, Typography, Paper, Alert } from "@mui/material";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [editTask, setEditTask] = useState(null); // Stores the task being edited

  // Fetch all tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5028/api/task", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTasks(response.data);
    } catch (err) {
      setError("Failed to fetch tasks");
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post("http://localhost:5028/api/task/add", task, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchTasks(); // Refresh the task list after adding
    } catch (err) {
      setError("Failed to add task");
    }
  };

  const updateTask = async (taskId, task) => {
    try {
      await axios.put(`http://localhost:5028/api/task/edit/${taskId}`, task, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchTasks(); // Refresh the task list after editing
      setEditTask(null); // Clear the edit mode
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5028/api/task/delete/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchTasks(); // Refresh the task list after deleting
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  const markTaskAsComplete = async (taskId) => {
    try {
      await axios.put(
        `http://localhost:5028/api/task/complete/${taskId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchTasks(); // Refresh the task list after marking complete
    } catch (err) {
      setError("Failed to mark task as complete");
    }
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      {error && (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Alert>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Left side: Task Form */}
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            flex: 1,
            width: { xs: "100%", md: "50%" }, // Full width on mobile, 40% on desktop
            boxSizing: "border-box",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Task
          </Typography>
          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </Paper>

        {/* Right side: Task List */}
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            flex: 2,
            width: { xs: "100%", md: "50%" }, // Full width on mobile, 60% on desktop
            boxSizing: "border-box",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Task List
          </Typography>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            markTaskAsComplete={markTaskAsComplete}
            setEditTask={setEditTask}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default TaskManager;
