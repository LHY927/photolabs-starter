import React, { useMemo } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from 'mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';

//Initialize value to avoid render fail in the similar photos
let similarPhotosList = [{
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
}];

const PhotoDetailsModal = (props) => {
  const handleClickClose = () => {
    props.setSelectedPhoto({
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
    console.log(props.selectedPhoto.similar_photos)
  }

  useMemo(() => {
    if (props.selectedPhoto.id > 0) {
      similarPhotosList = [];
      for (const index in props.selectedPhoto.similar_photos) {
        similarPhotosList.push(props.selectedPhoto.similar_photos[index]);
      }

      console.log(photos)
      console.log(similarPhotosList)
    }

  }, [props.selectedPhoto]);

  return (
    <div className="photo-details-modal" hidden={props.selectedPhoto.id < 0}>
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={handleClickClose} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__header">
        <PhotoFavButton />
        <img className="photo-details-modal__image" src={props.selectedPhoto.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.selectedPhoto.user.profile} />
          <div className="photo-details-modal__photographer-location">{props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}</div>
          <div className="photo-details-modal__photographer-info">{props.selectedPhoto.user.username}</div>
        </div>
        <div>Similar Photos</div>
        <div className='photo-details-modal__top-bar'>
          <PhotoList photos={similarPhotosList} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
