import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { profile, circle, reactImg, javascript, node } from '../../assets';
import './About.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const About = () => (
  <div className="app__header app__flex ">

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className='app__header-container1'>
        <h2 className="head-text">About Me</h2>
        <p>I am a software developer and designer who believes:</p>
      </div>
      
      <div className='belief__container'>
        <p><span className='list_emphasis'>Smart design</span> </p>
        <p>leads to</p>
        <p><span className='list_emphasis'>memorable experiences</span></p>
        <p>resulting in </p> 
        <p><span className='list_emphasis'>more sales!</span></p>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[javascript, reactImg, node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(About, 'about');