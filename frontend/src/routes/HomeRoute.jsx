import React, { useCallback, useContext, useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

export const FavContext = React.createContext();

const HomeRoute = () => {
  const [favourites, setFavourite] = useState([]);
  return (
    <div className="home-route">
      <FavContext.Provider value={{ favourites: favourites, setFavourite: setFavourite }}>
        < TopNavigation topics={topics} />
        < PhotoList photos={photos} />
      </FavContext.Provider>
    </div >
  );
};

export default HomeRoute;
