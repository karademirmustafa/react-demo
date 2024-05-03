import { Routes, Route} from 'react-router-dom';
import React from "react";
import City from './components/City.jsx';
import Homepage from './pages/Homepage.jsx';


function Router() {
  return (
    <>
      <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/city" element={<City />} />
      </Routes> 
    </>
  );
}


export default Router;
