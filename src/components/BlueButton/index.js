import React from "react";
import "./style.scss"; // for styling just by style sheet, we can use scss and use of BEM concept for style isolation
//import style from "./style.module.css"; // We can also Use CSS Modules For Style Isolation

const BlueButton = ({ children, label, ...props }) => {
  // for consistency, I propose we use only Arrow Functional Components with props destructuring syntax
  // However, any extra props will be in props object
  // console.log(style);
  return (
    <button className={"blue-button"} {...props}>
      {/* Styled Components can also be used in place of this of you want to use styled components library, 
      resulting in many advantage and style isolation */}
      {children}
    </button>
  );
};

export default BlueButton;
