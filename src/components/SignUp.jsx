import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useInput from "../hooks/useInput";
import * as settings from "../settings";
import { registerUser } from "../state/user/userActions";
import { Link } from "react-router-dom";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  ButtonGroup,
} from "@chakra-ui/react";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useInput();
  const email = useInput();
  const password = useInput();

  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(userName.value, email.value, password.value));
    navigate("/");
  };

  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
      maxW="md"
      mx="auto"
      mt="10"
    >
      <form onSubmit={handleRegister}>
        <Stack spacing={6}>
          <FormControl isRequired>
            <FormLabel>UserName</FormLabel>
            <Input {...userName} placeholder="UserName" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input {...email} placeholder="Email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input {...password} type="password" placeholder="Password" />
          </FormControl>
          <ButtonGroup gap="2">
            <Button
              type="submit"
              backgroundColor="#3498DB"
              size="lg"
              fontSize="md"
              color="white"
            >
              Sign Up
            </Button>
            <Button
              type="button"
              color="gray"
              size="lg"
              fontSize="md"
              variant="ghost"
              as={Link}
              to="/"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Box>
  );
};
