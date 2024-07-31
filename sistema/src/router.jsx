import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import CadastrarCliente from './pages/CadastrarCliente';

function RouterApp() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/dashboard' element={ <Dashboard/> } />
      <Route path='/dashboard/clientes' element={ <Clientes/> } />
      <Route path='/dashboard/clientes/cadastrar' element={ <CadastrarCliente /> } />
    </Routes>
  );
}

export default RouterApp;