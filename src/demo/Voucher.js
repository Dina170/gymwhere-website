import { Box, Button, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Voucher() {
  return (
    <div>
      <div id="Voucher">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: { xs: "5px", md: "0 80px" },
          }}
        >
          <Box
            className="txt-section"
            style={{
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
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Ready to get started?
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                display: { xs: "none", md: "block" },
              }}
              color="text.secondary"
            >
              Discover the cutting-edge features and exclusive offers that will
              revolutionize your fitness journey. Take advantage of our
              limited-time voucher discount
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 9,
                backgroundColor: "#000",
                position: "relative",
                py: 3,
                px: 7,
                fontSize: "1.1em",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "0.3s ease",
                ml: { sm: 5, md: 0 },
              }}
              className="main-btn"
              onClick={() => {
                const pricing = document.getElementById("pricing");
                pricing.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Voucher Now
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Voucher;
