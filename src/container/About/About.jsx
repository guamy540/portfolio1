import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {

  return (
    <div>
      <h2 className="head-text">About Me</h2>
      <p>I am a software developer student and a freelance web developer. I make intuitive
        user experiences and dynamic websites that look great on every device. I make clean and professional
        frontend websites and their databases. I've worked with local businesses and artists to collaboratively
        bring their visions to life. My websites are responsive and utilize the latest tools available.
      </p>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);