import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        const foundProduct = res.data.product || res.data;

        setProduct(foundProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/products/${id}/edit`}>Edit</Link>{" "}
      <button onClick={deleteProduct}>Delete</button>{" "}
      <Link to="/products">Back</Link>
    </div>
  );
};

export default ProductDetail;
