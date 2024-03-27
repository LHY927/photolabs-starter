import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  return (
    <div>
      <image src={props.data.imageSource} />
      <image src={props.data.profile} />
      <p>{props.data.location.city}, {props.data.location.country}</p>
      <p>{props.data.username}</p>
    </div>

  )
};

export default PhotoListItem;
