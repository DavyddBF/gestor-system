import Header from "../../components/Header";
import Nav from "../../components/Nav"

function Clientes() {

  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
        
        
          <div>
            <h2>Cortes de Grama</h2>
            <div>
              <input type="text" />
              <button>Buscar</button>
            </div>
            <div>
              <div>
                <strong>Davyd Ferreira</strong>
                <p>Ultimo serviço: <span>29/07</span></p>
                <p>Próximo serviço: <span>12/08</span></p>
                <p>Valor cobrado: <span>100,00</span></p>

                <button>Feito!!</button>
                <button>Editar</button>
              </div>
            </div>
          </div>



        </div>
      </main>
    </>
  );
}

export default Clientes;