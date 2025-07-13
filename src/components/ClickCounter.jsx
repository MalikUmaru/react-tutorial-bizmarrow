import React from "react";

const ClickCounter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("You Clicked ${count} times");
  }, [count]); //runs effect whenever the count changes

  return (
    <div>
      <h1>Simple React Click Game</h1>
      <p>You clicked:{count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
};

export default ClickCounter;
