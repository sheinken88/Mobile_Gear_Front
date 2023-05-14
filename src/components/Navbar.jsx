import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";

import useInput from "../hooks/useInput";

export const Navbar = () => {
  const isAuthenticated = false;
  const isAdmin = false;
  const searchInput = useInput();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // resto del código para manejar el search submit.
  };

  return (
    <>
      <Flex
        width="100%"
        alignItems="center"
        gap="2"
        p="4"
        backgroundColor="#E91E63"
      >
        <Box p="2">
          <Heading
            as={Link}
            to="/"
            size="xl"
            color="white"
            // bgGradient="linear(to-r, white, orange)"
            // bgClip="text"
          >
            Mobile Gear
          </Heading>
        </Box>
        <Flex ml="20" gap="8">
          <Menu>
            <MenuButton fontSize="lg" color="white">
              Celulares
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/">
                Samsung
              </MenuItem>
              <MenuItem as={Link} to="/">
                Iphone
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontSize="lg" color="white">
              Tablets
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/">
                iPad Mini 4
              </MenuItem>
              <MenuItem as={Link} to="/">
                iPad Mini 9.7
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontSize="lg" color="white">
              Accesorios
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/">
                Auriculares
              </MenuItem>
              <MenuItem as={Link} to="/">
                Cargadores
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Spacer />
        <Box mr={10}>
          <form onSubmit={handleSearchSubmit}>
            <Flex>
              {showSearchBar && (
                <Input
                  {...searchInput}
                  placeholder="Search"
                  variant="filled"
                  size="md"
                  borderRadius="full"
                  bg="white"
                  boxShadow="md"
                  _hover={{ boxShadow: "lg" }}
                  _focus={{ boxShadow: "lg", color: "white" }}
                />
              )}
              <IconButton
                icon={<SearchIcon />}
                type="submit"
                size="lg"
                ml={2}
                borderRadius="full"
                bg="secondary"
                color="white"
                _hover={{ bg: "#0097A7" }}
                _active={{ bg: "#00838F" }}
                onClick={toggleSearchBar}
              />
              <IconButton
                icon={<FaShoppingCart />}
                size="lg"
                ml={2}
                borderRadius="full"
                bg="secondary"
                color="white"
                _hover={{ bg: "#0097A7" }}
                _active={{ bg: "#00838F" }}
              />
            </Flex>
          </form>
        </Box>
        {isAuthenticated ? (
          <Menu>
            <MenuButton fontSize="2xl" color="white">
              {"userName"}
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/">
                Account
              </MenuItem>
              <MenuItem as={Link} to="">
                My list
              </MenuItem>
              <MenuDivider />

              <MenuItem as={Link} to="/">
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <ButtonGroup gap="2">
            <Link to="/signup">
              <Button variant="outline" border="1px solid black">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="whiteAlpha">Log in</Button>
            </Link>
          </ButtonGroup>
        )}
      </Flex>
    </>
  );
};
