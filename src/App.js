import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
