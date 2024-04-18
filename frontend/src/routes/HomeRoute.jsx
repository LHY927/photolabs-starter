import React from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

export const FavContext = React.createContext(null);

const HomeRoute = () => {
  return (
    <div className="home-route">
      <FavContext.Provider value={{ fav: fav, setFav: setFav }}>
        < TopNavigation topics={topics} />
        < PhotoList photos={photos} />
      </FavContext.Provider>
    </div >
  );
};

export default HomeRoute;
