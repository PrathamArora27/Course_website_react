import React, { useState,useEffect } from 'react'
import Card from './Card';
import { TailSpin } from 'react-loader-spinner';

const CardsDiv = ({ courses,className }) => {
  const [likedCourses,setLikedCourses] = useState([]);



  if (courses.length==0) {
    return ( <div className={`flex items-center justify-center h-full ${className}`}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>) 
  }

  // console.log(courses);
  let allCourses = []; 

  const getCourses = () => {

    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        // console.log(course)
        allCourses.push(course);
      })

    })

    // console.log(allCourses)
    return allCourses;
  }


  ``
  return ( 
    <div className={className}>
      {getCourses().map((course, index) => {
        return (
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        )
      }
      )}
    </div>
  )
}

export default CardsDiv
