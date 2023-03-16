import React from 'react'

function MemoComp({name}) {
    console.log("rendering Memo Component");
  return (
    <div>{name}</div>
  )
}

export default MemoComp