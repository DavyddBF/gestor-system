import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import iconPessoa from '../../assets/pessoa-icon.svg';

import './info.css';
import './clientes.css';

import Header from "../../components/Header";
import Nav from "../../components/Nav";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [clienteInfo, setClienteInfo] = useState(false);

  useEffect(() => {
    async function carregaClientes() {
      const refDoc = collection(db, 'clientes');
      const unsub = onSnapshot(refDoc, snapshot => {
        let listaClientes = [];

        snapshot.forEach( cliente => {
          listaClientes.push({
            id: cliente.id,
            nome: cliente.data().nome,
            telefone: cliente.data().telefone,
            ultimaData: cliente.data().ultimaData,
            proxData: cliente.data().proxData,
            valor: cliente.data().valor
          });
        });

        setClientes(listaClientes);
      });

      return () => unsub();
    }

    carregaClientes();
  }, []);

  async function buscarTodosClientes() {
    const refDoc = collection(db, 'clientes');
    await getDocs(refDoc)
    .then( snapshot => {
      let listaClientes = [];

      snapshot.forEach( cliente => {
        listaClientes.push({
          id: cliente.id,
          nome: cliente.data().nome,
          telefone: cliente.data().telefone,
          complemento: cliente.data().complemento,
          ultimaData: cliente.data().ultimaData,
          proxData: cliente.data().proxData,
          valor: cliente.data().valor
        });
      });

      setClientes(listaClientes);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async function buscaClienteInfo(id) {
    const overlay = document.querySelector('.info-overlay');
    const infoContainer = document.querySelector('.info-container');

    overlay.style.display = 'block';
    infoContainer.style.display = 'flex';

    const refDoc = doc(db, 'clientes', id);
    await getDoc(refDoc)
    .then( snapshot => {
      setCliente({
        id: snapshot.id,
        nome: snapshot.data().nome,
        telefone: snapshot.data().telefone,
        complemento: snapshot.data().complemento,
        ultimaData: snapshot.data().ultimaData,
        proxData: snapshot.data().proxData,
        valor: snapshot.data().valor
      });
      setClienteInfo(true);
    });
  }

  function fecharInfos() {
    const overlay = document.querySelector('.info-overlay');
    const infoContainer = document.querySelector('.info-container');

    overlay.style.display = 'none';
    infoContainer.style.display = 'none';
  }

  return (
    <>
      <Header/>
      <main className="main-container">
        <div className="main-div">
          <Nav/>
        
          <div className='clientes-container'>
            <div className='clientes-campo'>
              <input className="clientes-pesquisa" type="text" placeholder='Pesquisar...' />
              <button className='clientes-pesquisa--btn'>Buscar</button>
              <button className='clientes-pesquisa--btn' onClick={ buscarTodosClientes }>Atualizar</button>
            </div>
            
              {
                clientes.map( cliente => {
                  return (
                      <div className='cliente cliente-container' key={ cliente.id }>
                        <div>
                          <div>
                            <img className='cliente-img' src={ iconPessoa } alt="Icone de Perfil" />
                            <strong className='cliente-nome'>{ cliente.nome }</strong>
                          </div>
                          <button onClick={ () => buscaClienteInfo(cliente.id) } className='cliente-info--btn'>Infos</button>
                        </div>
                        <div>
                          <p className='cliente-ultimo--servico'>Ultimo serviço: <span>{ cliente.ultimaData }</span></p>
                          <p className='cliente-prox--servico'>Próximo serviço: <span>{ cliente.proxData }</span></p>
                        </div>
                        
                        <div>
                          <p className='cliente-valor'>Valor cobrado: <span>R$ { cliente.valor }</span></p>
                          <div>
                            <button className='cliente-btn--feito'>Feito!!</button>
                            <button className='cliente-btn--editar'>Editar</button>
                          </div>
                        </div>
                      </div>
                  );
                })
              }

              {
                clienteInfo && 
                <>
                  <div className="info-overlay"></div>
                  <div className='info-container'>
                    <div>
                      <img className='cliente-img' src={ iconPessoa } alt="Icone de Perfil" />
                      <strong className='cliente-nome'>{ cliente.nome }</strong>
                    </div>
                    <ul>
                      <li>
                        <p>Telefone/Celular: <span>{ cliente.telefone }</span></p>
                      </li>
                      <li>
                        <p>Complemento: <span>{ cliente.complemento }</span></p>
                      </li>
                      <li>
                        <p>Ultimo serviço: <span>{ cliente.ultimaData }</span></p>
                      </li>
                      <li>
                        <p>Próximo serviço: <span>{ cliente.proxData }</span></p>
                      </li>
                      <li>
                        <p>Valor cobrado: <span>R$ { cliente.valor }</span></p>
                      </li>
                    </ul>

                    <button onClick={ fecharInfos } className='info-fechar'>Fechar</button>
                  </div>
                </>
              }
          </div>
        </div>
      </main>
    </>
  );
}

export default Clientes;