// Ваш компонент AddProductForm
import React, { useState } from "react";
import { Button, TextField, Paper, Box } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleInp = (e) => {
    const value = e.target.value;
    setProduct((prevProduct) => ({ ...prevProduct, [e.target.name]: value }));
  };

  const addProduct = () => {
    createProduct(product);
    setProduct(init);
    navigate("/add-product");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      justifyContent="center"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={handleInp}
          value={product.title}
          label="Title"
          variant="outlined"
          name="title"
          size="small"
          fullWidth
          margin="normal"
        />
        <TextField
          onChange={handleInp}
          value={product.price}
          label="Price"
          variant="outlined"
          name="price"
          size="small"
          fullWidth
          margin="normal"
        />
        <TextField
          onChange={handleInp}
          value={product.picture}
          label="Image URL"
          variant="outlined"
          name="picture"
          size="small"
          fullWidth
          margin="normal"
        />
        <TextField
          onChange={handleInp}
          value={product.category}
          label="Category"
          variant="outlined"
          name="category"
          size="small"
          fullWidth
          margin="normal"
        />
        <Button
          onClick={addProduct}
          variant="contained"
          color="secondary"
          style={{ marginTop: "16px" }}
        >
          Add Product
        </Button>
      </Paper>
    </Box>
  );
};

export default AddProductForm;
