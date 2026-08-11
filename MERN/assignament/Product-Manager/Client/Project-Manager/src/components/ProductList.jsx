import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        setProducts((previousProducts) =>
          previousProducts.filter((product) => product._id !== id),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>All Products:</h2>

      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>

          {" | "}

          <Link to={`/products/${product._id}/edit`}>Edit</Link>

          {" | "}

          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
