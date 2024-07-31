import { useEffect, useState } from 'react';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc 
} from 'firebase/firestore';
import { db } from '../../firebase';
import iconPessoa from '../../assets/pessoa-icon.svg';

import './info.css';
import './clientes.css';

import Header from "../../components/Header";
import Nav from "../../components/Nav";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

  const [inputNome, setInputNome] = useState('');
  const [inputTelefone, setInputTelefone] = useState('');
  const [inputComplemento, setInputComplemento] = useState('');
  const [inputUltimaData, setInputUltimaData] = useState('');
  const [inputProxData, setInputProxData] = useState('');
  const [inputValor, setInputValor] = useState('');

  const infoOverlay = document.querySelectorAll('.info-overlay');
  const infoContainer = document.querySelectorAll('.info-container');

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
            complemento: cliente.data().complemento,
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

  async function buscaClienteInfo(id, classeBtn) {

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

      if(classeBtn === 'cliente-info--btn') {
        infoOverlay[0].style.display = 'block';
        infoContainer[0].style.display = 'flex';
      } else if (classeBtn === 'cliente-btn--editar') {
        defineValorInicialInput();

        infoOverlay[1].style.display = 'block';
        infoContainer[1].style.display = 'flex';
      }


      function defineValorInicialInput() {
        setInputNome(snapshot.data().nome);
        setInputTelefone(snapshot.data().telefone);
        setInputComplemento(snapshot.data().complemento);
        setInputUltimaData(snapshot.data().ultimaData);
        setInputProxData(snapshot.data().proxData);
        setInputValor(snapshot.data().valor);
      }
    });
  }

  function fecharInfos(classeBtn) {
    if(classeBtn === 'info-fechar') {
      document.querySelectorAll('.info-overlay')[0].style.display = 'none';
      document.querySelectorAll('.info-container')[0].style.display = 'none';
    } else if (classeBtn === 'info-editar-fechar') {
      document.querySelectorAll('.info-overlay')[1].style.display = 'none';
      document.querySelectorAll('.info-container')[1].style.display = 'none';
    }
  }

  async function editarCliente(id) {
    const refDoc = doc(db, 'clientes', id);

    await updateDoc(refDoc, {
        nome: inputNome,
        telefone: inputTelefone,
        complemento: inputComplemento,
        ultimaData: inputUltimaData,
        proxData: inputProxData,
        valor: inputValor
    })
    .then(() => {
      
    })
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
                          <button onClick={ event => buscaClienteInfo(cliente.id, event.target.className) } className='cliente-info--btn'>Infos</button>
                        </div>
                        <div>
                          <p className='cliente-ultimo--servico'>Ultimo serviço: <span>{ cliente.ultimaData }</span></p>
                          <p className='cliente-prox--servico'>Próximo serviço: <span>{ cliente.proxData }</span></p>
                        </div>
                        
                        <div>
                          <p className='cliente-valor'>Valor cobrado: <span>R$ { cliente.valor }</span></p>
                          <div>
                            <button className='cliente-btn--feito'>Feito!!</button>
                            <button onClick={ event => buscaClienteInfo(cliente.id, event.target.className) } className='cliente-btn--editar'>Editar</button>
                          </div>
                        </div>
                      </div>
                  );
                })
              }

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

              <button onClick={ event => fecharInfos(event.target.className) } className='info-fechar'>Fechar</button>
            </div>
            
            <div className="info-overlay"></div>
            <div className='info-container'>
              <div className='info-editar'>
                <img className='cliente-img' src={ iconPessoa } alt="Icone de Perfil" />
                <input 
                    type='text'
                    onChange={ event => setInputNome(event.target.value) }
                    value={ inputNome }
                />
              </div>
              <ul className='info-editar'>
                <li>
                  <label>Telefone/Celular:</label>
                  <input 
                    type="text"
                    onChange={ event => setInputTelefone(event.target.value) }
                    value={ inputTelefone }
                  />
                </li>
                <li>
                  <label>Complemento:</label>
                  <input 
                    type="text" 
                    onChange={ event => setInputComplemento(event.target.value) }
                    value={ inputComplemento }
                  />
                </li>
                <li>
                  <label>Ultimo serviço:</label>
                  <input 
                    type="text"
                    onChange={ event => setInputUltimaData(event.target.value) }
                    value={ inputUltimaData }
                  />
                </li>
                <li>
                  <label>Próximo serviço:</label>
                  <input 
                    type="text"
                    onChange={ event => setInputProxData(event.target.value) }
                    value={ inputProxData } 
                  />
                </li>
                <li>
                  <label>Valor cobrado:</label>
                  <input 
                    type="text"
                    onChange={ event => setInputValor(event.target.value) }
                    value={ inputValor }
                  />
                </li>
              </ul>

              <div className='info-editar-btn-div'>
                <button onClick={ () => editarCliente(cliente.id) } className='info-editar-btn'>Concluir</button>
                <button onClick={ event =>  fecharInfos(event.target.className) } className='info-editar-fechar'>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Clientes;