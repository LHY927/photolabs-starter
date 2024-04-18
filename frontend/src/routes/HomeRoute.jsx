import React, { useCallback, useContext, useState } from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

export const FavContext = React.createContext(null);

const HomeRoute = () => {
  const [favourites, toggleFavourite] = useState([]);
  return (
    <div className="home-route">
      <FavContext.Provider value={{ favourites: favourites, toggleFavourite: toggleFavourite }}>
        < TopNavigation topics={topics} />
        < PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} />
      </FavContext.Provider>
    </div >
  );
};

export default HomeRoute;
