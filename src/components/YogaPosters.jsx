import React from 'react';
import './YogaPosters.css'; // Import the CSS file

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function YogaPosters() {
  const yogaData = [
    {
      title: 'HathaYoga',
      description:
        'Hatha yoga is a branch of yoga that involves physical exercises and breathing control techniques to promote mental and physical well-being.',
      image: '/images/HathaYoga.jpg',
    },
    {
      title: 'Iyengar',
      description:
        'Iyengar yoga focuses on precise alignment of the body in each asana, using props like blocks and belts to assist in achieving proper posture.',
      image: '/images/iyenger.jpg',
    },
    {
      title: 'Jivamukti Yoga',
      description:
        'Jivamukti Yoga integrates physical postures, chanting, meditation, and spiritual teachings into a dynamic and uplifting practice.',
      image: '/images/jivyoga.jpg',
    },
    {
      title: 'HotYoga',
      description:
        'Hot yoga involves performing yoga poses in a heated room, helping to increase flexibility and detoxify the body through sweat.',
      image: '/images/Hot.jpg',
    },
    {
      title: 'HathaVinyasa',
      description:
        'Hatha Vinyasa combines traditional Hatha yoga postures with the flowing sequence of Vinyasa, linking breath with movement.',
      image: '/images/vinyasa.jpg',
    },
    {
      title: 'Meditation',
      description:
        'Meditation involves focusing the mind and calming the body, promoting relaxation and a deeper connection to the inner self.',
      image: '/images/medi.jpg',
    },
    {
      title: 'Kundalini',
      description:
        'Kundalini yoga focuses on awakening the dormant spiritual energy at the base of the spine through dynamic movement, breathwork, and mantra chanting.',
      image: '/images/kund.jpg',
    },
    {
      title: 'PowerYoga',
      description:
        'Power yoga is a vigorous and fitness-based approach to yoga that focuses on strength, flexibility, and endurance.',
      image: '/images/power.jpg',
    },
  ];

  return (
    <div className="yoga-container">
      <h1 className="header">Many Practices, One Intention</h1>
      <div className="card-row">
        {yogaData.slice(0, 4).map((yoga, index) => (
          <Card className="yoga-card" key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"  // Increased height
                image={yoga.image}
                alt={yoga.title}
                className="card-image"  // Added class for image styling
              />
              <CardContent>
                <Typography variant="h5" component="div" className="card-title">
                  {yoga.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {yoga.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="card-row">
        {yogaData.slice(4).map((yoga, index) => (
          <Card className="yoga-card" key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"  // Increased height
                image={yoga.image}
                alt={yoga.title}
                className="card-image"  // Added class for image styling
              />
              <CardContent>
                <Typography variant="h5" component="div" className="card-title">
                  {yoga.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {yoga.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
