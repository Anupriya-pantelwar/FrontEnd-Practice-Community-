"use client";
import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import {
  Twitter,
  Facebook,
  Instagram,
  GitHub,
  Language,
} from "@mui/icons-material";

const teamMembers = [
  {
    name: "Leah Salomon",
    role: "UI Designer",
    image: "/testimg1.jpg",
    socials: [<Twitter />, <Facebook />, <Instagram />],
  },
  {
    name: "Colin Timmons",
    role: "UX Designer",
    image: "/teamimg2.jpg",
    socials: [<Twitter />, <GitHub />],
  },
  {
    name: "Miguel Osborne",
    role: "Front-end Developer",
    image: "/teamimg3.jpg",
    socials: [<Language />, <GitHub />],
  },
  {
    name: "Taylor Simon",
    role: "Product Manager",
    image: "/teaming4.jpg",
    socials: [<Instagram />],
  },
  {
    name: "Steven MacAlister",
    role: "Copyrighter",
    image: "/teamimg5.jpg",
    socials: [<Twitter />],
  },
];

export default function Team() {
  return (
    <Box
      id="team"
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#2A00A2",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Startup Crew
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "700px", mx: "auto", mb: 6 }}
        >
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
                  {member.role}
                </Typography>
                <Box>
                  {member.socials.map((icon, i) => (
                    <IconButton key={i} sx={{ color: "white" }} size="small">
                      {icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
