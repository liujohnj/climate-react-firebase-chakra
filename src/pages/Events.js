import React from "react";
import { Box, Flex, Text, UnorderedList } from "@chakra-ui/react";
import GetEvents from "../components/GetEvents";


const Events = () => {
  return (
    <Box p={5}>
      <Text fontSize="4xl" justify="left" align="left" marginBottom={5}>Events</Text>
      <UnorderedList>
        <GetEvents />
      </UnorderedList>
    </Box>
  )
}

export default Events;