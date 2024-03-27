import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photoDetails.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photoDetails.profile} />
        <div className="photo-list__user-info">{props.photoDetails.location.city}, {props.photoDetails.location.country}</div>
        <div className="photo-list__user-location">{props.photoDetails.username}</div>
      </div>

    </div>

  )
};

export default PhotoListItem;
