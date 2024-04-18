import React, { useCallback, useContext, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { FavContext } from 'routes/HomeRoute';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const { fav, setFav } = useContext(FavContext)

  const handleClick = () => {
    setSelected(!selected);
  }
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;