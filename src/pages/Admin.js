// Admin page

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AddEvent from "../components/AddEvent";

const Admin = () => {
  return (
    <Box p={5}>
      <Text fontSize="4xl" justify="left" align="left">Admin</Text>
      <AddEvent />
    </Box>
  )
}

export default Admin;