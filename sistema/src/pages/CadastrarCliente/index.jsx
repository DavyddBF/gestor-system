import './cadastrarCliente.css';

import Header from '../../components/Header';
import Nav from '../../components/Nav';

function CadastrarCliente() {
  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
          
          <div className='cadastrar-cliente-container'>
            <div>
              <p className='cadastrar-cliente-p'>Cadastrar um novo Cliente:</p>

              <button className='cadastrar-cliente-btn'>Cadastrar</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CadastrarCliente;