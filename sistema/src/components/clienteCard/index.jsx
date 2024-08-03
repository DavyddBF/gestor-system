import PropTypes from 'prop-types';
import iconPessoa from '../../assets/pessoa-icon.svg';

function ClienteCard({ cliente, buscaClienteInfo }) {
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
  )
}

ClienteCard.propTypes = {
  cliente: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    complemento: PropTypes.string,
    ultimaData: PropTypes.string,
    proxData: PropTypes.string,
    valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }),
  buscaClienteInfo: PropTypes.func
};

export default ClienteCard;