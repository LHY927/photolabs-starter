import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo, index) =>
    <PhotoListItem key={index} photoDetails={photo} />
  );

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
