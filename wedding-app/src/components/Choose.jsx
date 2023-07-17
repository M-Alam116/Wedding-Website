import React from 'react'

export default function Choose({icon, heading, description}) {
  return (
    <div className='choose' style={{
        display: "flex",
        flexDirection: "column",
        width: "22rem",
        background: "white",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        padding: "2rem 3rem",
        borderRadius: "10px",
        textAlign: "center",
    }}>
      <span className='choose-icon'>
       {icon}
      </span>
      {/* <BiNetworkChart className='choose-icon'/> */}
      <h1 style={{fontSize: "20px", fontWeight: "700", margin: "1.5rem 0"}}>{heading}</h1>
      <p style={{fontSize: "16px", textAlign: "center"}}>{description}</p>
    </div>
  )
}
