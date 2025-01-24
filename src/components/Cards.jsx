import React from 'react';
import './Cards.css'; // Import the CSS file

const Cards = () => {
  const teachers = [
    {
      name: 'Teacher 1',
      subject: 'Math Expert',
      description: 'Math Expert with 10 years of experience',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Teacher 2',
      subject: 'Science Enthusiast',
      description: 'Science Enthusiast passionate about research',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Teacher 3',
      subject: 'English Specialist',
      description: 'English Specialist with a love for literature',
      imgUrl: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className="cards-wrapper">
      <h1>Meet Your Teachers</h1>
      <div className="cards-container">
        {teachers.map((teacher, index) => (
          <div className="card" key={index}>
            <img src={teacher.imgUrl} alt={teacher.name} />
            <h2>{teacher.name}</h2>
            <h3>{teacher.subject}</h3>
            <p>{teacher.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
