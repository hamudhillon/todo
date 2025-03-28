import { useState,useRef,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Product from './product.jsx'
import Home from './Home.jsx'
function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/:name" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
