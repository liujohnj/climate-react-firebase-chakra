import React from "react";
import { ListItem } from "@chakra-ui/react";


const Event = ({eventName}) => {

  return (
    <ListItem>{eventName}</ListItem>
  )
}

export default Event;
