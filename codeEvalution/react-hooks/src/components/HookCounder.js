import React, {useState} from 'react'

function HookCounder() {
const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(count + 1) }>count {count}</button>
    </div>
  )
}

export default HookCounder