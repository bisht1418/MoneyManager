import { Routes, Route } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";

import React from "react";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Pricing from "../Pages/Pricing";
import Solutions from "../Pages/Solutions";
import Customers from "../Pages/Customers";
import Resources from "../Pages/Resources";
import Partners from "../Pages/Partners";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
