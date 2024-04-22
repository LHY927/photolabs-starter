import React, { useCallback, useContext, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (props.id < 0) {
      return;
    }
    props.setFavourite(props.id);
    //setSelected(!selected);
    // if (!selected) {
    //   // If currently not selected, add the id to favourites
    //   props.setFavourite([...props.favourites, props.id]);
    // } else {
    //   // If currently selected, remove the id from favourites
    //   props.setFavourite(props.favourites.filter(item => item !== props.id));
    // }
    //console.log(props.favourites)
  }

  useEffect(() => {
    if (props.favourites != undefined) {
      console.log(props.favourites)
      console.log(props.id)
      console.log(props.favourites.indexOf(props.id))
      if (props.favourites.indexOf(props.id) >= 0) {
        console.log("get true")
        setSelected(true);
      } else {
        console.log("get false")
        setSelected(false);
      }
    }
  }, [props.favourites]);
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;