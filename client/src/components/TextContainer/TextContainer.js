import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    {/*
     <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
     <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
     <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> 
    */}
    <h1>Vaarta: A No NonSense Chat-App <span role="img" aria-label="emoji">💬</span></h1>
    <h2>Gather in the same rooms to chat!! <span role="img" aria-label="emoji">❤️</span></h2>
    <h2>No login/signup BS!!<span role="img" aria-label="emoji">⬅️</span></h2> 
    <h2>For the source code, visit <a href = "https://github.com/hinduBale/HeadwigAndNagini">here</a></h2>
     </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;