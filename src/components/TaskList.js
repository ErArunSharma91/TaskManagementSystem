import React from "react";
import { List, Box, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, markTaskAsComplete, setEditTask }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom>
          Task List
        </Typography>
        <List>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                markTaskAsComplete={markTaskAsComplete}
                setEditTask={setEditTask}
              />
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No tasks available.
            </Typography>
          )}
        </List>
      </Box>
    </Box>
  );
}

export default TaskList;
