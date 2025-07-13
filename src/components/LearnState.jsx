import React from "react";
// import { useState } from "react";

// React.useState();
// useState()

// ===============USESTATE HOOK======================
//state are all the important data that a component is workin
//with at a given point in time.
// in this regard, we have two types of state,
// 1. stateful and 2. stateless component
//stateful component - a component that contains variables
//stateless component - a component that needs no data to
//function or run

// const fruits = ["orange", "banana", "cherry"];
// const [fruit1, fruit2, fruit3] = fruits

const Display = () => {
  const [message, setMessage] = React.useState("Eat at Little Lemon");
  const [buttonName, setButtonName] = React.useState("Eat Button");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          if (message === "Eat at Little Lemon") {
            setMessage("Drink at Little Lemon");
            setButtonName("Eat Button");
          } else if (message === "Drink at Little Lemon") {
            setMessage("Eat at Little Lemon");
            setButtonName("Drink Button");
          }
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Display;
