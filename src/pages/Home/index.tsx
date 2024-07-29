import Header from "../../components/Header";
import Nav from "../../components/Nav";

import './home.css';

function Home() {
  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
          <h1>Olá Mundo</h1>
        </div>
      </main>
    </>
  );  
}

export default Home;