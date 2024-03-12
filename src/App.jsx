import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards/Card.jsx';
import Grid from './components/grid/Grid.jsx';

function App() {
  return (
    <>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
