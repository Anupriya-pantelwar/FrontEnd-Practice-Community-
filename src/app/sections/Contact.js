"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";

const budgets = ["$500", "$1000", "$5000", "$10,000"];

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(186, 104, 200, 0.5), rgba(123, 31, 162, 0.4)),
          url("/contactbackground.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 10,
        px: 3,
        color: "white",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {/* Left Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 0, md: 4 } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Let’s Keep in Touch
            </Typography>
            <Typography variant="body1" mb={4} sx={{ maxWidth: 400 }}>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </Typography>
            <Typography variant="body2" mb={1}>
              📞 +1 555 505 5050
            </Typography>
            <Typography variant="body2" mb={1}>
              📧 info@designmodo.com
            </Typography>
            <Typography variant="body2">
              🏢 San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              2300909
            </Typography>
          </Box>
        </Grid>

        {/* Right Form Content */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              p: 4,
              bgcolor: "white",
              color: "black",
              maxWidth: 500,
              mx: "auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption">YOUR NAME</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="First name"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption">BUDGET</Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  defaultValue="$500"
                  variant="outlined"
                  sx={{ mt: 1 }}
                >
                  {budgets.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption">INPUT FIELD</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="name@mail.com"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption">YOUR MESSAGE</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Message"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox defaultChecked color="success" />}
                  label="Send me a copy"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    bgcolor: "#00d9c0",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
