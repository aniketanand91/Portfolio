import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation';  // Navigation styles
import 'swiper/css/pagination';  // Pagination styles
import './Slider.css'

// Import the images
import backgroundslide1 from '../images/beach.png';
import backgroundslide2 from '../images/sand.png';
import backgroundslide3 from '../images/sunset.png';

const Slider = () => {
    const slides = [
        { id: 1, image: backgroundslide1, alt: 'Beach Slide' },
        { id: 2, image: backgroundslide2, alt: 'Sand Slide' },
        { id: 3, image: backgroundslide3, alt: 'Sunset Slide' },
    ];

    return (
        <div className="slider-container">
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000, // Set autoplay delay
                  disableOnInteraction: false,
                }}
                // navigation={true}  // Enable navigation arrows
                pagination={{
                  clickable: true,  // Enable clickable dots
                  dynamicBullets: true,  // Optional: Make dots dynamic (they'll enlarge for the current slide)
                }}
                modules={[Autoplay, Navigation, Pagination]} // Register the required Swiper modules
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img src={slide.image} alt={slide.alt} className="slide-image" />
                  </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
