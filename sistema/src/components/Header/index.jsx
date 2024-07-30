import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className='header-container'>
      <Link to='/dashboard' ><h1>Dashboard</h1></Link>
    </header>
  );
}

export default Header;