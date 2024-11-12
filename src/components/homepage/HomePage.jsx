import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className=" card h-100 w-100">
              <div className="card-body  d-flex justify-content-between flex-column">
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top img-fluid w-50 p-3"
                />
              </div>
               <div>
               <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-success">
                  View Details
                </Link>
               </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
