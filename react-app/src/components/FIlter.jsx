import React from 'react'

const FIlter = ({filterData}) => {
  return (
    <div>
     { filterData.map((item,index) => (
      <button key={item.id}> {item.title}</button>
     ))}
    </div>
  )
}

export default FIlter
