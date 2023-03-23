import React, { useState, useEffect } from "react";
import "./Items.css";

let data = [
  {
    id: 0,
    title: "hello",
    subtitle: "hii",
  },
  {
    id: 1,
    title: "hello",
    subtitle: "this",
  },
  {
    id: 2,
    title: "hello",
    subtitle: "that",
  },
  {
    id: 3,
    title: "hello",
    subtitle: "what",
  },
];

function Items() {
  const [newdata, setData] = useState(data);
  console.log(newdata);

  function clickHandler(item) {
    console.log({ item });
    const list = newdata.filter((e) => {
        return(

            (e.id !== item)
        )
    })
    console.log(list);
    
    setData(list);
  }
  

  return (
    <div>
      {newdata.map((item) => {
        return (
          <div className="total" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <button onClick={() => clickHandler(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
