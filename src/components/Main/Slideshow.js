import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

/* Resources */
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

const images = [
  { id: "1", src: img1, title: "1" },
  { id: "2", src: img2, title: "2" },
  { id: "3", src: img3, title: "3" },
  { id: "4", src: img4, title: "4" },
];

const Slideshow = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          fade: false,
        },
      },
    ],
  };
  return (
    <section className="carousel">
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id}>
            <img src={img.src} alt={img.id} key={img.id} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Slideshow;
