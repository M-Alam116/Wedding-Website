import React from 'react'

export default function LocationComp({image, text}) {

  return (
    <div className='location-comp'>
        <img src={image} alt="islamabad"/>
      <p>{text}</p>
    </div>
  )
}
