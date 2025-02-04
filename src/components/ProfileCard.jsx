import React, { useState, useEffect } from 'react';
import './ProfileCard.css'; // Importing the CSS file

const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        {/* Profile Picture */}
        <img
          src="/assets/mercypic.jpg"
          alt="profilePicture"
          data-testid="profilePicture"
          className="profile-picture"
        />

        {/* Full Name */}
        <h2 data-testid="fullName" className="profile-name">
          Mercy Njeri Mbao
        </h2>

        {/* Job Title */}
        <h3 data-testid="jobTitle" className="profile-job-title">
          Frontend Developer
        </h3>

        {/* Short Bio */}
        <p data-testid="shortBio" className="profile-bio">
          Passionate Frontend Developer with experience in React, JavaScript, HTML, CSS.
          I specialize in building responsive and user-friendly web applications. Constantly learning and
          improving, I aim to create seamless digital experiences. 🚀
        </p>

        {/* Email Address */}
        <div data-testid="emailAddress" className="profile-email">
          📧 <span >Email:</span> njerimercy77@gmail.com
        </div>

        {/* Social Links */}
        <div className="social-links" data-testid="socialLinks">
          <h4>Connect with Me</h4>
          <div>
            <a href="https://github.com/mercie-ux" >
              Github
            </a>
            <a href="#">
              Twitter
            </a>
            <a href="#">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Location */}
        <div data-testid="currentLocation" className="profile-location">
          📍 Nairobi, Kenya
        </div>

        {/* Current Time UTC */}
        <div data-testid="currentTimeUTC" className="profile-time">
          🕒 {currentTime}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
