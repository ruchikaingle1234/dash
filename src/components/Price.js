import PropTypes from "prop-types";
import "./Price.css";

const Price = ({ className = "" }) => {
  return (
    <div className={`price7 ${className}`}>
      <div className="bg15">
        <div className="bg-child11" />
      </div>
      <div className="price8">
        <input type="text" className="pric" placeholder="$1200"/>
      </div>
      <div className="price-head">
        <div className="price9">Price</div>
      </div>
    </div>
  );
};

Price.propTypes = {
  className: PropTypes.string,
};

export default Price;
