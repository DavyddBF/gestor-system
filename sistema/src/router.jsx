import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Teste from './pages/Teste';

function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/dashboard' element={ <Dashboard/> } />
      <Route path='/dashboard/teste' element={ <Teste/> } />
    </Routes>
  );
}

export default RouterApp;