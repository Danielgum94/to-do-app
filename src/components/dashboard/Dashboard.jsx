import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/dashboard.css';
import '../CSS/theme.css'
import ThemeContext from '../user/ThemeContext';
import TaskList from '../tasks/TaskList';

export default function Dashboard(props) {
  const {theme} = useContext(ThemeContext)
  const [showContactDetails, setShowContactDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowContactDetails(true);
  };

  const handleMouseLeave = () => {
    setShowContactDetails(false);
  };

  return (
    <div  className={`dashboard-container ${theme}`}>
      <div className="sidebar bg-primary text-white p-2">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <br/>
          <p>Welcome, {props.currentUser ? props.currentUser.username : 'User'}</p>
          <br/>
          <div className="sidebar-menu">
          <span className="sidebar-link">
            <Link to={'/settings'} className="sidebar-link-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </Link>
          </span>
          <span className="sidebar-link">
            <Link to={'/profile'} className="sidebar-link-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
              <span>Edit Profile</span>
            </Link>
          </span>
          <Link
            to={'/contact'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="sidebar-link"
          >
            <span className="sidebar-link-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
              <span>Contact</span>
            </span>
          </Link>
          {/* Add more sidebar links here */}
        </div>
        <span className="sidebar-link">
            <Link to={'/about'} className="sidebar-link-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
             <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
              <span>About</span>
            </Link>
          </span>
        </div>

        <Link
  to="/logout"
  className="btn btn-outline-primary rounded-pill mt-3"
  style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
>
  Logout
</Link>


      </div>
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        <br/>
        {/* Add your dashboard content and components here */}
        <div className="task-list-container">
          <TaskList
            addTask={props.addTask}
            currentUser={props.currentUser}
            completeTask={props.completeTask}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
          />
        </div>
      </div>
      {showContactDetails && (
        <div className="contact-details bg-light p-3 rounded">
          <h3>To Do App Contact</h3>
          <p>Phone number: +972545642386</p>
          <p>Email: Danielgum35@gmail.com</p>
        </div>
      )}
    </div>
  );
}
