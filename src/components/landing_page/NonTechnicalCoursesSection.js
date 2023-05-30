import React from 'react'
import course1 from "../../assets/nt-course1.png";
import course2 from "../../assets/nt-course2.png";
import course3 from "../../assets/nt-course3.png";
import course4 from "../../assets/nt-course4.png";
import course5 from "../../assets/nt-course5.png";
import Card from './Card';
export default function NonTechnicalCoursesSection() {
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
        "Typing Course",
        "Graphic Design",
        "Freelancing",
        "Microsoft Office",
        "Digital Marketing",
        "Typing Course",
        "Graphic Design",
        "Freelancing",
        "Microsoft Office",
        "Digital Marketing",
      ];
    const data = {
        category:"Non Technical Courses",
        coursesImages: coursesImages,
        coursesNames: coursesNames,
      };
  return (
      <div><Card data={ data} /></div>
  )
}
