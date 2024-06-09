import React from 'react';
import noData from '../../assets/images/no-data.png';
import { CloseButton, ErrorMessage, Modal, ModalContent } from '../../styled-components/ModalNoData/ModalNoData.styled';

const ModalNoData: React.FC = ({openModal, setOpenModal, error, darkMode}) => {

  return (

          <Modal openModal={openModal}>
            <ModalContent>
              <img src={noData} alt="" style={{ width: '100px', height: 'auto' }} />
              <ErrorMessage>Error al cargar la información</ErrorMessage>
              <div>Por favor revisa los filtros y vuelve a intentar</div>
              <div>Error: {error}</div>
              <CloseButton darkMode={darkMode} onClick={() => setOpenModal(false)}>
                Cerrar
              </CloseButton>
            </ModalContent>
          </Modal>
  );
};

export default ModalNoData;
