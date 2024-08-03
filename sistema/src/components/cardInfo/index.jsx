import iconPessoa from '../../assets/pessoa-icon.svg';
import PropTypes from 'prop-types';

function CardInfo(props) {

  const infoOverlay = document.querySelectorAll('.info-overlay');
  const infoContainer = document.querySelectorAll('.info-container');

  function fecharInfos(classeBtn) {
    if(classeBtn === 'info-fechar') {
      infoOverlay[0].style.display = 'none';
      infoContainer[0].style.display = 'none';
    } else if (classeBtn === 'info-editar-fechar' || classeBtn === 'info-editar-btn') {
      infoOverlay[1].style.display = 'none';
      infoContainer[1].style.display = 'none';
    }
  }

  return (
    <>
      <div className="info-overlay"></div>
            <div className='info-container'>
              <div>
                <img className='cliente-img' src={ iconPessoa } alt="Icone de Perfil" />
                <strong className='cliente-nome'>{ props.cliente.nome }</strong>
              </div>
              <ul>
                <li>
                  <p>Telefone/Celular: <span>{ props.cliente.telefone }</span></p>
                </li>
                <li>
                  <p>Complemento: <span>{ props.cliente.complemento }</span></p>
                </li>
                <li>
                  <p>Ultimo serviço: <span>{ props.cliente.ultimaData }</span></p>
                </li>
                <li>
                  <p>Próximo serviço: <span>{ props.cliente.proxData }</span></p>
                </li>
                <li>
                  <p>Valor cobrado: <span>R$ { props.cliente.valor }</span></p>
                </li>
              </ul>

              <button onClick={ event => fecharInfos(event.target.className) } className='info-fechar'>Fechar</button>
            </div>
    </>
  );
}

CardInfo.propTypes = {
  cliente: PropTypes.shape({
    nome: PropTypes.string,
    telefone: PropTypes.string,
    complemento: PropTypes.string,
    ultimaData: PropTypes.string,
    proxData: PropTypes.string,
    valor: PropTypes.string
  }).isRequired
}

export default CardInfo;