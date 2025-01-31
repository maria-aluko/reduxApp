import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Recipes from './components/Recipes'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;