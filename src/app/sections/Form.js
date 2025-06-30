"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [tab, setTab] = useState(0);

  return (
    <Box
      id="form"
      sx={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(186, 104, 200, 0.5), rgba(123, 31, 162, 0.4)),
          url('/formbackground.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 8, md: 16 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: 900,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#fff">
            We solve digital problems with an outstanding creative flare
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </Typography>
        </Box>

        {/* Form Section */}
        <Paper elevation={4} sx={{ p: 4, width: "100%", maxWidth: 380 }}>
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Sign Up" />
            <Tab label="Login" />
          </Tabs>

          <Box mt={3}>
            <TextField
              label="Your email"
              fullWidth
              margin="normal"
              size="small"
              variant="outlined"
            />
            <TextField
              label="Your password"
              type="password"
              fullWidth
              margin="normal"
              size="small"
              variant="outlined"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                mb: 1,
                backgroundColor: "#1DE9B6",
                color: "#fff",
                "&:hover": { backgroundColor: "#00BFA5" },
              }}
            >
              Create an Account
            </Button>

            <Typography
              align="center"
              variant="body2"
              sx={{ my: 1, color: "text.secondary" }}
            >
              or
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#1DA1F2",
                color: "#fff",
                "&:hover": { backgroundColor: "#0d8ddb" },
              }}
            >
              Login via Twitter
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
