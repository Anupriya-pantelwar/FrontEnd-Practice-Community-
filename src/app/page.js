"use client";

import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Form from "./sections/Form";
import Content from "./sections/Content";
import CallToAction from "./sections/CallToAction";
import ShowCase from "./sections/ShowCase";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#000", overflowX: "hidden" }}>
      {/* Navbar positioned absolutely/fixed to overlay on Landing */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
          backgroundColor: "transparent",
        }}
      >
        <Navbar />
      </Box>

      {/* Remove top padding so Navbar sits flush with Landing */}
      <Box>
        <Landing />
      </Box>

      <Box sx={{ py: 8 }}>
        <Content />
      </Box>

      <Box sx={{ py: 8 }}>
        <Features />
      </Box>

      <Box sx={{ py: 8 }}>
        <Form />
      </Box>

      <Box sx={{ py: 8 }}>
        <Testimonials />
      </Box>

      <Box sx={{ py: 8 }}>
        <CallToAction />
      </Box>

      <Box sx={{ py: 8 }}>
        <ShowCase />
      </Box>

      <Box sx={{ py: 8 }}>
        <Team />
      </Box>

      <Box sx={{ py: 8 }}>
        <Contact />
      </Box>

      <Box sx={{ py: 8 }}>
        <Pricing />
      </Box>

      <Footer />
    </Box>
  );
}
