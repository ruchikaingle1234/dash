import PropTypes from "prop-types";
import "./Discriptions.css";

const Discriptions = ({ className = "" }) => {
  return (
    <div className={`discriptions ${className}`}>
      {/* <div className="bg14">
        <div className="bg-child10" />
      </div> */}
      {/* <div className="paragraph">
        <div className="this-the-new-container">
          <p className="this-the-new">
            This the New creation Of apple This the New creation Of apple This
            the New creation Of
          </p>
          <p className="apple-this-the">
            apple This the New creation Of apple.
          </p>
        </div>
      </div> */}
     


      <div className="head">
        <div className="descriptions">Descriptions</div>
      </div>
      <div className="a">
      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="This the New creation Of apple  This the New creation Of apple This the New creation Of
apple This the New creation Of apple.">
      
</textarea>
</div>
    </div>
  );
};

Discriptions.propTypes = {
  className: PropTypes.string,
};

export default Discriptions;
