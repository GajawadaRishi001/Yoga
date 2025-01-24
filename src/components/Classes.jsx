import React from "react";
import "./Classes.css"; // Import the CSS file

const classes = [
  {
    title: <h1>About Us</h1>,
    image: "/images/yogause.jpg", // Add appropriate image paths
    description:
      "At our wellness center, we are passionate about providing a space where individuals can explore the power of holistic health practices. Our yoga classes are meticulously designed for people of all levels—from beginners to advanced practitioners. We understand that health is not just about physical fitness but also mental well-being. That’s why our yoga program goes beyond just postures. It incorporates a complete approach to wellness that combines asanas (yoga postures), pranayama (breathing techniques), and meditation to create balance in your body and mind. Our expert instructors guide each student with personalized attention, ensuring that everyone progresses at their own pace. Whether you're looking to relieve stress, gain flexibility, improve your strength, or cultivate inner peace, our yoga classes offer something for everyone. Additionally, our center emphasizes the importance of community, creating an environment where people can connect, share their journeys, and inspire one another. By joining our yoga program, you are not just learning postures; you are embracing a lifestyle that supports your well-being and personal growth. Yoga helps foster a deeper connection with yourself and enhances mindfulness. With the tools and guidance provided, students can expect long-term benefits that contribute to a more balanced and healthy life. Whether you’re seeking relief from chronic pain or simply want to improve your overall health, our program will help you achieve your goals with patience and dedication. We welcome you to join us and begin your transformative journey toward a healthier and more peaceful life.",
  },
  {
    title: <h1>Yoga Benefits</h1>,
    image: "/images/yoga.webp",
    description:
      "Yoga is more than just a physical exercise—it is a transformative practice that improves both your physical and mental health. The benefits of yoga are vast, and it has been practiced for thousands of years for its ability to foster balance, strength, and mental clarity. One of the most notable physical benefits of yoga is its ability to increase flexibility. Many of the poses in yoga require stretching, which helps to lengthen muscles and improve joint mobility. This increased flexibility not only enhances your range of motion but also reduces the risk of injury by making your muscles and tendons more pliable. In addition to flexibility, yoga also helps to build strength. By holding various poses, your body works against gravity to tone muscles, increase endurance, and improve posture. The focus on breathwork during yoga helps to deepen the stretches and improve overall muscle engagement. On the mental side, yoga is widely recognized for its ability to reduce stress and promote relaxation. Through mindful breathing and meditation, yoga helps activate the parasympathetic nervous system, which calms the body and reduces anxiety. The practice encourages present-moment awareness, which helps clear the mind and fosters a sense of peace. Yoga can also improve your sleep patterns by regulating the nervous system, helping you to relax and unwind before bedtime. Furthermore, regular yoga practice promotes better digestion, improves circulation, and supports a healthy immune system. In addition, yoga has been shown to enhance mental clarity, focus, and emotional well-being. Whether you’re dealing with chronic stress, recovering from an injury, or simply looking to maintain your overall health, yoga provides a holistic approach that benefits both the mind and the body. By incorporating yoga into your lifestyle, you’ll experience improved health, emotional resilience, and greater life satisfaction.",
  },
  {
    title: <h1>Why Join Us</h1>,
    image: "/images/whyJoinUs.jpg",
    description:
      "Our wellness center is more than just a fitness space—it's a community dedicated to promoting holistic health and well-being. We offer a variety of programs, including fitness classes, therapy sessions, and yoga, all designed to support you in achieving your personal health goals. Our team of certified professionals, including fitness trainers, yoga instructors, and licensed therapists, work together to create personalized plans that are tailored to your unique needs. Whether you're new to fitness or have been practicing for years, we ensure that each program is designed to meet you where you are. We believe that true health encompasses the body, mind, and spirit. That's why our classes are not only focused on physical fitness but also on improving your mental clarity, reducing stress, and building emotional resilience. By joining us, you’re not just signing up for a class; you’re committing to a lifestyle change that will improve your overall quality of life. Our community is welcoming and inclusive, allowing you to connect with others who are on a similar path to health and wellness. We support you every step of the way and celebrate your milestones, whether big or small. In addition, our state-of-the-art facilities are designed to provide you with a comfortable, safe, and motivating environment. You’ll have access to the latest equipment, soothing spaces, and a wide range of classes that cater to all fitness levels. Whether you're looking to lose weight, improve flexibility, reduce anxiety, or simply feel better overall, our wellness center is the place where you can make those goals a reality. Join us today and become a part of our thriving community of like-minded individuals committed to living their best lives.",
  },
 
];

const Classes = () => {
  return (
    <div className="classes-container">
      {classes.map((classItem, index) => (
        <div
          className={`class-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          {/* Image Card */}
          <div className="class-image">
            <img src={classItem.image} alt={classItem.title} />
          </div>

          {/* Description */}
          <div className="class-description">
            <h3>{classItem.title}</h3>
            <p>{classItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
