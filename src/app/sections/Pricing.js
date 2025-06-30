"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  {
    title: "Starter",
    price: "9.99",
    features: [
      "2 GB of space",
      "14 days of backups",
      "Social integrations",
      "Client billing",
    ],
  },
  {
    title: "Professional",
    price: "19.99",
    features: [
      "2 GB of space",
      "14 days of backups",
      "Social integrations",
      "Client billing",
      "Remote access",
    ],
  },
  {
    title: "Team",
    price: "49.99",
    features: [
      "2 GB of space",
      "14 days of backups",
      "Social integrations",
      "Client billing",
      "Remote access",
      "Custom domain",
    ],
  },
];

export default function Pricing() {
  return (
    <Box
      id="pricing"
      sx={{
        py: 10,
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Plans & Pricing
      </Typography>
      <Typography mb={6}>
        Only pay for custom hosting or exports. Everything else is free forever.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {plan.title}
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  ${plan.price}
                </Typography>
                <List>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: "green" }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: index === 1 ? "#e91e63" : "#fff",
                    color: index === 1 ? "#fff" : "#000",
                    borderRadius: "30px",
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
