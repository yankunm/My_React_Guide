import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'
import CarList from './CarList'
import carData from './carData'


function App() {
  return (
    <div>
      <CarList cars={carData} />
    </div>
  );
}

export default App;
