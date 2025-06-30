"use client";
import { Box, Button, Typography, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function CallToAction() {
  return (
    <Box
      id="call-to-action"
      sx={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(to bottom, rgba(186, 104, 200, 0.5), rgba(123, 31, 162, 0.4)),
          url('/calltoactionbackground.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          Easy to setup. <br /> Easy to maintain
        </Typography>
        <Typography variant="body1" maxWidth="500px">
          Bootstrap is a widely-used, sleek, intuitive and powerful front-end
          framework for faster and easier web development.
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              minWidth: 50,
              height: 50,
              padding: 0,
              "&:hover": {
                backgroundColor: "#cc0000",
              },
            }}
          >
            <PlayArrowIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1de9b6",
              color: "white",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1dc4a2",
              },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
