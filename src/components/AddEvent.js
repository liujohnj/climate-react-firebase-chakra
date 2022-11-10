import React, { useState } from 'react';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


const AddEvent = () => {

  const [EventName, setEventName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EventName !== "") {
      await addDoc(collection(db, "events"), {
        eventName: EventName,
      });
      setEventName("");
    }
  }

  return (
    <Flex flexDirection="column" marginTop={5}>
      <Text fontSize="2xl">Add new event</Text>
      <Input marginTop={4} width={480} placeholder='Event name'value={EventName} onChange={(e) => setEventName(e.target.value)} />
      <Button maxWidth={100} bg="green.500" textColor="white" marginTop={3} onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
}

export default AddEvent;