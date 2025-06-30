"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Content() {
  return (
    <Box
      id="content"
      sx={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(186, 104, 200, 0.5), rgba(123, 31, 162, 0.4)),
          url('/contentbackground.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="overline" sx={{ letterSpacing: 2 }}>
        Free Sample
      </Typography>

      <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mt: 2 }}>
        Powerful Generator and Free <br /> Figma Sources
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          mx: "auto",
          mt: 3,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design. All of the components are
        made in the same style, and can easily be integrated into projects,
        allowing you to create hundreds of solutions.
      </Typography>
    </Box>
  );
}
