import PropTypes from "prop-types";
import "./Brand.css";

const Brand = ({ className = "" }) => {
  return (
    <div className={`brand ${className}`}>
     <select name="Apple" id="apple">
    <option value="volvo">Apple</option>
    <option value="saab">Top</option>
    <option value="opel">Shoe</option>
    <option value="audi">Other</option>
  </select>
    
      <div className="brand-text">
        <div className="brand1">Brand</div>
      </div>
    </div>
  );
};

Brand.propTypes = {
  className: PropTypes.string,
};

export default Brand;
