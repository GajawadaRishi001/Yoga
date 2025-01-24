// TeamSlider.jsx
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TeamSlider.css';  // Import the external CSS file

const teamMembers = [
  {
    name: 'John Doe',
    title: 'Expert in HathYoga',
    img: '/path/to/image1.jpg', // Replace with actual image paths
  },
  {
    name: 'Jane Smith',
    title: 'Expert in Vinyasa Yoga',
    img: '/path/to/image2.jpg',
  },
  {
    name: 'Sam Wilson',
    title: 'Expert in Ashtanga Yoga',
    img: '/path/to/image3.jpg',
  },
  {
    name: 'Lisa Brown',
    title: 'Expert in Kundalini Yoga',
    img: '/path/to/image4.jpg',
  },
];

export default function TeamSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true, // Enable dots navigation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Typography variant="h4" className="heading">
        Our All Teachers
      </Typography>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <Card key={index} className="team-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={member.img}
                alt={member.name}
                className="team-image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="name"
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" className="title">
                  {member.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
