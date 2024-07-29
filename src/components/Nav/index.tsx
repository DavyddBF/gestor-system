import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav className='nav-container'>
      <ul>
        <li className='nav-lista'>
          <Link className='nav-lista--link' to='/'>Todos clientes</Link>
        </li>
        <li className='nav-lista'>
          <Link className='nav-lista--link' to='/'>Algum item</Link>
        </li>
        <li className='nav-lista'>
          <Link className='nav-lista--link' to='/'>Algum item</Link>
        </li>
        <li className='nav-lista'>
          <Link className='nav-lista--link' to='/'>Algum item</Link>
        </li>
        <li className='nav-lista'>
          <Link className='nav-lista--link' to='/'>Algum item</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;