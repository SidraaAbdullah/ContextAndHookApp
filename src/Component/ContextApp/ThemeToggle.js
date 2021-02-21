import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContex";



const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle the Theme</button>
    </div>
  );
};

export default ThemeToggle;

// class ThemeToggle extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return (
//       <div>
//         <button onClick={toggleTheme}>Toggle the Theme</button>
//       </div>
//     );
//   }
// }
