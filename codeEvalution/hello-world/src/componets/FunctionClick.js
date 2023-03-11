import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('clickedup');
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
