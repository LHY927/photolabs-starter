import React, { useCallback, useContext, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { FavContext } from 'routes/HomeRoute';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (props.id < 0) {
      return;
    }
    setSelected(!selected);
    if (!selected) {
      // If currently not selected, add the id to favourites
      props.setFavourite([...props.favourites, props.id]);
    } else {
      // If currently selected, remove the id from favourites
      props.setFavourite(props.favourites.filter(item => item !== props.id));
    }
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