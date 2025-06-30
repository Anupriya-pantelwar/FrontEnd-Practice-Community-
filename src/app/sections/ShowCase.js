"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

const projects = [
  {
    category: "UI KIT",
    title: "Mozart Project",
    image: "/showimg1.jpg",
  },
  {
    category: "FRAMEWORK",
    title: "Startup Framework 2.0",
    image: "/showimg2.jpg",
  },
  {
    category: "PHOTOS",
    title: "From the Sky",
    image: "/showimg3.jpg",
  },
  {
    category: "PICTURES",
    title: "Air Forces",
    image: "/showimg4.jpg",
  },
];

export default function ShowCase() {
  return (
    <Box
      id="showcase"
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#2A00A2",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
          flexWrap="wrap"
        >
          <Typography variant="h5" fontWeight="bold" color="white">
            Last works
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              borderRadius: "20px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#ccc",
              },
            }}
          >
            View all Works
          </Button>
        </Box>

        {/* 2x2 Grid */}
        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: 350,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: 200,
                    borderRadius: 2,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent sx={{ px: 0, mt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "white",
                      opacity: 0.7,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="white">
                    {project.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
