import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-20px", // Adjust to move dots up or down
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const data = [
    {
      name: 'John Morgan',
      img: '/images/trainer1.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Ellie Anderson',
      img: '/images/fitnesshall.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Nia Adebayo',
      img: '/images/trainer3.jpeg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Rigo Louie',
      img: '/images/yogahall.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Mia Williams',
      img: '/images/yogaposter.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-slider">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="team-card">
              <div className="team-img-container">
                <img src={d.img} alt={d.name} className="team-img" />
              </div>
              <div className="team-info">
                <p className="team-name">{d.name}</p>
                <p className="team-review">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
