import { Box, Container } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src="./images/logoWithLettersWhite.png"
            alt="logo"
            style={{
              // flexGrow: 1,
              display: { xs: "none", sm: "block" },
              width: "250px",
              marginRight: "auto",
              padding: "10px 0",
            }}
          />
          <p style={{ color: "#d2d2d2", marginBottom: "50px", width: "300px" }}>
            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </p>
          <div class="copyright" style={{ paddingTop: "40px" }}>
            Created By <span>GymWhere</span>
            <div>
              &copy; 2024 - <span>GymWhere Inc</span>
            </div>
          </div>
        </Box>
        <Box>
          <div class="links">
            <h3 class="text-light">Links</h3>
            <ul class="list-unstyled">
              <li>Home</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Support</li>
              <li>Terms and Condition</li>
            </ul>
          </div>
        </Box>
        <Box>
          <div class="links">
            <h3 class="text-light">About Us</h3>
            <ul class="list-unstyled">
              <li>Sign In</li>
              <li>Register</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </Box>
        <Box>
          <div class="contact">
            <h3 class="text-light">Contact Us</h3>
            <p
              class="lh-lg mt-3 mb-5"
              style={{ width: "350px", color: "#d2d2d2", marginBottom: "60px" }}
            >
              Get in touch with us via mail phone.We are waiting for your call
              or message
            </p>
            <a
              style={{
                backgroundColor: "#f29603",
                color: "black",
                padding: "0.6rem 5rem",
                borderRadius: "25px",
              }}
              href="#"
            >
              GymWhere@gmail.com
            </a>
            <ul class="icons">
              <li>
                <a class="d-block text-light" href="#">
                  <XIcon />
                </a>
              </li>
              <li>
                <a class="d-block text-light" href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a class="d-block text-light" href="#">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a class="d-block text-light" href="#">
                  <i class="fa-brands fa-youtube fa-lg youtube rounded-circle p-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
