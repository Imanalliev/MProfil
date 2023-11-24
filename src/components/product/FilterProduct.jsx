import React from "react";
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useProducts } from "../context/ProductContext";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();

  return (
    <Paper
      sx={{
        // position: "absolute",
        mt: -5,
        display: "flex",
        p: 2,
        boxShadow: "0",
        backgroundColor: "transparent",
        flexDirection: "column", // Добавлено свойство для вертикального расположения элементов
        alignItems: "center", // Выравнивание по центру
      }}
    >
      <FormControl>
        <RadioGroup
          defaultValue="all"
          onChange={(e) => fetchByParams("category", e.target.value)}
          name="radio-buttons-group"
          sx={{ my: 1 }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              borderRadius: "6px",
              height: "53px",
            }}
          >
            <div style={{ margin: "0 10px", borderBottom: "2px solid white" }}>
              <FormControlLabel value="all" control={<Radio />} label="Все" />
            </div>
            <div style={{ margin: "0 10px", borderBottom: "2px solid white" }}>
              <FormControlLabel
                value="paid"
                control={<Radio />}
                label="Платные"
              />
            </div>
            <div style={{ margin: "0 10px", borderBottom: "2px solid white" }}>
              <FormControlLabel
                value="shooter"
                control={<Radio />}
                label="Шутер"
              />
            </div>
            <div style={{ margin: "0 10px", borderBottom: "2px solid white" }}>
              <FormControlLabel
                value="online"
                control={<Radio />}
                label="Онлайн"
              />
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default FilterProduct;
