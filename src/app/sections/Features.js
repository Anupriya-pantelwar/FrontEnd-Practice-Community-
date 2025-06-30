"use client";

import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";
import FolderIcon from "@mui/icons-material/Folder";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function Features() {
  return (
    <Box
      id="features"
      sx={{
        position: "relative",
        backgroundImage: `
          linear-gradient(to bottom, rgba(42, 0, 77, 0.6), rgba(42, 0, 77, 0.7)),
          url('/featuresbackground.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 10, md: 14 },
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* MacBook Frame and Screen */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "960px" },
            height: { xs: 540, md: 540 },
            flexShrink: 0,
            ml: { xs: 0, md: "-300px" },
            mt: { xs: 0, md: "-40px" },
          }}
        >
          {/* Background image inside the screen */}
          <Box
            sx={{
              position: "absolute",
              top: "85px",
              right: "230px",
              width: "500px",
              height: "360px",
              zIndex: 1,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/macbook_backgroundimg.jpg"
              alt="MacBook Screen"
              width={705}
              height={360}
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </Box>

          {/* MacBook Frame overlay */}
          <Image
            src="/macbook_img.png"
            alt="MacBook Frame"
            fill
            style={{
              objectFit: "contain",
              zIndex: 2,
            }}
            priority
          />
        </Box>

        {/* Right side content */}
        <Box
          sx={{
            flex: 1,
            pl: { md: 8 },
            pt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
            }}
          >
            We Create Something New
          </Typography>

          <Typography
            variant="body1"
            mb={5}
            sx={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "500px",
            }}
          >
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <FolderIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  30 New Feature Pages
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "rgba(255,255,255,0.8)",
                    mt: 0.5,
                  }}
                >
                  Startup Framework contains components and complex blocks which
                  can easily.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <DiamondIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Useful Symbol Components
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "rgba(255,255,255,0.8)",
                    mt: 0.5,
                  }}
                >
                  Samples will show you the feeling on how to play around using
                  the components.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Navigation dots */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: index === 0 ? "#fff" : "#aaa",
              opacity: 0.8,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
