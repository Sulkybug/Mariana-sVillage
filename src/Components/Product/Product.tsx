import React from "react";
import "./Product.css";
import videoHousing from "/video/apartamentomedellin.mp4";
import videoDates from "/video/fiestadesolteros.mp4";
import videoRural from "/video/casadecampo2.mp4";

const Product: React.FC = () => {
  return (
    <div id="product">
      <div className="products">
        <div className="productBox">
          <h2 className="productDescription">Housing</h2>
          <video width="600" loop autoPlay muted>
            <source src={videoHousing} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="productBox">
          <h2 className="productDescription">Dating</h2>
          <video width="600" loop autoPlay muted>
            <source src={videoDates} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="productBox">
          <h2 className="productDescription">Country Side</h2>
          <video width="600" loop autoPlay muted>
            <source src={videoRural} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Product;
