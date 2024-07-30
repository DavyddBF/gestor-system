import Header from "../../components/Header";
import Nav from "../../components/Nav"

function Clientes() {

  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
          <div>TODOS OS CLIENTES AQUI</div>
        </div>
      </main>
    </>
  );
}

export default Clientes;