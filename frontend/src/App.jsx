// frontend/src/App.jsx
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [showModal, setShowModal] = useState(-1);

  return (
    < div className="App" >
      < HomeRoute setShowModal={setShowModal} />
      < PhotoDetailsModal setShowModal={setShowModal} showModal={showModal} />
    </div >
  )
}

export default App
