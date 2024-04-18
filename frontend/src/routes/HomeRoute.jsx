import React from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = () => {
  return (
    <div className="home-route">
      < TopNavigation topics={topics} />
      < PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
