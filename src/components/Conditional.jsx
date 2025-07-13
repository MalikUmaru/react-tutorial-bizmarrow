const Conditional = () => {
    
    const loggeIn = true;
    if (loggeIn) {
      return  <h1>You are Logged in, Welcome!</h1>;
    } else {
      return <h1>Please Log in</h1>;
    }
  };
  
  export default Conditional;