import React from 'react';
import { Link } from 'react-router-dom';
import aboutuscss from "./about.css"


const AboutUsPage = () => {
  return (
      <div className="about-us-container"><div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
        </div>
      </div>
    </div>
          
      <h1 className='d-flex justify-content-center'>About Us</h1>
          <h3 className='d-flex justify-content-center'>Welcome to Skilly Brains</h3>
          
      <p>
        At [Your Company Name], we are passionate about education and providing a platform for individuals to enhance their knowledge and skills. Our Learning Management System is designed to facilitate effective learning experiences, whether you are a student, instructor, or administrator.
      </p>
      <p>
        Our goal is to create a user-friendly and intuitive platform that enables seamless communication, collaboration, and access to educational resources. With a wide range of features and tools, we strive to empower learners and educators to achieve their full potential.
      </p>
      <p>
        Whether you are looking to acquire new skills, improve existing ones, or manage educational content, our Learning Management System has you covered. We offer a comprehensive set of features, including course management, assessments, discussion boards, multimedia support, and progress tracking.
      </p>
      <p>
        We value your feedback and suggestions. If you have any questions, comments, or ideas for improvement, please don't hesitate to reach out to our team. We are dedicated to continuously enhancing our platform to meet the evolving needs of our users.
      </p>
      <p>
        Thank you for choosing our Learning Management System. We hope you have a positive and enriching learning experience!
      </p>
    </div>
  );
};

export default AboutUsPage;
