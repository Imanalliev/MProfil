import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

import FilterProduct from "./FilterProduct.jsx";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard.jsx";

const ListProduct = () => {
  const { product, productsTotalCount, getProduct } = useProducts();
  const [paginateParams, setPaginateParams] = useSearchParams();

  const [page, setPage] = useState(
    paginateParams.get("_page") ? paginateParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    paginateParams.get("_limit") ? paginateParams.get("_limit") : 2
  );

  useEffect(() => {
    setPaginateParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProduct();
  }, [paginateParams]);

  return (
    <section className="params">
      <Box sx={{ height: "900px" }}>
        <br />
        <br />
        <br />

        <FilterProduct />

        <Container
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: 1,
            msFlexDirection: "column",
          }}
        >
          {product && product.length > 0 ? (
            product.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <h1>No products found</h1>
          )}
        </Container>

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
