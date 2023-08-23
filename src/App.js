import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/user/ThemeContext';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SIgnup';
import Logout from './components/auth/Logout';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/user/Profile';
import Settings from './components/user/Settings';
import Contact from './components/user/Contact';
import About from './components/user/About';
import OurService from './components/user/OurService';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);
  const [theme, setTheme] = useState('light');

  const addTask = (title, description, dueDate, dueTime) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const selectedDate = new Date(dueDate).toISOString().split('T')[0];

    if (selectedDate < currentDate) {
      alert('Please select a date in the future');
      return;
    }

    const newTask = new Task(title, description, dueDate, dueTime);
    const updatedUsers = [...users];
    updatedUsers[currentUser] = {
      ...updatedUsers[currentUser],
      tasks: [...updatedUsers[currentUser].tasks, newTask]
    };
    setUsers(updatedUsers);
  };

  const changePassword = (username, currentPassword, newPassword) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user.username === username) {
          // Check if the current password matches the user's password
          if (currentPassword !== user.password) {
            alert('Incorrect current password');
            return user; // Return the original user object without any changes
          }
  
          return { ...user, password: newPassword };
        }
        return user;
      });
      return updatedUsers;
    });
  };
  

  const completeTask = (taskId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user, index) => {
        if (index === currentUser) {
          const updatedTasks = user.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                completed: !task.completed,
              };
            }
            return task;
          });
          return {
            ...user,
            tasks: updatedTasks,
          };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const deleteTask = (taskId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user, index) => {
        if (index === currentUser) {
          const updatedTasks = user.tasks.filter((task) => task.id !== taskId);
          return {
            ...user,
            tasks: updatedTasks,
          };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const addUser = (username, email, password) => {
    let flag = false;
    users.forEach((val) => {
      if (val.username === username && val.email === email) {
        flag = true;
        alert('The user already exists');
        return false;
      }
    });
    if (!flag) {
      const newUser = new User(username, email, password);
      setUsers([...users, newUser]);
      setCurrentUser(users.length);
    }
  };

  const setCurrentUserIndex = (index) => {
    setCurrentUser(index);
  };

  const handleUpdate = (updatedUserData) => {
    const updatedUsers = users.map((user, index) => {
      if (index === currentUser) {
        return { ...user, ...updatedUserData };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const editTask = (taskId, newTitle, newDescription, newDueDate, newDueTime) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user, index) => {
        if (index === currentUser) {
          const updatedTasks = user.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                title: newTitle,
                description: newDescription,
                dueDate: newDueDate,
                dueTime: newDueTime,
              };
            }
            return task;
          });
          return {
            ...user,
            tasks: updatedTasks,
          };
        }
        return user;
      });
      return updatedUsers;
    });
  };

  const userExists = (username, email) => {
    return users.some(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() ||
        user.email.toLowerCase() === email.toLowerCase()
    );
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/dashboard"
              element={
                <Dashboard
                  currentUser={users[currentUser]}
                  addTask={addTask}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask} // Make sure to include this prop
                  theme={theme}
                />
              }
            />

            <Route
              path="/login"
              element={<Login users={users} setCurrentUser={setCurrentUserIndex} />}
            />
            <Route
              path="/signup"
              element={<Signup addUser={addUser} userExists={userExists} />}
            />
            <Route path="/logout" element={<Logout />} />

            <Route
              path="/profile"
              element={<Profile currentUser={users[currentUser]} handleUpdate={handleUpdate} />}
            />

            <Route
              path="/settings"
              element={
                <Settings
                  theme={theme}
                  setTheme={setTheme}
                  changePassword={changePassword}
                  currentUser={users[currentUser]} // Pass the currentUser to Settings component
                />
              }
            />

            <Route path="/contact" element={<Contact />} />

            <Route path="/about" element={<About />} />

            <Route path="/ourservice" element={<OurService />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.tasks = [];
  }
}

class Task {
  constructor(title, description, dueDate, dueTime) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime; // New property for the task's due time
    this.completed = false;
    this.id = Math.floor(Math.random() * 1000);
  }
}