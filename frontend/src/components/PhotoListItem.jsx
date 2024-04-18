import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "../components/PhotoFavButton.jsx";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton favourites={props.favourites} toggleFavourite={props.toggleFavourite} />
      <img className="photo-list__image" src={props.photoDetails.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photoDetails.user.profile} />
        <div className="photo-list__user-info">{props.photoDetails.location.city}, {props.photoDetails.location.country}</div>
        <div className="photo-list__user-location">{props.photoDetails.user.username}</div>
      </div>

    </div>

  )
};

export default PhotoListItem;
