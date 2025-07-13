import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/Providers/ThemeContext";

const Header =()=>{
    //get the provided context
    const {isDark, toggleTheme} = useContext(ThemeContext);
    return(
        < header style= {{
            backgroundColor: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '000',
            padding: '10px'

        }}>
            <h1>My mode toggler</h1>
            <button onClick={toggleTheme}>
                Switch to:{isDark ? "light": "Dark"} Mode
            </button>
            </header>
    )
}




// function Header() {
//     return(
//         <div>
//             This is the Header section of this page
//         </div>
//     )
// }

export default Header;