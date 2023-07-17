import React from 'react'

export default function Title({text, titleStyle}) {
  return (
    <div>
      <h1 className={titleStyle}>{text}</h1>
    </div>
  )
}
