import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["jack", "marry", "rose", "jack"];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
  return <div>{ nameList }</div>

  const persons =[
    {
      id: 1,
      name: "burce",
      age: 30,
      skill:"react"
    },
    {
      id: 2,
      name: "rokey",
      age: 35,
      skill:"python"
    },
    {
      id: 3,
      name: "ravi",
      age: 25,
      skill:"c"
    },
    {
      id: 4,
      name: "marry",
      age: 28,
      skill:"react"
    },
  ]

const personList = persons.map(person => <Person key={person.id} person = {person} />)
return <div>{personList}</div>
}
export default NameList;
