import React, { useState } from "react";
import { Box, Button, VStack, Heading, Flex, Image } from "@chakra-ui/react";
import { AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { AddProducts } from "./Admin/AddProducts";
import { EditProducts } from "./Admin/EditProducts";
import { SalesDashboard } from "./Admin/SalesDashboard";
import { UsersDashboard } from "./Admin/UsersDashboard";

export const Admin = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (
    <Flex>
      <Box width="200px" p={4} backgroundColor="#3498DB" borderRightWidth="1px">
        <VStack spacing={4} align="stretch">
          <Image
            boxSize="150px"
            objectFit="cover"
            src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Image.png"
            alt="Admin"
            mb={4}
          />
          <Button
            leftIcon={<AddIcon />}
            onClick={() => setSelectedPanel("add-product")}
          >
            Add product
          </Button>
          <Button
            leftIcon={<EditIcon />}
            onClick={() => setSelectedPanel("edit-product")}
          >
            Edit product
          </Button>
          <Button
            leftIcon={<ViewIcon />}
            onClick={() => setSelectedPanel("view-sales")}
          >
            View sales
          </Button>
          <Button
            leftIcon={<ViewIcon />}
            onClick={() => setSelectedPanel("view-users")}
          >
            Users
          </Button>
        </VStack>
      </Box>
      <Box pl={16} flex="1">
        {selectedPanel === "add-product" && <AddProducts />}
        {selectedPanel === "edit-product" && <EditProducts />}
        {selectedPanel === "view-sales" && <SalesDashboard />}
        {selectedPanel === "view-users" && <UsersDashboard />}
      </Box>
    </Flex>
  );
};
