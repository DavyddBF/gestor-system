import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  getDocs,
  getDoc
} from 'firebase/firestore';
import { db } from "../firebase";

function useClientes() {
  const [cliente, setCliente] = useState({});
  const [clientes, setClientes] = useClientes([]);

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
  });

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
      const snapshotData = snapshot.data()

      setCliente({
        id: snapshot.id,
        nome: snapshotData.nome,
        telefone: snapshotData.telefone,
        complemento: snapshotData.complemento,
        ultimaData: snapshotData.ultimaData,
        proxData: snapshotData.proxData,
        valor: snapshotData.valor
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
        setInputNome(snapshotData.nome);
        setInputTelefone(snapshotData.telefone);
        setInputComplemento(snapshotData.complemento);
        setInputUltimaData(snapshotData.ultimaData);
        setInputProxData(snapshotData.proxData);
        setInputValor(snapshotData.valor);
      }
    });
  }

  

  return {
    cliente, 
    clientes, 
    setCliente,
    inputNome,
    setInputNome,
    inputTelefone,
    setInputTelefone,
    inputComplemento,
    setInputComplemento,
    inputUltimaData,
    setInputUltimaData,
    inputProxData,
    setInputProxData,
    inputValor,
    setInputValor,

    // Funções
    buscaClienteInfo,
    buscarTodosClientes
  }
}

export { useClientes };