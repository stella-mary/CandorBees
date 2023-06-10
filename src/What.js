
import What from './components/WhatMain/What/What';
import What1 from './components/WhatMain/What1/What1';
import What2 from './components/WhatMain/What2/What2';
import What3 from './components/WhatMain/What3/What3';
import What4 from './components/WhatMain/What4/What4';
import Process from './components/WhatMain/Process/Process'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

function WhatDo() {
  return (
    <div className="App">

      <What />
      <What1 />
      <What2 />
      <What3 />
      <What4 />
      {/* <Route path="/process">
        <Process />
      </Route> */}

    </div>
  );
}

export default WhatDo;
