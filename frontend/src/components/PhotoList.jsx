import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo, index) =>
    <PhotoListItem key={photo.id} photoDetails={photo} setShowModal={props.setShowModal} />
  );

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
