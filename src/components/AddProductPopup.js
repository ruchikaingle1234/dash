import SaveBtn from "./SaveBtn";
import Discriptions from "./Discriptions";
import Negotiable from "./Negotiable";
import Price from "./Price";
import Brand from "./Brand";
import ProductName from "./ProductName";
import ImageIcon from "./ImageIcon";
import PopupHead from "./PopupHead";
import BackBtnIcon from "./BackBtnIcon";
import PropTypes from "prop-types";
import "./AddProductPopup.css";

const AddProductPopup = ({ className = "" }) => {
  return (
    <div className={`add-product-popup ${className}`}>
      <div className="bg17">
        <div className="bg-child13" />
      </div>
      <SaveBtn />
      <Discriptions />
      <Negotiable />
      <Price />
      <Brand />
      <ProductName />
      <ImageIcon />
      <PopupHead />
      <BackBtnIcon />
    </div>
  );
};

AddProductPopup.propTypes = {
  className: PropTypes.string,
};

export default AddProductPopup;
