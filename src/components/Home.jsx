import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";
import { ProductGrid } from "./ProductGrid";
import { Slider } from "./Home/Slider";

export const Home = () => {
  return (
    <Box backgroundColor="gray.100" minHeight="400px">
      <Image
        src="https://cdn.discordapp.com/attachments/1109602975460110380/1109611584818528256/43f5ae4e-9248-4b05-b56f-dd68497aac25.jpg"
        alt="banner"
        width="100%"
        height="400"
      />
      <Center mt="20" mb="20">
        <Heading>Special Offers</Heading>
      </Center>
      <Slider />
      <ProductGrid />
    </Box>
  );
};
