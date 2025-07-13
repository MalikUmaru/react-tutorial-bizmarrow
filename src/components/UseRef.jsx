import React from "react";

const FocusInput = () => {
  const inputRef = React.useRef(null); //create a reference to the input ref

  const focusRef = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusRef}>focus input</button>
    </div>
  );
};

export default FocusInput;
