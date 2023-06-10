
import Project from './components/ProjectMain/Project/Project';
import Project1 from './components/ProjectMain/Project1/Project1';
import Project2 from './components/ProjectMain/Project2/Project2';
import './App.css';

function WhatDo() {
  return (
    <div className="App">
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

export default WhatDo;
