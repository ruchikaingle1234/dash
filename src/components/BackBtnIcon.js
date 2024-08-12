import PropTypes from "prop-types";
import "./BackBtnIcon.css";
import React from "react";


const BackBtnIcon = ({ className = "" }) => {
 
  return (
   
         
  
    // <button className="b1">
    <img className={`back-btn-icon ${className}`} alt="" src="/back-btn.svg" />
  
    // </button>
  );
};

BackBtnIcon.propTypes = {
  className: PropTypes.string,
};

export default BackBtnIcon;
