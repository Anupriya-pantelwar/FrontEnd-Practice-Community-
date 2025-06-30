"use client";

import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import { SiBehance } from "react-icons/si";
import Link from "next/link";

const navLinks = ["Home", "Features", "Pricing", "Blog"];

export default function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "center",
          display: "flex",
          gap: 4,
        }}
      >
        {/* Navigation Links and Icons in one row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navLinks.map((section) => (
            <Button
              key={section}
              href={`#${section.toLowerCase()}`}
              sx={{ color: "#fff", fontWeight: "bold", textTransform: "none" }}
            >
              {section}
            </Button>
          ))}

          {/* Icons at the end of nav */}
          <IconButton href="#" sx={{ color: "#fff" }}>
            <PublicIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "#fff" }}>
            <SiBehance />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
