import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Fashion from './components/fashion/Fashion';
import Product from './components/products/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/fashion/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;