"use client";
import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";

const testimonials = [
  {
    name: "RAYHAN CURRAN",
    image: "/testimg1.jpg",
    text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
  },
  {
    name: "KAYLEY FRAME",
    image: "/testimg2.jpg",
    text: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website.",
  },
  {
    name: "GENE WHITFIELD",
    image: "/testimg3.jpg",
    text: "The most important part of the Startup Framework is the samples.",
  },
  {
    name: "ALLAN KIM",
    image: "/testimg4.jpg",
    text: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
  },
];

export default function Testimonial() {
  return (
    <Box
      id="testimonials"
      sx={{
        py: 8,
        backgroundColor: "#0D0C38",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Happy Clients
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          rowGap: 6,
          maxWidth: 1000,
          mt: 6,
          mx: "auto",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              backgroundColor: "#0D0C38",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              p: 2.5,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              minHeight: 160,
              color: "white",
            }}
          >
            <Box display="flex" alignItems="flex-start" gap={2}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{ width: 44, height: 44, mt: 0.5 }}
              />
              <Typography
                variant="body2"
                sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "white" }}
              >
                {testimonial.text}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{
                opacity: 0.6,
                fontWeight: 500,
                mt: 2.5,
                pl: "52px",
                color: "white",
              }}
            >
              {testimonial.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
