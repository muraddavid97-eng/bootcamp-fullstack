import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./views/ProductDetail";
import EditProduct from "./views/EditProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        const productList = res.data.products || res.data;

        setProducts(productList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />

      <Route
        path="/products"
        element={
          <>
            <ProductForm setProducts={setProducts} />

            <ProductList products={products} setProducts={setProducts} />
          </>
        }
      />

      <Route path="/products/:id" element={<ProductDetail />} />

      <Route path="/products/:id/edit" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
