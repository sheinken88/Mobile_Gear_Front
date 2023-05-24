import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@chakra-ui/react";
import { CategoryCard } from "./CategoryCard";
import {
  fetchCategories,
  deleteCategory,
  addCategory,
} from "../../state/categories/categoriesActions";

export const CategoryGrid = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const [refetch, setRefetch] = useState(false);

  const handleDelete = (category, event) => {
    event.stopPropagation();
    dispatch(deleteCategory(category.id));
    setRefetch(!refetch);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, refetch]);

  const handleAdd = () => {
    dispatch(addCategory("New category"));
    setRefetch(!refetch);
  };

  return (
    <Box p="5">
      {categories.map((category) => {
        return (
          <div style={{ cursor: "pointer" }} key={category.id}>
            <CategoryCard
              category={category}
              handleDelete={handleDelete}
              setRefetch={setRefetch}
              refetch={refetch}
            />
          </div>
        );
      })}
      <Button onClick={handleAdd}>Add</Button>
    </Box>
  );
};
