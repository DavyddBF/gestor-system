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

export default fecharInfos;