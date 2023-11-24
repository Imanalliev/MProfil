import React from "react";
import { Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import { useProducts } from "../context/ProductContext";

const ProductCard = ({ item }) => {
  const { deleteProduct, getOneProduct } = useProducts();

  // Добавьте проверку наличия свойства title
  if (!item || !item.title) {
    return null; // или другое поведение в случае отсутствия данных
  }

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleEdit = (id) => {
    getOneProduct(id);
    // Возможно, здесь вы можете использовать react-router-dom для перехода на страницу редактирования
  };

  return (
    <Card sx={{ minWidth: 275, marginBottom: 16, backgroundColor: item.category === 'free' ? '#7FFF7F' : 'white' }}>
      <CardMedia
        component="img"
        height="140"
        image={item.picture} // Предполагается, что у вашего продукта есть свойство picture с URL изображения
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <br />
        <Typography color="text.secondary">{item.description}</Typography>
        <Typography color="text.secondary">Category: {item.category}</Typography>
        <Typography color="text.secondary">Price: ${item.price}</Typography>
        <br />
        <Button onClick={() => handleEdit(item.id)} variant="contained" color="primary" sx={{ marginRight: 2 }}>
          Download
        </Button>
        <Button onClick={() => handleDelete(item.id)} variant="contained" color="error">
          Delete
        </Button>
        <Button>Edit</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
