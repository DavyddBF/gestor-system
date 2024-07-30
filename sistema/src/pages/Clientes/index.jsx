import './clientes.css';

import Header from "../../components/Header";
import Nav from "../../components/Nav";

function Clientes() {

  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
        
        
          <div className='clientes-container'>
            <div className='clientes-campo'>
              <input className="clientes-pesquisa" type="text" />
              <button className='clientes-pesquisa--btn'>Buscar</button>
            </div>
            <div className='cliente-container'>
              <div className='cliente'>
                <strong className='cliente-nome'>Davyd Ferreira</strong>
                <button className='cliente-info--btn'>Infos</button>
                <p className='cliente-ultimo--servico'>Ultimo serviço: <span>29/07</span></p>
                <p className='cliete-prox--servico'>Próximo serviço: <span>12/08</span></p>
                <p className='cliente-valor'>Valor cobrado: <span>100,00</span></p>

                <button className='cliente-btn--feito'>Feito!!</button>
                <button className='cliente-btn--editar'>Editar</button>
              </div>
            </div>
          </div>



        </div>
      </main>
    </>
  );
}

export default Clientes;