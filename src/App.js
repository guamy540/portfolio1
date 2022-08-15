import React from 'react';

import { About, Footer, Skills,  Work, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar className='navbar_index' />
    <About/>
    <Work/>
    <Skills/>
    <Footer/>
</div>
);

export default App;