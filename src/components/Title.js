import React from 'react'

export default function title(props) {
  return (
    <div>
    <center>
      <h1>{props.titleText}</h1>
      <p>{props.description}</p>
    </center>
    </div>
  )
}
