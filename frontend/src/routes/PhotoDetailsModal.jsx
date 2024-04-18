import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const handleClickClose = () => {
    props.setShowModal(-1);
  }

  return (
    <div className="photo-details-modal" hidden={props.showModal < 0}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleClickClose} />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
