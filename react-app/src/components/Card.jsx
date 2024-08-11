import React from 'react'
import { FcLike } from "react-icons/fc";

const Card = ({course}) => {
  return (
    <div>
      <div className='imageClass'>
        <img src={course.image.url} alt="" />
      </div>

      <button><FcLike fontSize="1.75 rem"/></button>
      <p>{course.title}</p>
      <p>{course.description}</p>
    </div>
  )
}

export default Card
