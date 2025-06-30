"use client";

import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Forget About Code",
    subtitle:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    button: "Create an Account",
    bgImage: "/landingbackground.jpg",
  },
  {
    title: "Launch Your Startup",
    subtitle:
      "Powerful components to create your startup's website quickly and efficiently with a modern look.",
    button: "Get Started",
    bgImage: "/contentbackground.jpg",
  },
];

export default function Landing() {
  return (
    <Box id="home" sx={{ height: "100vh", position: "relative" }}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        style={{ height: "100vh" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "100vh",
                backgroundImage: `
                  linear-gradient(to bottom, rgba(186, 104, 200, 0.5), rgba(123, 31, 162, 0.4)),
                  url(${slide.bgImage})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                px: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Startup 3
              </Typography>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                maxWidth="600px"
                gutterBottom
                sx={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                {slide.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "30px",
                  paddingX: 4,
                  paddingY: 1.5,
                  backgroundColor: "#1E88E5", // solid blue color
                  "&:hover": {
                    backgroundColor: "#1565C0", // darker on hover
                  },
                }}
              >
                {slide.button}
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          z-index: 10;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
          margin: 0 4px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </Box>
  );
}
