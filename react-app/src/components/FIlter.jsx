import React, { useEffect } from 'react'

const FIlter = ({filterData,category,setCategory}) => {

  const categoryHandle = (item)=>{
    setCategory(item.title)
  }
  useEffect(()=>{
    console.log(category);
    
  },[category])
  return (
    <div>
     { filterData.map((item,index) => (
      <button onClick={()=>{categoryHandle(item)}} key={item.id}>{item.title}</button>
     ))}
    </div>
  )
}

export default FIlter
