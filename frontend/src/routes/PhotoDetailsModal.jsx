import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from 'mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';

let similarPhotos = {
  photo1: {
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
}

let similarPhotosList = [];

let similarPhotosDiv = ""

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

  useEffect(() => {
    if (props.selectedPhoto.id > 0) {
      similarPhotos = props.selectedPhoto.similar_photos

      similarPhotosList = [];
      for (const index in props.selectedPhoto.similar_photos) {
        similarPhotosList.push(props.selectedPhoto.similar_photos[index]);
      }

      similarPhotosDiv = similarPhotosList.map((photo, index) =>
        <img key={photo.id} src={photo.urls.regular} className='photo-details-modal__images' />
      );
      console.log("similarPhotos")
      console.log(similarPhotosDiv)
    }

  }, [props.selectedPhoto]);


  // const similarPhotosList = [];
  // for (const index in similarPhotos) {
  //   similarPhotosList.push(similarPhotos[index]);
  // }

  // const similarPhotosDiv = similarPhotosList.map((photo, index) =>
  //   <image key={photo.id} src={photo.urls.regular} className='similarPhotosDiv' />
  // );

  // const similarPhotos = props.selectedPhoto.similar_photos.map((photo, index) =>
  //   <image key={photo.id} src={photo.urls.regular} />
  // );

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
          <PhotoList photos={photos} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
