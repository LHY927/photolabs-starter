// frontend/src/App.jsx
import React from 'react';

import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';

const App = () => (
  < div className="App" >
    < TopNavigation />
    < PhotoList />
  </div >
)

export default App
