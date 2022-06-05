import React from "react";

function NavBar() {
  //return a <nav> element
  //inside nav element
    //an <a> element with href attrubute set to #home and content text set to "Home"
    //an <a> element with href attribute set to #about, and content text set to "About"
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

export default NavBar;
