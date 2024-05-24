import { Box, Divider } from "@mui/material";
import { FC, useState } from "react";
import "./Categories.css";

export const Categories: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await CategoriesApiClient.getAllAsync();
      const categories = res.map()
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box className="new-category-section"></Box>

      <Divider />

      <Box className="categories-list-section"></Box>
    </Box>
  );
};
