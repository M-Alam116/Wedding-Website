import React from 'react'

export default function Button({text, btnStyle, onclick}) {
  return (
    <div>
      <button className={btnStyle} onClick={onclick}>{text}</button>
    </div>
  )
}
