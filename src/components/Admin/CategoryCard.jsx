import { useState } from "react";
import { Button, Input, Grid, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import {
  editCategory,
  fetchCategories,
} from "../../state/categories/categoriesActions";

export const CategoryCard = ({
  category,
  handleDelete,
  setRefetch,
  refetch,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  let newCategory = useInput();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    setIsEditing(false);
    dispatch(editCategory({ id, name: newCategory.value }));
    setRefetch(!refetch);
  };

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={6}
      alignItems="center"
      mb="5"
      key={category.id}
    >
      {isEditing ? (
        <>
          <Input {...newCategory}></Input>
        </>
      ) : (
        <Text fontWeight="bold">{category.name}</Text>
      )}
      {isEditing ? (
        <Button onClick={() => handleSubmit(category.id)}>Edit</Button>
      ) : (
        <IconButton
          aria-label="Edit category"
          icon={<EditIcon />}
          onClick={(event) => handleEdit(category, event)}
        />
      )}

      <IconButton
        aria-label="Delete category"
        icon={<DeleteIcon />}
        onClick={(event) => handleDelete(category, event)}
      />
    </Grid>
  );
};
