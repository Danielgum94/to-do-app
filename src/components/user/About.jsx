import React from 'react';
import '../CSS/about.css';
import { useNavigate } from 'react-router-dom';

export default function About() {

  const nav = useNavigate()

  const handleClick = () => {
      nav('/ourservice')
  }

  const goToDash = () => {
    nav('/dashboard')
  }

  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <h2>Welcome to the App!</h2>
          <p className="about-text">
            This powerful task management app is designed to revolutionize the way you stay organized and boost your productivity. With its intuitive interface and advanced features, it empowers you to effortlessly manage your tasks and achieve your goals.
          </p>
          <p className="about-text">
            The app offers a range of flexible task management options, allowing you to set due dates, add detailed descriptions, and categorize tasks based on priority. It also provides seamless collaboration, enabling you to share tasks and collaborate with your team members or family members in real-time.
          </p>
          <h2>About the Developer</h2>
          <div className="developer-details">
            <p className="about-text">Experienced Full Stack Developer</p>
            <p className="about-text">Passionate about creating innovative solutions that simplify everyday life</p>
          </div>
          <p className="about-text">
            Daniel has poured his expertise and creativity into developing this app to provide a seamless and delightful user experience. With a focus on user-centric design and cutting-edge technologies, he aims to make task management a breeze for users across the globe.
          </p>
          <p className="about-text">
            Whether you're a student juggling multiple assignments, a professional managing complex projects, or a busy individual seeking better organization, this app is your ultimate solution. Experience the power of efficient task management and take control of your life today!
          </p>
          <p className="about-text">
            For any inquiries, feedback, or collaboration opportunities, feel free to reach out to Daniel. He is always excited to connect with like-minded individuals who share a passion for productivity and innovation.
          </p>
          <div className="text-center">
      <button className="btn btn-secondary" onClick={goToDash}>Dashboard</button>
        </div>
        <div className="folded-edge" onClick={handleClick}>
       <span className="button-text">Our Services</span>
    </div>
        </div>
      </div>
    </div>
  );
}
