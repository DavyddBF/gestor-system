import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;