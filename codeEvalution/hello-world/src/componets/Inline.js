import React from 'react'

const heading = {
    fontSize : '72px',
    color: 'blue'
}

function Inline(props) {
    console.log(props);
  return (
    <div>
      <h1 className={props.className}>Inline</h1>
    </div>
  )
}

export default Inline
