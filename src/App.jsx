import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeeklyMessage from "./components/WeeklyMessage";

import Display from "./components/LearnState";
import ContactForm from "./components/FormData";
import Candidate from "./components/Candidate";
import Cand from "./components/Cand";
//import Counter from "./components/Counter";
import Conditional from "./components/Conditional";
import TestForm from "./components/TestForm";
// import UserList from "./components/UseEffects";
import ClickCounter from "./components/ClickCounter";
import FocusInput from "./components/UseRef";
import Counter from "./components/UseStateHooks";
import ShoppingCart from "./components/CartReducer";
import Header from "./components/Header";
import { ThemeProvider } from "./Context/Providers/ThemeContext";
import LearnKeys from "./components/LearnKeys";
import LearnLists from "./components/List";
import TodoListApp from "./components/Todo";

function App() {
  return (
    <>
    <TodoListApp />
    {/* <LearnLists />
    <LearnKeys />  */}
    {/* <ThemeProvider>
      <Header />
    </ThemeProvider> */}

    {/* <ShoppingCart />
    <Counter />
      <FocusInput /> */}

      {/* <ClickCounter /> */}
      {/* <UseEffects /> */}
      {/* <Cand />
      <TestForm />
      <Conditional />
      <Counter /> */}
      {/* <Test /> */}
      {/* <ContactForm /> */}
      {/* <WeeklyMessage /> */}
      {/* <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/policies" element={<Policies />} />
      </Routes> */}
    </>
  );
}

export default App;
