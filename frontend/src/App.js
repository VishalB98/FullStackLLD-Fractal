import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Students from "./components/Students";
import Manage from "./components/Manage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route path="/students" element={<Students/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;