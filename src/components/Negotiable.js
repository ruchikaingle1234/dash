import PropTypes from "prop-types";
import "./Negotiable.css";

const Negotiable = ({ className = "" }) => {
  return (
    <div className={`negotiable ${className}`}>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label for="vehicle1"> Negotiable</label>
    </div>
  );
};

Negotiable.propTypes = {
  className: PropTypes.string,
};

export default Negotiable;
