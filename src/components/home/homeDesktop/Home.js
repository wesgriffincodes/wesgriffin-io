import React, { useState } from 'react';
import './Home.scss';
import ScrollBar from './ScrollBar';
import Footer from '../../footer/Footer';
import HomeMain from './HomeMain';
import { projects } from '../../../services/projects'; 

const Home = () => {
  
  const [upCount, setUpCount] = useState(2);
  const [downCount, setDownCount] = useState(0);
  
  const upClicked = () => {
    setUpCount(upCount >= 3 ? upCount - 3 : upCount + 1);
    setDownCount(downCount >= 3 ? downCount - 3 : downCount + 1);
  };
  
  const downClicked = () => {
    setUpCount(upCount <= 0 ? upCount + 3 : upCount - 1);
    setDownCount(downCount <= 0 ? downCount + 3 : downCount - 1);
  };
  
  const mainList = projects.map(project => project.id === upCount - 1 ?
    <HomeMain key={project.id} project={project} upCount={upCount}/> : project.id === upCount + 3 ? <HomeMain key={project.id} project={project} upCount={upCount}/> : ''
  );
  
  return (
    <>
      <div className='Home'>
        <div className='scrollBar'>
          <ScrollBar upClicked={upClicked} upCount={upCount} downCount={downCount} downClicked={downClicked}/>
        </div>
        <div className='main'>
          {mainList}
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;
