import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";

function Gyms() {
  return (
    <div
      id="Discover"
      className="black-section"
      style={{ backgroundColor: "#252525" }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="white" gutterBottom>
          FEATURED GYMS
        </Typography>
        <Typography align="center" component={"p"} className="special-p">
          Access multiple top gyms through one application
        </Typography>
      </Container>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        // slidesPerView={3}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="card__container swiper"
      >
        <SwiperSlide>
          <article className="card__article swiper-slide">
            <div className="card__image">
              <img
                src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                alt="gym"
                className="card__img"
              />
            </div>

            <div className="card__data">
              <h3 className="card__name">Gym name 1</h3>
              <p className="card__description">
                Description about gym description about gym description about
                gym
              </p>

              <a href="#" className="card__button">
                View More
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card__article swiper-slide">
            <div className="card__image">
              <img
                src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                alt="gym"
                className="card__img"
              />
            </div>

            <div className="card__data">
              <h3 className="card__name">Gym name 2</h3>
              <p className="card__description">
                Description about gym description about gym description about
                gym
              </p>

              <a href="#" className="card__button">
                View More
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card__article swiper-slide">
            <div className="card__image">
              <img
                src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                alt="gym"
                className="card__img"
              />
            </div>

            <div className="card__data">
              <h3 className="card__name">Gym name 3</h3>
              <p className="card__description">
                Description about gym description about gym description about
                gym
              </p>

              <a href="#" className="card__button">
                View More
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="card__article swiper-slide">
            <div className="card__image">
              <img
                src="./images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
                alt="gym"
                className="card__img"
              />
            </div>

            <div className="card__data">
              <h3 className="card__name">Gym name 4</h3>
              <p className="card__description">
                Description about gym description about gym description about
                gym
              </p>

              <a href="#" className="card__button">
                View More
              </a>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gyms;
