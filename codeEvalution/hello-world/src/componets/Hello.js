import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>hello John</h1>
    //     </div>

    // )
    return React.createElement('div',{id: "hello", className: "john"}, React.createElement('h1', null, "hello John"))
}

export default Hello