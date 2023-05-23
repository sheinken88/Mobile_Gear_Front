import { Box, Divider, Grid, Text, Image } from "@chakra-ui/react";
import Mobilegear from "../assets/Mobilegear.png";

export const Footer = () => {
  return (
    <Box backgroundColor="#3498DB">
      <Box
        as="footer"
        role="contentinfo"
        maxW="1200px"
        mx="auto"
        px={4}
        py={2}
        textAlign="center"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "auto 1fr" }}
          gap={4}
          alignItems="center"
        >
          <Image src={Mobilegear} alt="Mobilegear" boxSize="125px" />
          <Text color="black" fontSize="lg">
            Tu tienda smart favorita
          </Text>
        </Grid>
        <Divider mt={4} mb={1} />
        <Grid
          templateColumns={{ base: "1fr", md: "auto 1fr" }}
          alignItems="center"
        >
          <Text fontSize="xs" color="white" mb={1}>
            &copy; {new Date().getFullYear()} Mobile Gear S.R.L. All rights
            reserved.
          </Text>
        </Grid>
      </Box>
    </Box>
  );
};
