import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        const product = res.data.product || res.data;

        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then(() => {
        navigate(`/products/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Update Product</h1>

      <form onSubmit={updateHandler}>
        <div>
          <label>Title: </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Price: </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Description: </label>

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
