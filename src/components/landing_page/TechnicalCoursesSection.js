import React from "react";
import course1 from "../../assets/t-course1.png";
import course2 from "../../assets/t-course2.png";
import course3 from "../../assets/t-course3.png";
import course4 from "../../assets/t-course4.png";
import course5 from "../../assets/t-course5.png";
import Card from "./Card";

export default function TechnicalCoursesSection() {
  const coursesImages = [
    course1,
    course2,
    course3,
    course4,
    course5,
    course1,
    course2,
    course3,
    course4,
    course5,
  ];
  const coursesNames = [
    "Cloud Solutions Architecture",
    "MEAN/MERN Stack",
    "Mobile App Development",
    "Software Quality Assurance",
    "Web Engineering",
    "Cloud Solutions Architecture",
    "MEAN/MERN Stack",
    "Mobile App Development",
    "Software Quality Assurance",
    "Web Engineering",
  ];
  const data = {
    category:"Technical Courses",
    coursesImages: coursesImages,
    coursesNames: coursesNames,
  };
  return (
    <div>
    <div className="mt-5 mb-5">

    <h1 style={{ color: "#332E38", textAlign: "center" }}>
      Available Courses
    </h1>
  </div>
      <Card data={data} />
    </div>
  );
}
