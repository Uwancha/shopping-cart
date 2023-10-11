import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../styles/imageslider.module.css"

import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} >
        <img src={image1} alt="image slider 1" className={styles.image} />
        <img src={image2} alt="image slider  2" className={styles.image} />
        <img src={image3} alt="image slider  2" className={styles.image} />
      </Slider>
    </div>
  );
}

export default ImageSlider;