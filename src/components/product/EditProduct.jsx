import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = ({children}) => {
  const { getOneProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    picture: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getOneProduct(id);
        setProduct((prevProduct) => ({
          ...prevProduct,
          ...productData,
        }));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [getOneProduct, id]);

  const handleInp = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const editProduct = () => {
    try {
      updateProduct(id, product);
      navigate(`/product/${id}`);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
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
      <Button onClick={editProduct} variant="contained" color="primary">
        Save Changes
      </Button>
    </div>
  );
};

export default EditProduct;
