import PropTypes from "prop-types";
import "./SaveBtn.css";

const SaveBtn = ({ className = "" }) => {
  return (
    <div className={`save-btn ${className}`}>
      <div className="bg13">
        <div className="bg-child9" />
      </div>
      <div className="download">
        <div className="save-product-parent">
          <button className="save-product1">Save Product</button>
          <img className="download-icon" alt="" src="/download.svg" />
        </div>
      </div>
    </div>
  );
};

SaveBtn.propTypes = {
  className: PropTypes.string,
};

export default SaveBtn;
