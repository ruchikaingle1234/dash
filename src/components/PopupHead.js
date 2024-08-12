import AddANew from "./AddANew";
import PropTypes from "prop-types";
import "./PopupHead.css";

const PopupHead = ({ className = "" }) => {
  return (
    <div className={`popup-head ${className}`}>
      <AddANew />
    </div>
  );
};

PopupHead.propTypes = {
  className: PropTypes.string,
};

export default PopupHead;
