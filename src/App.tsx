import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router';
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RouterApp/>
    </BrowserRouter>
  )
}

export default App;
