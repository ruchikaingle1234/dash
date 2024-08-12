import PropTypes from "prop-types";
import "./AddANew.css";

const AddANew = ({ className = "" }) => {
  return <b className={`add-a-new ${className}`}>Add a New Product</b>;
};

AddANew.propTypes = {
  className: PropTypes.string,
};

export default AddANew;
