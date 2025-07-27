import React from 'react';
import lovepic from '../assets/lovepic.jpeg';
import './UserCard.css';

const UserCard = () => {
  return (
    <div className="user-container">
      <p id="user-name">Love Babbar</p>
      <img id="user-img" src={lovepic} alt="love" />
      <p id="user-desc">Description of Love Babbar</p>
    </div>
  );
};

export default UserCard;
