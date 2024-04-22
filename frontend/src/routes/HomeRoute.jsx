import React, { useCallback, useContext, useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import topics from 'mocks/topics';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      < TopNavigation topics={topics} favourites={props.favourites} />
      < PhotoList photos={props.photos} setSelectedPhoto={props.setSelectedPhoto} favourites={props.favourites} setFavourite={props.setFavourite} />
    </div >
  );
};

export default HomeRoute;
