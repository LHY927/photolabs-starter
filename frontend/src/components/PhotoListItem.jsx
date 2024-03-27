import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img className="photo-list__item" src={props.photoDetails.imageSource} />
      <img className="photo-list__item" src={props.photoDetails.profile} />
      <p>{props.photoDetails.location.city}, {props.photoDetails.location.country}</p>
      <p>{props.photoDetails.username}</p>
    </div>

  )
};

export default PhotoListItem;
