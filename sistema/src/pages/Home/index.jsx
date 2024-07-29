import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className='home-container'>
      <Link to='/dashboard'><h1>BEM VINDO AO HOME</h1></Link>
    </div>
  );  
}

export default Home;