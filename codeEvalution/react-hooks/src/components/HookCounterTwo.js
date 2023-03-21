import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incremtingFive = () => {
        for(let i = 0; i < 5 ; i++ ){
            setCount(prvCount  => prvCount + 1)
        }
    }
  return (
    <div>
        Count = {count}
        <button onClick={ () => setCount(initialCount)} >Reset</button>
        <button onClick={ () => setCount(count + 1)} >incerment</button>
        <button onClick={ () => setCount(count - 1)} >Decrement</button>
        <button onClick={ incremtingFive } >incrementing 5</button>
    </div>
  )
}

export default HookCounterTwo