import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TaskItem({ task, deleteTask, markTaskAsComplete, setEditTask }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        backgroundColor: task.isCompleted ? "#f0f0f0" : "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          edge="start"
          checked={task.isCompleted}
          onChange={() => markTaskAsComplete(task.id)}
        />
        <ListItemText
          primary={
            <Typography
              sx={{
                textDecoration: task.isCompleted ? "line-through" : "none",
                fontWeight: "bold",
              }}
            >
              {task.title}
            </Typography>
          }
          secondary={
            <>
              <Typography variant="body2" color="textSecondary">
                {task.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Due: {task.dueDate}
              </Typography>
            </>
          }
        />
      </Box>

      <Box>
        {!task.isCompleted && (
          <IconButton
            edge="end"
            aria-label="mark complete"
            color="primary"
            onClick={() => markTaskAsComplete(task.id)}
          >
            <CheckCircleIcon />
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="edit"
          color="secondary"
          onClick={() => setEditTask(task)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export default TaskItem;
