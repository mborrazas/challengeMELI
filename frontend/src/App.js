import react from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Product, Search, Results } from './screens';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/items" element={<Results />} />
        <Route path="/items/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
