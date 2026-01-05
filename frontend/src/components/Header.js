import React from "react";
import collegelogo from "../assets/LOGO.jpg";
import govtLogo from "../assets/img3.png";
import "./Header.css";

function Header() {
  return (
    <div className="top-header">
      <img src={collegelogo} alt="College Logo" className="logo" />

      <div className="header-text">
        <h1>B P MANDAL COLLEGE OF ENGINEERING, MADHEPURA</h1>
       
        <h4>
         ( Dept. of Science, Technology and Technical Education,
            Govt. of Bihar )
        </h4>
      </div>

        <div className="right-logo">
        <img src={govtLogo} alt="Govt Logo" className="logo" />
        <span className="established">Established : 2016</span>
      </div>
    </div>
  );
}

export default Header;


