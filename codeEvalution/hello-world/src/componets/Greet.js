import React from 'react'
 
const Greet = (props) => {
     const { name , color } = props
    return ( <div>
        <h1>Hello {name} shade  {color}</h1>

        </div>)
}
export default Greet