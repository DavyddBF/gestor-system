import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';

function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/dashboard' element={ <Dashboard/> } />
      <Route path='/dashboard/clientes' element={ <Clientes/> } />
    </Routes>
  );
}

export default RouterApp;