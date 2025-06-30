"use client";

import { Box, Typography } from "@mui/material";

export default function Blog() {
  return (
    <Box
      id="blog"
      sx={{
        height: "50vh",
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Blog Coming Soon...</Typography>
    </Box>
  );
}
