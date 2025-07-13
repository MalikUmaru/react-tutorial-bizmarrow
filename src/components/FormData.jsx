// in react we handle forms using controlled components
// A controlled components means the input fields are tied to a state
//
import React from "react";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [range, setRange] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    console.log("Name:" + name);
    console.log("Message:" + message);
    console.log("Range:" + range);
    // clear the input field
    setName("");
    setMessage("");
    setRange(0);
    alert("Your feedback form is sucessfullt submitted to our database");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === "enter") {
                handleSubmit(e);
              }
            }}
          />
        </label>
        <br />
        <p>{range}</p>
        <label>
            Rate yourself:
            <input type="range" max={10} min={0} value={range}
            onChange={(e)=> setRange(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Send Form</button>
      </form>
    </div>
  );
};

export default ContactForm;
