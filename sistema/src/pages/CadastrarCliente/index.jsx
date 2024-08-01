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
            <div className='cadastrar-cliente--btn-container' >
              <p className='cadastrar-cliente-p'>Cadastrar um novo Cliente:</p>

              <button className='cadastrar-cliente-btn'>Cadastrar</button>
            </div>

            <div className='cadastrar-overlay'></div>
            <div className='cadastrar-cliente'>
              <h2>Cadastro</h2>

              <div className='cadastrar-cliente-campo'>
                <label>Nome do Cliente:</label>
                <input 
                  type="text" 
                  placeholder='Digite o nome do Cliente'
                />
              </div>
              <div className='cadastrar-cliente-campo'>
                <label>Telefone/Celular:</label>
                <input 
                  type="text"
                  placeholder='Ex: (12) 3 4567-8998'
                />
              </div>
              <div className='cadastrar-cliente-campo'>
                <label>Complemento:</label>
                <input 
                  type="text"
                  placeholder='Ex: Casa, Condomínio, Lote...'
                />
              </div>
              <div className='cadastrar-cliente-campo'>
                <label>Ultimo serviço:</label>
                <input 
                  type="text"
                  placeholder='Ex: 01/07' 
                />
              </div>
              <div className='cadastrar-cliente-campo'>
                <label>Próximo serviço:</label>
                <input 
                  type="text" 
                  placeholder='Ex: 15/07'
                />
              </div>
              <div className='cadastrar-cliente-campo'>
                <label>Valor cobrado:</label>
                <input 
                  type="text"
                  placeholder='Ex: 100,00'
                />
              </div>
              
              <div className='cadastrar-cliente-btns'>
                <button>Cadastrar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CadastrarCliente;