import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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
    let proData = productsref.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProductList(proData);
  };

  const handleDelete = async (id) => {
    let userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
  };
  const handleUpdate = async (id) => {
    let userDoc = doc(db, "products", id);

    await updateDoc(userDoc, product);
  };
  useEffect(() => {
    getProducts();
  }, [handleDelete, handleSubmit, handleUpdate]);

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
          <button onClick={() => handleDelete(user.id)}>Delete</button>
          <button onClick={() => handleUpdate(user.id)}>update</button>
        </>
      ))}
    </div>
  );
};

export default Form;
