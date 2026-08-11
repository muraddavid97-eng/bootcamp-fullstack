import { useState } from "react";
import axios from "axios";

const ProductForm = ({ setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("Created product:", res.data);

        setProducts((previousProducts) => [...previousProducts, res.data]);

        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Product Manager</h1>

      <form onSubmit={submitHandler}>
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
