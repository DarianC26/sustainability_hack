import React from "react";

const Navbar = () => {
  const openNav = () => {
    console.log("clicked");
  };

  return (
    <div className="navbar">
      <span className="navButton" onClick={openNav}>
        Click Me!
      </span>
    </div>
  );
};

export default Navbar;
