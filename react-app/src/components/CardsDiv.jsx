import React from 'react'

const CardsDiv = ({ courses }) => {
  if (!courses) {
    return <p>Loading...</p>; // or any placeholder content
  }
  
  // console.log(courses);
  let allCourses = [];

  const getCourses = ()=>{

    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
        // console.log(course)
        allCourses.push(course);
      })
      
    })
    
    console.log(allCourses)
    return allCourses;
  }


``
  return (
    <div>
      getCourses()
    </div>
  )
}

export default CardsDiv
