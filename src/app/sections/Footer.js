"use client";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Twitter, Facebook, Google } from "@mui/icons-material";

const footerLinks = [
  "Tour",
  "Features",
  "Pricing Plans",
  "Our Works",
  "Brands",
  "Contacts",
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#2b00b2", color: "white", py: 6, px: 3 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Left - Logo */}
        <Grid item xs={12} md={4} sx={{ mb: { xs: 2, md: 0 } }}>
          <Typography variant="h6" fontWeight="bold">
            Startup 3
          </Typography>
        </Grid>

        {/* Right - Legal & Social */}
        <Grid item xs={12} md={8} textAlign={{ xs: "left", md: "right" }}>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
            Terms
          </Link>
          <IconButton size="small" sx={{ color: "white", mx: 0.5 }}>
            <Twitter fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", mx: 0.5 }}>
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "white", mx: 0.5 }}>
            <Google fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

      <Grid container justifyContent="space-between" alignItems="center">
        {/* Navigation */}
        <Grid item xs={12} md={8}>
          {footerLinks.map((text, index) => (
            <Link
              key={index}
              href="#"
              underline="hover"
              color="inherit"
              sx={{ mr: 2, fontSize: "0.9rem" }}
            >
              {text}
            </Link>
          ))}
        </Grid>

        {/* Copyright */}
        <Grid
          item
          xs={12}
          md={4}
          textAlign={{ xs: "left", md: "right" }}
          mt={{ xs: 2, md: 0 }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
            © 2017 Designmodo. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
