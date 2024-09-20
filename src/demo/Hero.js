import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <div>
      <div id="HeroHome">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: { xs: "5px", md: "0 80px" },
          }}
        >
          <Box
            className="txt-section"
            sx={{
              paddingRight: { xs: 0, md: "50px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "32px", lg: "40px" },
                padding: { xs: "20px", md: 0 },
                fontWeight: "bold",
                color: "black",
                width: { xs: "400px", lg: "500px" },
              }}
            >
              Unlock the Potential of our Fitness Website
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                display: { xs: "none", md: "block" },
              }}
              color="text.secondary"
            >
              Join our community and achieve your fitness goals with expert
              trainers and comprehensive programs.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 9,
                backgroundColor: "#000",
                position: "relative",
                py: 3,
                px: 10,
                fontSize: "1.1em",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "0.3s ease",
                // ml: { xs: "auto", md: 0 },
              }}
              className="main-btn"
              onClick={() => {
                const voucher = document.getElementById("Voucher");
                voucher.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scroll Down
              <div class="down-arrow"></div>
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Hero;
