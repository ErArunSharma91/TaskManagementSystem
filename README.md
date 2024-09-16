# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Task Management System - Frontend Documentation

## Objective

The **Task Management System** frontend provides a user-friendly interface that allows users to manage their tasks. Users can register, log in, and manage tasks (create, update, delete, and mark tasks as completed). The application also ensures a responsive design for various device sizes, such as mobile, tablet, and desktop.

---

## Technologies Used

- **React.js**: For building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **Redux**: For state management (if applicable).
- **CSS**: For styling the application and ensuring responsiveness.
- **HTML5**: For structuring the web pages.
- **Bootstrap/Material-UI**: (Optional) For enhanced UI components and layout responsiveness.

---

## Features

### 1. **User Authentication**

- **Registration**: Users can register with a username, email, and password through a registration form.
- **Login**: Registered users can log in using their username or email and password. Upon successful login, a JWT token is stored for authenticating future requests.

### 2. **Task Management**

- **Create Task**: Authenticated users can create tasks by entering a title, description, due date, and setting the task status.
- **Edit Task**: Users can edit task details, such as the title, description, due date, or status.
- **Delete Task**: Users can delete tasks.
- **Mark Task as Complete**: Users can update the task status to "Completed."

### 3. **User Interface**

- **Dashboard**: After logging in, users are redirected to a task management dashboard where they can view all tasks.
- **Responsive Design**: The application is fully responsive and works well on mobile, tablet, and desktop screens.

---

## Components

### **Authentication Components**

1. **Register Component**: A form that allows new users to register with their details (username, email, password).
2. **Login Component**: A form that allows users to log in by entering their credentials (username or email, password).

### **Task Components**

1. **Task List Component**: Displays a list of tasks, showing the title, description, status, and due date.
2. **Task Form Component**: A form used to create or edit a task.
3. **Task Details Component**: Displays detailed information about a selected task.
4. **Task Action Buttons**: Includes buttons for editing, marking as complete, and deleting a task.

---

## API Integration

The frontend interacts with the backend via API calls using **Axios**. Below are the API interactions:

### **Authentication API**

1. **POST** `/api/user/register`

   - Registers a new user.

2. **POST** `/api/user/login`
   - Logs in a user and retrieves a JWT token.

### **Task API**

1. **GET** `/api/tasks`

   - Retrieves all tasks for the logged-in user.

2. **POST** `/api/tasks`

   - Creates a new task.

3. **PUT** `/api/tasks/{id}`

   - Updates an existing task.

4. **DELETE** `/api/tasks/{id}`
   - Deletes a task.

---

## Setup Instructions

### Prerequisites

- **Node.js** and **npm**: Ensure that you have Node.js and npm installed on your machine.

### Steps to Set Up

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ErArunSharma91/TaskManagementSystem_Frontend.git
   ```
