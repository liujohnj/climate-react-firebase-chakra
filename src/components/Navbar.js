import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <Flex bg="green.100" justify="right">
      <Link m={5} href="/about">About</Link>
      <Link m={5} href="/calendar">Calendar</Link>
      <Link m={5} href="/contact">Contact</Link>
      <Link m={5} href="/events">Events</Link>
      <Link m={5} href="/admin">Admin</Link>
    </Flex>
  )
}

export default Navbar;