// const [state, setState] = useState(initialValue);
// state - state is the current value/data a stateful component is working with
// setState() - the state updating function
// initialValue - default state

import React from "react";

const Counter = () => {
  // let [number, setNumber] = React.useState(0);
  // const increaseNum = () => {
  //     setNumber(number++)
  //     }
  // const decreaseNum = () => {
  //     setNumber(number--)
  //     }
  // return (
  //     <div>
  //         <h1>{number}</h1>
  //         <button onClick={increaseNum}>Increase</button>
  //         <button onClick={decreaseNum}>Decrease</button>
  //     </div>
  // )

  // BULLET
  // let [bullet, setBullet] = React.useState(10);
  // const shoot = () => {
  //     if(bullet >= 0){
  //         setBullet(bullet--);
  //     } else if(bullet < 0) {
  //         alert("No ammo! Reload!")
  //     }
  // }
  // const reload = () => {
  //     setBullet(bullet = 10)
  // }
  // return (
  //     <div>
  //         <h1>{bullet}</h1>
  //         <button onClick={shoot}>Shoot</button>
  //         <button onClick={reload}>Reload</button>
  //     </div>
  // )

  // DISPLAY MESSAGE
  let [message, setMessage] = React.useState("");
  const [displayValue, setDisplayValue] = React.useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleDisplay = () => {
    setDisplayValue(message);
    setMessage("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type Something"
        value={message}
        onChange={handleChange}
      />

      <button onClick={handleDisplay}>Display</button>
      <p>You typed: "{displayValue}"</p>
    </div>
  );
};

export default Counter;
