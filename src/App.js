import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/productdetail">ProductDetail</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path={"/productdetail/:id"} element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

