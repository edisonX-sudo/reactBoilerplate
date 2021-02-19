import React from 'react'

export default function(props) {
  return (
    <div>
      wrap start
      {props.children}
      wrap end
    </div>
  )
}
