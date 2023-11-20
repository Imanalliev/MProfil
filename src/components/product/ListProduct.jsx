import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Pagination } from "antd";
import { useSearchParams, useLocation } from "react-router-dom";
import FilterProduct from "./FilterProduct.jsx";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard.jsx";

// Компонент для отображения списка продуктов

const ListProduct = () => {
  const { product, productsTotalCount, getProduct } = useProducts();
  const [paginateParams, setPaginateParams] = useSearchParams();
  const location = useLocation();


  // Состояния для текущей страницы и лимита продуктов на странице

  const [page, setPage] = useState(
    paginateParams.get("_page") ? paginateParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    paginateParams.get("_limit") ? paginateParams.get("_limit") : 2
  );

  // Обновление параметров страницы при изменении страницы или лимита
  useEffect(() => {
    setPaginateParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  // Загрузка продуктов при изменении параметров страницы
  useEffect(() => {
    getProduct();
  }, [paginateParams]);

  return (
    <section className="params">
     


  
    <Box  sx={{height: "900px",}}>
      <br />
      <br />
      
      <br />
      {/* Компонент для фильтрации продуктов */}
      <FilterProduct />
      
      {/* Контейнер для отображения списка продуктов */}
      <Container
        sx={{
          marginTop: "40px",
         
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {/* Маппинг по массиву продуктов для создания карточек продуктов */}
        {product ? (
          product.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
      
      {/* Компонент для отображения пагинации */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          m: 5,
        }}
      >
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={page}
          pageSize={limit}
          defaultCurrent={1}
          total={productsTotalCount}
        />
      </Box>
    </Box>
    </section>
  );
  
};

export default ListProduct;
