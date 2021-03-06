import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Panjabi from '../Panjabi';
import Gohona from './Gohona';
import Shari from './Shari';
const Body = () => {
  return (
    <div>
<Menu/>

<Routes>
<Route path="/" element={< Navigate to="/shari"/>} />
<Route path="/shari" element={<Shari/>} />
  <Route path="/gohona" element={<Gohona/>} />
  <Route path="/panjabi" element={<Panjabi/>} />


</Routes>  
    </div>
  );
};

export default Body;