import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import ImageSlider from './components/ImageSlider/ImageSlider'

function App() {
  return (
    <>
      <Route
        path="/"
        component={ ImageSlider }
      />
    </>
  )
}

export default App;
