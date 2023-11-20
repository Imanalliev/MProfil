// Ваш компонент AddProductForm
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import { Flex } from "antd";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  picture: "",
};


const AddProductForm = () => {
  const { createProduct } = useProducts();
  const [product, setProduct] = useState(init);
  const navigate = useNavigate(); // Используем useNavigate для перехода

  const handleInp = (e) => {
    const value = e.target.value;
    setProduct((prevProduct) => ({ ...prevProduct, [e.target.name]: value }));
  };

  const addProduct = () => {
    createProduct(product);
    setProduct(init);
    // После успешного добавления продукта, переходим на страницу AddProduct
    navigate("/add-product");
  };
  // console.log(init);

  return (
    
    <section  className="parad">
       <br />
      <br />
      <br />
      <br />
    <div className="parad" style={{display: "flex", flexDirection: "column", alignItems: "center", height: "320px", width: "300px", background: "blue", borderRadius: "5px", justifyContent: "center"}}>
   
      <TextField
        onChange={handleInp}
        value={product.title}
        label="Title"
        variant="outlined"
        name="title"
        size="small"
      />
      <br />
      <TextField
        onChange={handleInp}
        value={product.price}
        label="Price"
        variant="outlined"
        name="price"
        size="small"
      />
      <br />
      <TextField
        onChange={handleInp}
        value={product.picture}
        label="Image URL"
        variant="outlined"
        name="picture"
        size="small"
      />
      <br />
        <TextField
        onChange={handleInp}
        value={product.category}
        label="category"
        variant="outlined"
        name="category"
        size="small"
      />
      <br />
      <Button onClick={addProduct} variant="contained" color="secondary">
        Add Product
      </Button>
    </div>
    </section>
  );
};

export default AddProductForm;
