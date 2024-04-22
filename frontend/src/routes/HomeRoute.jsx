import React, { useCallback, useContext, useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      < TopNavigation topics={props.state.topics} favourites={props.state.favPhotoIds} />
      < PhotoList photos={props.state.photos} setSelectedPhoto={props.setSelectedPhoto} favourites={props.state.favourites} setFavourite={props.setFavourite} />
    </div >
  );
};

export default HomeRoute;
