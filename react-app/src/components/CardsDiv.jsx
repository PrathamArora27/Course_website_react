import React, { useState, useEffect } from 'react';
import Card from './Card';
import { TailSpin } from 'react-loader-spinner';

const CardsDiv = ({ courses, className, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  // if array is empty then we show a loader
  if (courses.length === 0) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  
  // Helper function to get courses
  
  const getCourses = () => {
    if(category==="All"){
      let allCourses = [];
      Object.values(courses).forEach(courseCategory => {
        courseCategory.forEach(course => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else if(category === "Non"){
      let allCourses = [];
      return allCourses;
    }
    else{
      return courses[category];
    }
  }
  
  const filteredCourses = getCourses();
  
  
  
 

  return (
    <div className={className}>
      {filteredCourses.length===0
      ?(<p>Nothing to Display</p>)
      :(filteredCourses.map(course => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      )))
    }
      
    </div>
  );
};

export default CardsDiv;
