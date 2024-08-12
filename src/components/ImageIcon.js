import PropTypes from "prop-types";
import { useState } from "react";
import "./ImageIcon.css";

const ImageIcon = ({ className = "" }) => {
 

 
  return (
    <>
    <img className={`image-icon ${className}`} alt="" src="/image@2x.png" />
    {/* <input type="file" name="filename" accept="image/gif, image/jpeg, image/png"/> */}
    {/* <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" accept="image/*" name="image" id="imageUpload"/>
    <br><br>
    <button type="submit">Upload Image</button>
  </form>
    */}
    </>
  );
};

ImageIcon.propTypes = {
  className: PropTypes.string,
};

export default ImageIcon;
