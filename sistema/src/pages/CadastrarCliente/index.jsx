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

            <div>
              <div>
                <label>Nome do Cliente:</label>
                <input 
                  type="text" 
                  placeholder='Digite o nome do Cliente'
                />

                <label>Telefone/Celular:</label>
                <input 
                  type="text"
                  placeholder='Ex: (12) 3 4567-8998'
                />

                <label>Complemento:</label>
                <input 
                  type="text"
                  placeholder='Ex: Casa, Condomínio, Lote...'
                />

                <label>Ultimo serviço:</label>
                <input 
                  type="text"
                  placeholder='Ex: 01/07' 
                />

                <label>Próximo serviço:</label>
                <input 
                  type="text" 
                  placeholder='Ex: 15/07'
                />

                <label>Valor cobrado:</label>
                <input 
                  type="text"
                  placeholder='Ex: 100,00'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CadastrarCliente;