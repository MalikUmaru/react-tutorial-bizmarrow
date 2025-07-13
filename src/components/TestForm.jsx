import React from "react";

const TestForm = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default TestForm;
