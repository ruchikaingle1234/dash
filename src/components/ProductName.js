import PropTypes from "prop-types";
import "./ProductName.css";

const ProductName = ({ className = "" }) => {
  return (
    <div className={`product-name ${className}`}>
      <div className="product-name1">Product Name</div>
      <div className="product-name-child" />
      <input type="text" className="mackbook-pro" placeholder="Mackbook Pro 2021 14"/>
    </div>
  );
};

ProductName.propTypes = {
  className: PropTypes.string,
};

export default ProductName;
