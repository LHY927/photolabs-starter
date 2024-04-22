// frontend/src/App.jsx
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const [favourites, setFavourite] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({
    "id": "-1",
    "location": {
      "city": "Montreal",
      "country": "Canada"
    },
    "urls": {
      "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
    },
    "user": {
      "id": "1",
      "username": "exampleuser",
      "name": "Joe Example",
      "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
    }
  });

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    < div className="App" >
      < HomeRoute setSelectedPhoto={setSelectedPhoto} favourites={state.favPhotoIds} setFavourite={updateToFavPhotoIds} />
      < PhotoDetailsModal setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} favourites={state.favPhotoId} setFavourite={updateToFavPhotoIds} />
    </div >
  )
}

export default App
