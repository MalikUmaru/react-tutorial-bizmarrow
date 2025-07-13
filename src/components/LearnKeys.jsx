import React from "react";

const LearnKeys = () => {
  const fruitList = ["apple", "banana", "cherry", "guava"];

  return(
    fruitList.map((item, index) => (
        <ul>
            <li key={index}>{item}</li>
        </ul>
    ))
  )
};
export default LearnKeys;
