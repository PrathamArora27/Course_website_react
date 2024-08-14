import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const heartHandler = () => {
    setLikedCourses(prevLikedCourses => {
      const isLiked = prevLikedCourses.includes(course.id);

      if (isLiked) {
        toast.info(`${course.title} is removed`);
        return prevLikedCourses.filter(id => id !== course.id);
      } else {
        toast.success(`${course.title} is Liked`);
        return [...prevLikedCourses, course.id];
      }
    });
  };

  return (
    <div className='w-[300px]'>
      <div className='imageClass'>
        <img src={course.image.url} alt="" />
      </div>
      <button onClick={heartHandler}>
        {!likedCourses.includes(course.id)
          ? (<FcLikePlaceholder fontSize="1.75rem"/>)
          : (<FcLike fontSize="1.75rem"/>)
        }
      </button>
      <p>{course.title}</p>
      <p>
        {
          course.description.length>=100
          ?(course.description.substr(0,100)+"...")
          :(course.description)
        }
      </p>
    </div>
  );
};

export default Card;
