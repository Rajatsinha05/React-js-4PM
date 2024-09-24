import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./config";

const Form = () => {
  let [product, setProduct] = useState({ title: "", price: "", img: "" });
  let [productList, setProductList] = useState([]);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await addDoc(collection(db, "products"), product);
    console.log(data);
  };

  const getProducts = async () => {
    let productsref = await getDocs(collection(db, "products"));
    productsref.docs.map((doc) => {
      setProductList([...productList, { id: doc.id, ...doc.data() }]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={product.title}
          name="title"
          onChange={handleInput}
        />
        <input
          type="url"
          value={product.img}
          name="img"
          onChange={handleInput}
        />
        <input
          type="number"
          value={product.price}
          name="price"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      <hr />
      {productList.map((user) => (
        <>
          {console.log(user)}
          <img src={user.img} alt="" />
          <h1>{user.title}</h1>
        </>
      ))}
    </div>
  );
};

export default Form;
