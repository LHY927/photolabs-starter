import React, { useCallback, useContext, useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      < TopNavigation topics={topics} favourites={props.favourites} />
      < PhotoList photos={photos} setSelectedPhoto={props.setSelectedPhoto} favourites={props.favourites} setFavourite={props.setFavourite} />
    </div >
  );
};

export default HomeRoute;
