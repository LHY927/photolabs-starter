import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from 'mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';

let photoDetails = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
  },
  "user": {
    "id": "1",
    "username": "exampleuser",
    "name": "Joe Example",
    "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
}

const PhotoDetailsModal = (props) => {
  const handleClickClose = () => {
    props.setSelectedPhotoId({
      "id": "-1",
      "location": {
        "city": "Montreal",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
      },
      "user": {
        "id": "1",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    });
  }

  return (
    <div className="photo-details-modal" hidden={props.selectedPhotoId.id < 0}>
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={handleClickClose} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__header">
        {/* <PhotoFavButton id={photoDetails.id} /> */}
        <img className="photo-details-modal__image" src={props.selectedPhotoId.urls.regular} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.selectedPhotoId.user.profile} />
          <div className="photo-details-modal__photographer-location">{props.selectedPhotoId.location.city}, {props.selectedPhotoId.location.country}</div>
          <div className="photo-details-modal__photographer-info">{props.selectedPhotoId.user.username}</div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
