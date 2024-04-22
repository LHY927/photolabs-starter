// frontend/src/App.jsx
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    < div className="App" >
      < HomeRoute setSelectedPhoto={onPhotoSelect} favourites={state.favPhotoIds} setFavourite={updateToFavPhotoIds} />
      < PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} setSelectedPhoto={onPhotoSelect} state={state} setFavourite={updateToFavPhotoIds} />
    </div >
  )
}

export default App
