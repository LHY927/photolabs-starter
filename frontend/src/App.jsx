// frontend/src/App.jsx
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [selectedPhotoId, setSelectedPhotoId] = useState({
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
      < HomeRoute setSelectedPhotoId={setSelectedPhotoId} />
      < PhotoDetailsModal setSelectedPhotoId={setSelectedPhotoId} selectedPhotoId={selectedPhotoId} />
    </div >
  )
}

export default App
