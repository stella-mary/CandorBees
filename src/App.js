import Navbar from './components/Navbar/Navbar';
import HomeMain from './Home'
import ProjectMain from './Project'
import WhatDo from './What'
// import Product from '
import Project3 from './components/ProjectMain/Project3/Project3';
import Process from './components/WhatMain/Process/Process'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="what" element={<WhatDo />} />
          <Route path="process" element={<Process />} />
          <Route path="project" element={<ProjectMain />} />
          <Route path="project3" element={<Project3 />} />
          {/* <Route path="product" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
