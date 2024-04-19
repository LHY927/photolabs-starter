// frontend/src/App.jsx
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

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

  return (
    < div className="App" >
      < HomeRoute setSelectedPhoto={setSelectedPhoto} favourites={favourites} setFavourite={setFavourite} />
      < PhotoDetailsModal setSelectedPhoto={setSelectedPhoto} selectedPhoto={selectedPhoto} favourites={favourites} setFavourite={setFavourite} />
    </div >
  )
}

export default App
