import React from 'react'

function ChildComponent(props) {
    console.log(props);
  return (
    <div>
      <button onClick={() => props.greetHandlers("child")}>Greet parent</button>
    </div>
  )
}

export default ChildComponent
