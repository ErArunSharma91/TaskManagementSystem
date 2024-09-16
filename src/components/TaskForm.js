import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from "@mui/material";

function TaskForm({ addTask, updateTask, editTask, setEditTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  // Load the task data into the form when editing
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDueDate(editTask.dueDate);
      setIsCompleted(editTask.isCompleted);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      title,
      description,
      dueDate,
      isCompleted,
    };

    if (editTask) {
      updateTask(editTask.id, taskData); // Update the task
    } else {
      addTask(taskData); // Add a new task
    }

    resetForm(); // Clear the form after submit
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setIsCompleted(false);
    setEditTask(null); // Exit edit mode after submission
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {editTask ? "Edit Task" : "Add Task"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            variant="outlined"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            variant="outlined"
            multiline
            rows={4}
          />
          <TextField
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
              />
            }
            label="Completed"
          />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="submit" variant="contained" color="primary">
              {editTask ? "Update Task" : "Add Task"}
            </Button>
            {editTask && (
              <Button variant="outlined" color="secondary" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default TaskForm;
