import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css";
import java_logo from "../images/java.png";
import aws_logo from "../images/aws_logo.png"
import linux_server_logo from "../images/linux.png";
import sql_logo from "../images/sql-server.png"
import javascript_logo from "../images/javascript.png";
import react_logo from "../images/react.png"
import node_logo from "../images/node-js.png"

const CardCarousel = () => {
  const cardData = [
    {
      title: "Java",
      imageUrl: java_logo,
    },
    {
      title: "AWS Cloud",
      imageUrl: aws_logo,
    },
    {
      title: "Linux Server",
      imageUrl: linux_server_logo,
    },
    {
      title: "SQL",
      imageUrl: sql_logo,
    },
    {
      title: "Javascript",
      imageUrl: javascript_logo,
    },
    {
        title: "React js",
        imageUrl: react_logo,
        
      },
      {
        title: "Node js",
        imageUrl: node_logo,
      },

  ];

  const settings = {
    dots: true, // Add navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of cards to show
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1, // Number of cards to scroll per action
    prevArrow: <button className="slick-prev"></button>, // Custom previous arrow
    nextArrow: <button className="slick-next"></button>,


    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='technologies' className="carousel-container">
    <div className="carousel-heading"><h1>Technologies</h1></div>
    <div className="carousel-con">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="carousel-card">
            <div className="card-content">
              <img src={card.imageUrl} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CardCarousel;
